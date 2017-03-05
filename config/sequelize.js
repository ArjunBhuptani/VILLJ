var Sequelize = require('sequelize');


var sequelize = new Sequelize(
	'd7gjbqjja0b0hp',
	'aozdchrxtohlmi',
	'c50e9f707ff572336406dfa4b2f92d2971955af0882f85c62a7730b699912619', {
		host: 'ec2-54-225-107-107.compute-1.amazonaws.com',
		dialect: 'postgres'
	});

module.exports = sequelize;