# VILLJ WHITEPAPER DRAFT

This is a work in progress gtfo

## Villj Platform Discussion and Executive Summary

Villj was a product created by Arjun Bhuptani and Zane Witherspoon at the USF Tech4Good Hackathon on March 5th 2017.

### The Problem:

When we were asked to come up with a technology to solve a real world social problem, we had difficulty deciding what to pick. The issue was that there are so many problems in the world that needed solving and so many possible solutions to each of those problems. How could we decide which areas were worth focusing on or, in the case of the average millennial, donating to?

After doing some more research, we found two further issues. Firstly, the average contributions to large charitable institutions by millennials is significantly lower than those of other generations. Instead, millennials typically prefer to donate through cause-based charity websites and through crowdfunding, as these methods are much more conducive to a technically-inclined generation.

Secondly, this generation has a significantly increased demand for transparency and accountability. A recent report by The Millennial Impact, an organization focused on researching the socio-economic impact of those born between 1980 and 2000, found that 78% of millennials were likely to stop donating to a cause if they did not know how the donation was making an impact.

### Our Solution:

We decided to create a peer to peer donation platform for crowdfunding solutions to social problems. Our users would be able to log into the platform, post a societal problem that they felt was worth solving and run crowdfunding campaigns to raise money for possible solutions. Other users could then propose solutions on the problem page, with the community voting on what they felt was the best possible method of solving the issue. The winning solution would automatically receive the pooled money upon completion of the crowdfunding campaign.

By democratizing the funding and solution-generating processes, we could ensure that the societal issues that were being tackled were those that a large number of people considered worth addressing. This way, we could abstract away the process of deciding which ideas were worth focusing on and allow people to pursue only the solutions that they were most passionate about.

To do this, we leveraged the use of the Ethereum blockchain. Building Villj on a blockchain allowed us to ensure complete transparency. Since all of the crowdfunding transactions would be written to a public ledger, there would be no possible way to “cheat” the system and divert funding from a proposed solution. Unlike for a large charity organization, users could be sure, then, that the money they donated would certainly be given directly to the problem at hand. Interestingly, despite this transparency, donors could still remain anonymous if they so chose (with an even higher degree of anonymity than is currently available through traditional donation platforms) because the only transaction information that would be recorded on their end would be a randomly generated wallet address from which to send the currency.

The second major advantage to utilizing Ethereum is that it allowed us to eliminate the majority of the cost and liability to ourselves. As a decentralized organization accepting payments in cryptocurrency, we would not have a requirement to incorporate or even to open a bank account to handle transactions. In fact, the entirety of our running cost (even at scale) would be just the $11.99 for registering www.villj.com and the $0.70 for writing our application to the blockchain. Now we recognize, here, that in order to provide a more comprehensive suite of services (payments from traditional fiat currencies, for instance) this situation would have to change, but our development costs would continue to remain significantly lower than competitors even with the addition of other features.

The last advantage is perhaps more philosophical. We believe that community-based organizations should not be controlled by a single corporate entity. By decentralizing our platform, we ensure that platform participants act as part-owners in our funding network. This means that, even if Villj, as an organization, were to fail, active donations and campaigns would still continue to occur and be paid out in full, reducing the liability to ourselves.

### Discussion of Potential Weaknesses:

We noted some potential pitfalls over the course of development and during our pitch. Firstly, Ethereum, while rapidly becoming an established protocol, is still in the relatively early stages of its development. As such, the underlying currency, Ether, which we initially would be accepting payments in, can be very volatile. This could be devastating for extended crowdfunding campaigns as the dollar value of the collected donations would shift dramatically based on market sentiment. Additionally, accepting donations only in Ether would limit our market to one very specific and very technical audience.

