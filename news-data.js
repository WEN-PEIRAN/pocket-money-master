'use strict';
/* Pocket Money Master expanded fictional market-news library. */
const PMM_NEWS_DATA = {
  "disclaimer": "Simulation News: The companies and events in these reports are fictional and created for this game.",
  "bonds": {
    "label": "Government Bonds",
    "risk": "Low"
  },
  "fund": {
    "label": "Diversified Fund",
    "risk": "Medium"
  },
  "property": {
    "label": "Property Fund",
    "risk": "Medium"
  },
  "shares": {
    "label": "Share Market",
    "risk": "High"
  },
  "shareStories": {
    "smallRise": [
      [
        "HarbourLink Wins a Regional Ferry Upgrade",
        "HarbourLink Engineering has won a medium-sized contract to improve electric ferries in three coastal towns.",
        "HarbourLink builds control systems for public transport. The new contract will keep one of its factories busy for several months.",
        "The deal is useful, but it is much smaller than the company's national projects. Higher metal prices may also reduce some of the profit.",
        "Investors welcomed the confirmed work, although most are waiting to see whether the project stays on budget.",
        "Does a confirmed medium-sized contract make a company safer?"
      ],
      [
        "Maple Health Opens Two New Clinics",
        "Maple Health has opened two neighbourhood clinics after demand for its health services increased.",
        "The clinics offer basic check-ups, online appointments and children's health services. Early bookings are slightly above the company's forecast.",
        "Opening new clinics creates more income opportunities, but rent, equipment and staff training also cost money.",
        "Investors see steady progress rather than a major change in the company's future.",
        "Would early bookings be enough information for you to invest?"
      ],
      [
        "Orbit Parcel Cuts Delivery Times",
        "Orbit Parcel has introduced new route software that is helping drivers finish deliveries faster.",
        "The software studies traffic and chooses shorter routes. A four-week trial reduced fuel use and late deliveries.",
        "The improvement currently covers only two cities, so the company must prove that it works across a larger network.",
        "Lower operating costs gave investors a modest reason to feel more confident.",
        "How can lower costs help a company even when sales stay the same?"
      ],
      [
        "BluePeak Water Signs a Council Deal",
        "BluePeak Water will install smart water meters for a local council.",
        "The meters can find leaks and help households understand their water use. The council has confirmed the first stage of the project.",
        "A second and larger stage will depend on the results of the first installation.",
        "Investors liked the new income, but the small size of the first stage kept expectations reasonable.",
        "Would you invest before the second stage is approved?"
      ],
      [
        "Luma Studios Finds a New Audience",
        "Luma Studios has sold its animated science series to a children's streaming service.",
        "The programme was already popular in Australia, and the new agreement will make it available in two more countries.",
        "The payment is helpful, but the company must create additional episodes before receiving the full amount.",
        "The deal provided a small lift to interest in media shares.",
        "Is reaching a new audience always profitable?"
      ],
      [
        "FreshRoute Reports Better Farm Deliveries",
        "FreshRoute Logistics delivered more fresh food on time after changing its cold-storage system.",
        "Supermarkets reported fewer damaged fruit and vegetable deliveries during the trial.",
        "FreshRoute plans to update more trucks, but buying new equipment will temporarily increase costs.",
        "Investors responded positively because the service improvement may help the company keep important customers.",
        "Would better service matter more than the cost of new equipment?"
      ],
      [
        "RedGum Furniture Receives Strong Reviews",
        "RedGum Furniture's new recycled-wood desk has received good customer reviews.",
        "The company sold slightly more desks than expected during the first month. Several schools also requested product samples.",
        "RedGum has not yet received a large school order, and recycled timber supplies can be unpredictable.",
        "Investors saw a possible path to growth, but not enough evidence for a major rise.",
        "Would product reviews influence your decision?"
      ],
      [
        "CloudGarden Adds Business Customers",
        "CloudGarden Software has gained a small group of cafés and shops for its booking service.",
        "The software helps small businesses manage bookings, staff shifts and customer messages.",
        "Monthly subscriptions are increasing slowly, while the company continues to spend money on technical support.",
        "Investors were encouraged by the new customers but remained careful about costs.",
        "Why are regular subscriptions useful to a company?"
      ]
    ],
    "largeRise": [
      [
        "SkyRail Wins a National Train Contract",
        "SkyRail Systems has won its largest contract to build control equipment for a national rail project.",
        "The confirmed agreement covers hundreds of trains and will continue for five years.",
        "SkyRail plans to expand its main factory and hire specialist engineers. The long contract could provide reliable income for several years.",
        "Investors reacted strongly because the order is much larger than the company's normal work, although delivery delays remain a risk.",
        "Would a five-year contract change how you judge the company?"
      ],
      [
        "MedNova Announces a Successful Vaccine Trial",
        "MedNova Research has reported strong results from a major vaccine trial.",
        "Independent researchers found that the vaccine met its safety and effectiveness targets.",
        "The company will now apply for approval and has already received early orders from several health providers.",
        "Investors see the trial as a major breakthrough, but final approval and large-scale production are still required.",
        "Would you invest before final approval is given?"
      ],
      [
        "TerraChip Reveals a Faster Low-Power Processor",
        "TerraChip has developed a computer processor that uses less power while completing tasks faster.",
        "Several laptop makers have signed agreements to test and purchase the new processor.",
        "The company expects production to rise sharply next year and is expanding its factory.",
        "Technology investors responded strongly, though manufacturing such a new design may create unexpected problems.",
        "Can a strong invention succeed if production is difficult?"
      ],
      [
        "Southern Harvest Secures an Export Agreement",
        "Southern Harvest Foods will supply packaged fruit to a large overseas supermarket group.",
        "The three-year agreement is worth far more than the company's existing export business.",
        "Southern Harvest is adding a new packing line and working with more farms to meet the order.",
        "Investors welcomed the confirmed sales, but weather and shipping problems could still affect delivery.",
        "How could an export agreement create both growth and risk?"
      ],
      [
        "AquaSafe Technology Stops a Major Water Leak",
        "AquaSafe's new sensor system helped a city find and repair a serious underground water leak.",
        "The successful result attracted interest from many other councils. Five cities have now signed agreements to use the system.",
        "AquaSafe expects sales to rise quickly and plans to train more installation teams.",
        "Investors reacted strongly to the confirmed contracts, while watching whether the small company can grow fast enough.",
        "What problems can happen when a small company grows quickly?"
      ],
      [
        "NorthStar Games Breaks Launch Records",
        "NorthStar Games has reported record worldwide sales for its new cooperative adventure game.",
        "The game became one of the most downloaded family titles during its first week.",
        "NorthStar raised its yearly income forecast and announced additional content for the next twelve months.",
        "Investors rushed to watch gaming shares, although popular games can lose players if updates disappoint them.",
        "Can one very successful product support a company for years?"
      ],
      [
        "EcoStone Receives Approval for a New Building Material",
        "EcoStone's fire-resistant recycled building material has passed national safety testing.",
        "Several construction companies have already placed large orders for upcoming projects.",
        "The approval opens a much larger market than EcoStone could previously enter.",
        "Investors expect strong growth, but the company must keep quality consistent while greatly increasing production.",
        "Why is independent safety approval important?"
      ],
      [
        "Pulse Mobile Buys a Growing Payment Company",
        "Pulse Mobile has purchased QuickPay, a rapidly growing digital payment business.",
        "QuickPay is used by thousands of small shops and has gained customers every month.",
        "Pulse expects the purchase to add new services and regular transaction income to its main business.",
        "Investors reacted positively to the larger customer network, but combining two companies may be difficult and expensive.",
        "Does buying another company always create value?"
      ]
    ],
    "stable": [
      [
        "Central Bank Decision Leaves Investors Waiting",
        "Interest rates have been left unchanged, giving the share market no clear new direction.",
        "Some companies benefit from steady borrowing costs, while banks and property businesses had hoped for a rate change.",
        "Investors made only small adjustments because the decision was widely expected.",
        "Attention has now moved to next month's employment and price reports.",
        "Why might an expected decision have little effect on prices?"
      ],
      [
        "Strong Travel Sales Meet Higher Fuel Costs",
        "Travel companies sold more tickets, but airlines also paid more for fuel.",
        "Holiday bookings were stronger than last year. At the same time, fuel and airport costs increased.",
        "The extra sales and higher costs may mostly cancel each other out.",
        "Investors are waiting for full profit reports before deciding whether travel shares are improving.",
        "Are higher sales helpful if costs rise by the same amount?"
      ],
      [
        "Retailers Report Mixed Holiday Results",
        "Some retailers had a strong holiday season, while others missed their sales targets.",
        "Toy and sports shops performed well, but homeware and clothing sales were weaker.",
        "No single result was large enough to guide the whole market.",
        "Investors are studying which changes may continue after the holiday period.",
        "Why can one industry contain both winners and losers?"
      ],
      [
        "Technology Companies Prepare Product Events",
        "Several technology companies have announced presentation dates but revealed few product details.",
        "Rumours have attracted attention, but the companies have not confirmed prices, features or release dates.",
        "Some investors bought shares early, while others preferred to wait for evidence.",
        "The balanced buying and selling kept prices within a narrow range.",
        "Is a rumour enough reason to invest?"
      ],
      [
        "Australian Dollar Moves Little",
        "The Australian dollar has stayed close to the same value against major currencies.",
        "Exporters received no major benefit or disadvantage from currency changes this week.",
        "Companies that import equipment also faced similar costs to last month.",
        "With little movement in currency markets, investors focused on company-specific news instead.",
        "How can currency changes affect businesses?"
      ],
      [
        "Mining Output Rises as Metal Prices Fall",
        "Mining companies produced more material, but market prices for several metals declined.",
        "The higher production helped sales volume. Lower selling prices reduced the value of each shipment.",
        "These two forces produced mixed company forecasts.",
        "Investors remained cautious while waiting to see which trend becomes stronger.",
        "Which matters more to a miner: amount sold or sale price?"
      ],
      [
        "New Business Rules Create Winners and Costs",
        "A new reporting rule may improve customer trust but will cost companies money to introduce.",
        "Large businesses can prepare new systems quickly, while smaller companies may need outside help.",
        "Some investors welcome the clearer information. Others are concerned about short-term costs.",
        "The market response stayed balanced because the rule has both benefits and disadvantages.",
        "Can a costly rule help a company in the long term?"
      ],
      [
        "Investors Review Company Leadership Changes",
        "Several companies have appointed new leaders, but their plans are not yet clear.",
        "The new leaders have strong experience, although none has announced a major strategy change.",
        "Employees and investors are waiting for details about future products, costs and hiring.",
        "Without confirmed action, share prices moved only slightly.",
        "Should investors judge a leader before seeing a plan?"
      ]
    ],
    "smallFall": [
      [
        "CoastAir Cancels Some Winter Flights",
        "CoastAir has cancelled several quiet routes after receiving fewer bookings than expected.",
        "Most major routes will continue, but the cancellations reduce the airline's winter income.",
        "The company says the change will also save fuel and staffing costs.",
        "Investors became slightly more cautious while waiting to see whether summer bookings improve.",
        "Could cancelling weak routes help the company later?"
      ],
      [
        "RiverBank Faces a Rise in Late Loan Payments",
        "RiverBank has reported a modest increase in customers paying loans late.",
        "Most customers are still paying normally, but the bank has set aside more money for possible losses.",
        "Higher savings income partly balanced the concern.",
        "Investors treated the report as a warning rather than a major crisis.",
        "Why does a bank save money for possible loan losses?"
      ],
      [
        "UrbanCart Delays a Warehouse Opening",
        "UrbanCart's new delivery warehouse will open six weeks later than planned.",
        "Construction workers found that extra electrical work was required before equipment could be installed.",
        "The delay will temporarily limit the number of orders UrbanCart can deliver.",
        "Investors expect a small impact because the warehouse project is still continuing.",
        "Does a delay matter if the project remains on track overall?"
      ],
      [
        "SilverScreen Loses a Popular Show",
        "SilverScreen Streaming will lose one of its most-watched programmes when a contract ends.",
        "The service still has many other programmes, but some customers may cancel after the show leaves.",
        "SilverScreen is preparing two new series to replace it.",
        "Investors became cautious because the success of the replacement programmes is uncertain.",
        "How important can one popular programme be?"
      ],
      [
        "FarmTech Pays More for Imported Parts",
        "FarmTech Machinery is paying more for computer parts used in its farming equipment.",
        "The company can continue production, but each machine now costs more to build.",
        "Managers are negotiating with new suppliers and may change part of the design.",
        "Investors expect lower profit until the supply problem improves.",
        "Could changing suppliers create new risks?"
      ],
      [
        "Beacon Education Reports Slower Enrolments",
        "Beacon Education added fewer online students than forecast this term.",
        "Most current students remain subscribed, but the company's advertising attracted fewer new families.",
        "Beacon plans to update its courses and reduce some marketing costs.",
        "The market treated the result as a small setback rather than a failure.",
        "Would keeping current customers reduce the concern?"
      ],
      [
        "MetroBuild Loses One Apartment Project",
        "MetroBuild was not selected for a planned apartment project.",
        "The company still has several construction contracts, but it had expected this project to begin next year.",
        "Managers say they will bid for other work and keep current teams employed.",
        "Investors reduced their expectations slightly because future income is now less certain.",
        "How much should one lost project affect a large company?"
      ],
      [
        "OceanFresh Recalls One Product Batch",
        "OceanFresh Foods has recalled one batch of frozen meals after a packaging error.",
        "The food itself is safe, but some labels show the wrong allergy information.",
        "The company removed the affected products and will pay for replacement stock.",
        "Investors are concerned about costs and customer trust, though the recall is limited to one batch.",
        "Does fast action reduce the damage from a mistake?"
      ]
    ],
    "largeFall": [
      [
        "IronVale Mine Closes After a Major Flood",
        "IronVale Mining has closed its largest site after floodwater damaged roads and equipment.",
        "Engineers cannot yet say when full production will restart. The mine normally supplies a large part of IronVale's yearly output.",
        "Repairs, safety checks and lost shipments may cost the company a large amount.",
        "Investors reacted strongly because the closure affects both current income and future contracts.",
        "What would you need to know before investing again?"
      ],
      [
        "SecurePay Reports a Serious Data Breach",
        "SecurePay has shut down part of its payment service after attackers accessed customer records.",
        "The company is working with security specialists and government investigators. Some business customers have paused their use of the service.",
        "SecurePay may face repair costs, legal action and damage to customer trust.",
        "Investors are worried that important clients could move to competitors.",
        "Can a company rebuild trust after a major data problem?"
      ],
      [
        "AeroQuest Flight Test Ends in Failure",
        "AeroQuest's new electric aircraft was badly damaged during an unmanned test flight.",
        "No people were on board, but the aircraft programme has been stopped while engineers investigate.",
        "The failed model was expected to become the company's main new product. More testing may take many months.",
        "Investors reacted sharply because development costs are already very high.",
        "Would one failed test end the whole project?"
      ],
      [
        "CityMart Accounting Errors Reduce Reported Profit",
        "CityMart has corrected its financial report after finding major accounting errors.",
        "The company had reported more profit than it actually earned. Independent accountants are reviewing earlier reports.",
        "Investors are concerned about the reliability of company information and the decisions made by management.",
        "The lost trust may be as damaging as the lower profit.",
        "Why is trustworthy information important to investors?"
      ],
      [
        "BioLeaf Loses Approval for Its Main Product",
        "Health regulators have stopped sales of BioLeaf's most important medicine.",
        "Inspectors found that one factory did not meet required quality standards.",
        "The company must repair the factory and prove that production is safe before sales can restart.",
        "Because the medicine provides much of BioLeaf's income, investors expect a serious financial impact.",
        "Would approval at a second factory change the situation?"
      ],
      [
        "Global Freight Workers Begin a Long Strike",
        "Workers at Global Freight's largest shipping centre have begun an open-ended strike.",
        "Thousands of containers cannot move normally, and major customers are looking for other transport companies.",
        "Talks between the company and workers have not produced an agreement.",
        "Investors fear lost contracts, delayed deliveries and high costs if the strike continues.",
        "How could a worker dispute affect customers?"
      ],
      [
        "HomeCore Faces a Dangerous Appliance Recall",
        "HomeCore has recalled hundreds of thousands of heaters after several units caught fire.",
        "Stores have stopped selling the product, and customers are being offered refunds.",
        "The company must pay replacement costs and complete a full safety investigation.",
        "Investors are worried about legal claims and long-term damage to the brand.",
        "What could HomeCore do to regain customer confidence?"
      ],
      [
        "Zenith Media's Merger Is Blocked",
        "Regulators have blocked Zenith Media's planned merger with a major competitor.",
        "Zenith had already spent a large amount preparing the deal and expected the merger to reduce costs.",
        "The company must now develop a new growth plan while paying cancellation and legal expenses.",
        "Investors reacted strongly because an important part of Zenith's future strategy has failed.",
        "Can the company grow without the merger?"
      ]
    ]
  }
};
