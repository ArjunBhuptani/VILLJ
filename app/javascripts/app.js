// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import metacoin_artifacts from '../../build/contracts/MetaCoin.json'

//db modules
var sequelize = require('../../config/sequelize.js');
var Problems = sequelize.import('../models/problems.model.js');
var Solutions = sequelize.import('../models/solutions.model.js');

// MetaCoin is our usable abstraction, which we'll use through the code below.
var MetaCoin = contract(metacoin_artifacts);


var accounts;
var account;

window.App = {
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      account = accounts[0];

      self.refreshBalance();
    });
  },

  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },

  refreshBalance: function() {
    var self = this;

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.getBalance.call(account, {from: account});
    }).then(function(value) {
      var balance_element = document.getElementById("balance");
      balance_element.innerHTML = value.valueOf();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting balance; see log.");
    });
  },

  sendCoin: function() {
    var self = this;

    var amount = parseInt(document.getElementById("amount").value);
    var receiver = document.getElementById("receiver").value;

    this.setStatus("Initiating transaction... (please wait)");

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.sendCoin(receiver, amount, {from: account});
    }).then(function() {
      self.setStatus("Transaction complete!");
      self.refreshBalance();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error sending coin; see log.");
    });
  },

  //db write methods
  createProblem: function(req, res) {
    var data = req.body;
    Problems.build({
      name: data.name,
      details: data.details,
      money_raised: data.money_raised,
      contributors: data.contributors,
      image: data.image
    }).save().then(function(promise){
      console.log("Created new problem: " + data.name);
      res.send({"message": "Created new problem: " + data.name});
    }).catch(function(err){
      console.log("Error saving problem to db");
      res.send({"error": error});
    });
  },

  createSolution: function(req, res) {
    var data = req.body;
    Solutions.build({
      name: data.name,
      details: data.details,
      votes: data.votes,
      image: data.image,
      user_name: data.user_name,
      wallet_address: wallet_address
    }).save().then(function(promise){
      console.log("Created new solution: " + data.name);
      res.send({"message": "Created new solution: " + data.name});
    }).catch(function(err){
      console.log("Error saving solution to db");
      res.send({"error": error})
    });
  }

};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  App.start();
});