There is an elegant possible solution to the above problem. We could create an internal token (called VilljCoins, for instance) which we could trade 1:1 against the dollar. By fixing the price internally, users could ensure that their donations would maintain their original fiat value. These coins could then also be used for the purposes of voting on the platform, and then “cashed out” by the winner of the campaign. This would allow us to both accept other forms of payment and ensure that market effects would not undermine donations for users. To do this, however, we would either have to convert the donations into Ether at our end, incurring a conversion cost and shifting the potential risk of currency volatility to ourselves, or would have to open a bank account in which to temporarily store the dollars.

Another potential pitfall is that, while we are able to provide a greater degree of transparency and accountability by using the blockchain, it would still be difficult to follow up with campaign winners and ensure that the money is being spent on the proposed solution. This is an issue experienced by other crowdfunding platforms as well (and is a weakness to this type of fundraising overall).

We identified four methods of increasing post-funding accountability. First, we would adopt similar practices to other crowdfunding websites. We would ensure that, while donors could remain anonymous, users who proposed solutions would have to provide exhaustive information about themselves and their qualifications. We would then continue to follow up with campaign winners, forcing them to provide consistent updates to donors on their progress, Second (and this is where the advantage of Ethereum really shines through), we would write more complicated Ethereum smart contracts to create a delayed payment system. Campaign winners would be automatically paid only a certain portion of their raised funds until they were able to demonstrate that they had continued to make meaningful progress towards their goals. The measurement of this progress could also be democratized by having donors vote on whether they were satisfied at each step, such that a lack of meaningful progress could result in a clawback of the funds. Note: This is much more simple with Ethereum than on standard platforms as the funds would be held in virtual escrow by the smart contract until termination of the funding process, regardless of whether or not a more complicated funding logic was applied.

Third, we considered the possibility of restricting the solution proposal process to only small and medium sized non-profit organizations at the start. This would ensure that a corporate entity would receive the funding, allowing for litigation to be pursued in the case of misuse. Targeting this market segment initially would also bolster the reliability and efficacy of the Villj brand, hopefully allowing us to attract a more intellectual and socially-conscious user base at scale. Lastly, we established that, in the long term, it would be important for us as an organization to take a vested interest in the success of winning solutions. As such, we would begin to operate as an accelerator/incubator by providing connections, guidance and feedback. Eventually, the goal would be to become the world’s first crowdsourced and crowdfunded incubator, focusing on social entrepreneurship.

### Walkthrough/Demonstration

Users could choose to propose a problem of their own that they believe needs solving. We would ensure that duplicate problems would be avoided by requiring search tags that could be filtered for similarity. Users would propose a problem, with a short description, space for further documentation/research to be attached, and a funding target that they would contribute an initial minimum to (in order to disincentivize the creation of unnecessary pages). This would create a page with the relevant information as shown by the cards in the bottom row of the above image. Alternatively, users to the site can navigate directly to already created pages.

Here, users could choose to donate to the existing campaign, which would grant them voting tokens (proportional to the size of their donation) to vote on their favorite solutions. Alternatively, they could sign in to the platform and propose a solution of their own. We would vet the proposed solutions for the quality and depth of their descriptions (likely through an automated process) but, otherwise, would not need to play any further role in facilitating this ecosystem.

At the expiration of the funding timeline (a few weeks to a few months as chosen by the problem creator) or at the completion of the funding goal, the accumulated funding would be automatically transferred either back to the donors, if the campaign was unsuccessful, or to the winning solution through the logic of the smart contract.

## Villj Organization Structure and Development Plan

### A Foreword on Terminology

ICO refers to an Initial Coin Offering, a crowdsale of shareholder tokens done to raise funding
Token refers to a programmable (coin)asset, created through a smart contract
Smart Contract refers to a computer program written to the Ethereum blockchain that allows for certain actions to be taken by users
DAO refers to a Decentralized Autonomous Organization (not to be confused with the DAO, the specific decentralized entity created and hacked last year). A DAO is an organization where contract law between organization shareholders is maintained through code on the blockchain as opposed to legal measures

