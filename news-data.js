'use strict';
/* Pocket Money Master V3.1 simulation-news library.
   Edit or add stories here without changing the investment engine. */
const PMM_NEWS_DATA={
  disclaimer:'Simulation News: The companies and events in these reports are fictional and created for this game.',
  tips:[
    'Do not put all your money in one investment.',
    'A higher possible reward usually means a higher risk.',
    'One good day does not promise future growth.',
    'A falling price may rise again, but this is never certain.',
    'Think about how much money you are ready to lose.'
  ],
  bonds:{label:'Government Bonds',risk:'Low',stories:{
    strongPositive:[['City Projects Receive Strong Support','The government has announced strong support for new public projects. More families are choosing bonds for steady returns.']],
    positive:[['New School Plan Helps Bond Demand','A new school building plan needs long-term funding. Interest in government bonds has grown.']],
    mixed:[['Investors Compare Safe Choices','Some investors are buying bonds, while others are waiting for better returns. Bond prices may move only a little.']],
    stable:[['Bond Market Stays Calm','Government bonds are moving by very small amounts. There is no strong direction today.']],
    negative:[['Investors Look for Higher Returns','Some investors have moved money away from bonds to try other choices. Bond demand may fall slightly.']],
    strongNegative:[['Large Project Is Delayed','A major public project has been delayed. Investors are more careful, and bond demand may weaken.']]
  }},
  fund:{label:'Diversified Fund',risk:'Medium',stories:{
    strongPositive:[['Many Businesses Report Good Results','Shops, technology companies and energy businesses have all reported stronger results. The mixed fund may receive broad support.']],
    positive:[['Several Markets Show Steady Growth','A group of different businesses has made progress this month. A diversified fund may benefit from this growth.']],
    mixed:[['Good Sales but Higher Costs','Some companies sold more products, but transport and energy costs also rose. The fund may move in both directions.']],
    stable:[['Mixed Fund Has a Quiet Week','Some parts of the fund rose while others fell. The total value is changing only a little.']],
    negative:[['Several Businesses Face Slower Sales','Shops and factories have reported fewer orders. The diversified fund may face a weak period.']],
    strongNegative:[['Problems Reach Several Industries','Technology, shops and transport companies have all reported problems. The mixed fund may come under strong pressure.']]
  }},
  property:{label:'Property Fund',risk:'Medium',stories:{
    strongPositive:[['BrightCity Wins a Major Building Plan','BrightCity Property has received approval for new homes and shops. Many buyers have shown early interest.']],
    positive:[['Riverstone Homes Sell Quickly','Riverstone Developments sold more new homes than expected. Property investors are watching closely.']],
    mixed:[['More Buyers but Building Costs Rise','Horizon Homes has found more buyers, but materials now cost more. The property outlook is mixed.']],
    stable:[['Property Prices Move Slowly','Home sales are steady and building activity is calm. Property values may change only a little.']],
    negative:[['New Home Sales Slow Down','BrightCity Property has reported fewer buyers this month. Property funds may lose some value.']],
    strongNegative:[['Riverstone Stops a Building Project','Riverstone Developments found serious problems at a building site. Work has stopped while the company checks the project.']]
  }},
  shares:{label:'Share Market',risk:'High',stories:{
    strongPositive:[['BrightBot AI Launches a Learning Robot','BrightBot AI has created a new learning robot. Many schools have placed early orders, and technology shares may receive strong support.'],['PixelForge Game Becomes a Big Hit','PixelForge Games has released a popular new game. Sales are much higher than expected.']],
    positive:[['NovaMind AI Finds New Customers','NovaMind AI has signed deals with several schools. Investors are showing more interest in technology shares.'],['SunSpark Builds a Better Battery','SunSpark Energy has tested a battery that lasts longer. The news may help clean-energy shares grow.']],
    mixed:[['BrightBot Grows but Costs Rise','BrightBot AI has gained new customers, but the company is also spending more money. Investors are unsure what may happen next.'],['PixelForge Sales Rise After a Delay','PixelForge sold more games, but its next release will arrive late. Share prices may move in both directions.']],
    stable:[['Share Market Waits for New Results','Companies have shared very little new information. Share prices are moving up and down by small amounts.']],
    negative:[['RoboLearn Delays a New Product','RoboLearn Labs has delayed its new robot. Some investors are worried that sales may fall.'],['CloudQuest Reports Weaker Sales','CloudQuest Interactive sold fewer games this month. Some share prices may come under pressure.']],
    strongNegative:[['BrightBot Finds a Robot Safety Problem','BrightBot AI has found a problem in a new robot. Sales have stopped while the company checks the product.'],['SunSpark Battery Test Fails','A new SunSpark battery failed an important safety test. The company must repeat its work, and investors are worried.']]
  }}
};