### Organization Structure and Development Plan

The first step is to create a prototype for Villj and write a whitepaper describing the purpose behind the product and how the organization will work. After generating community interest and receiving feedback on our whitepaper, we create a VilljCoin which represents a controlling stake in Villj (a token which gives voting rights on how Villj’s funds should be used). We do an ICO for seed funding for 15% of the organization (which goes directly towards paying for development/hosting/initial costs) and founder(s) retain 25% (controlling stake).  There would be a "lockout" period built into VilljCoin that stops founder(s) from selling their stake until the rest of the coins are given out. That being said, they still retain a controlling stake initially which is ideal because it means that initial development decisions can be made unilaterally, without the need for constant voting with (likely non-technical) public VilljCoin holders. It's important to note that, at this point, Villj is still not charging anything and has no revenue. The reason for this is that, until the organization is established and develops a strong user-base, there is no competitive advantage to an open source platform. Anyone else could just come copy our smart contract off of the blockchain and charge less fees, making it a race to the bottom.

Then the development phase begins. During development, the remaining 60% is given out as "rewards" for open source development (and possible further funding rounds if absolutely required). The consequence of this is that developers who contribute a lot to the project can slowly build up a controlling stake, which makes sense because over the years of development, they would likely become domain experts. This also means that the organization becomes increasingly democratic and decentralized as development continues. Which is good because, presumably, by then, Villj is seeing a lot of user engagement and is functioning like an actual venture backed company.

After the development phase ends (all the tokens are given out), founders can then "exit" by selling their 25% stake (presumably for at least a few million). We'd impose selling limits on the coin so that not all of them could be sold at once since that would flood the coin market and artificially depress the value of VilljCoin. After that, Villj exists completely as its own decentralized entity, with subsequent fund allocations being voted on by share(coin)holders, who will likely be broken down as part long-term developers (with domain expertise), part investing organizations like VCs with a large stake and the remainder as regular individual investors. My intuition here is that the breakdown will end up looking a LOT like it currently does after a company IPOs since I think that's a natural balance point for how large organizations are run/owned. 

Since all of the tokens will have been distributed by this point, there will be no way for Villj to raise more capital. However, since the platform would likely have an established userbase (to have survived this long) and would experience the benefits of network effects, at this point a revenue stream could be added by charging a small percentage fee for crowdfunding.  One potential problem that I foresaw was that shareholders would have a strong profit motive, so what would stop them from arbitrarily raising the crowdfunding margin to generate extra revenue? I think what would happen in this case would be that there would be a tipping point. A certain fee could be leveraged as a "cost" of the platform network which users would be willing to pay. However, above that cost, people would just give up, go copy the open source code and just make their own version of Villj. I think these competing effects would make it so that the revenue model would find an equilibrium, which (as per my intuition) would also be a model which would lead to steady, sustainable (non-exploitative) growth.


Note 1: Just wanted to specify, the reason we don’t just ICO a bigger stake of the company (say 80%) is because voting process during development has killed the agility of DAOs in the past. For more information on this, see the organization called BitShares. However, we also can’t just give the coin as a bounty without first ICOing because then we're compensating development with an asset that has no monetary value.


Note 2: For a justification of the financial benefits of network effects discussed in the final paragraph of this document, see Metcalfe’s Law:
(https://en.wikipedia.org/wiki/Metcalfe%27s_law)

Disclaimer: This document is a work in progress and does not necessarily reflect the current or future organizational structure of Villj. Don’t sue me yet.
Further Discussion/Points of Consideration

Legal issues surrounding DAOs. How can we protect against founder liability in a lawsuit if there is no corporate entity?
How can funds be raised and held? Would likely have to form a non-profit foundation to hold the organization funds (but then how do we regulate spending?)
Benefits of not incorporating vs pitfalls
Create a mechanism for establishing proof of stake consensus - deal with no-vote cases


