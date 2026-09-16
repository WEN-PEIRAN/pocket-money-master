'use strict';
/* Pocket Money Master complete 180-story fictional market-news library. */
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
  "marketStories": {
    "bonds": {
      "smallRise": [
        [
          "Regional Hospital Bonds Attract Steady Demand",
          "Regional hospital bonds attract steady demand. A confirmed improvement has given investors a little more confidence.",
          "Regional hospital bonds attract steady demand. The event was confirmed in the latest fictional market report for government bonds.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "New Library Programme Receives Full Funding",
          "New library programme receives full funding. A confirmed improvement has given investors a little more confidence.",
          "New library programme receives full funding. The event was confirmed in the latest fictional market report for government bonds.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Would you act now or wait for another report?"
        ],
        [
          "Council Transport Bonds Sell Slightly Faster",
          "Council transport bonds sell slightly faster. A confirmed improvement has given investors a little more confidence.",
          "Council transport bonds sell slightly faster. The event was confirmed in the latest fictional market report for government bonds.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What new information could change your decision?"
        ],
        [
          "School Renewal Plan Gains Investor Support",
          "School renewal plan gains investor support. A confirmed improvement has given investors a little more confidence.",
          "School renewal plan gains investor support. The event was confirmed in the latest fictional market report for government bonds.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Water Project Receives A Strong Credit Review",
          "Water project receives a strong credit review. A confirmed improvement has given investors a little more confidence.",
          "Water project receives a strong credit review. The event was confirmed in the latest fictional market report for government bonds.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Green Infrastructure Bonds Gain Family Buyers",
          "Green infrastructure bonds gain family buyers. A confirmed improvement has given investors a little more confidence.",
          "Green infrastructure bonds gain family buyers. The event was confirmed in the latest fictional market report for government bonds.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Road Repair Plan Stays Under Budget",
          "Road repair plan stays under budget. A confirmed improvement has given investors a little more confidence.",
          "Road repair plan stays under budget. The event was confirmed in the latest fictional market report for government bonds.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Public Housing Bond Auction Closes Successfully",
          "Public housing bond auction closes successfully. A confirmed improvement has given investors a little more confidence.",
          "Public housing bond auction closes successfully. The event was confirmed in the latest fictional market report for government bonds.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Treasury Savings Campaign Reaches More Households",
          "Treasury savings campaign reaches more households. A confirmed improvement has given investors a little more confidence.",
          "Treasury savings campaign reaches more households. The event was confirmed in the latest fictional market report for government bonds.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "largeRise": [
        [
          "National Rail Bonds Receive Record Demand",
          "National rail bonds receive record demand. A major positive event has changed expectations for future income.",
          "National rail bonds receive record demand. The event was confirmed in the latest fictional market report for government bonds.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Government Debt Rating Is Upgraded",
          "Government debt rating is upgraded. A major positive event has changed expectations for future income.",
          "Government debt rating is upgraded. The event was confirmed in the latest fictional market report for government bonds.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Would you act now or wait for another report?"
        ],
        [
          "Major Hospital Programme Wins Long-Term Backing",
          "Major hospital programme wins long-term backing. A major positive event has changed expectations for future income.",
          "Major hospital programme wins long-term backing. The event was confirmed in the latest fictional market report for government bonds.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What new information could change your decision?"
        ],
        [
          "Large Clean-Energy Bond Issue Sells Out",
          "Large clean-energy bond issue sells out. A major positive event has changed expectations for future income.",
          "Large clean-energy bond issue sells out. The event was confirmed in the latest fictional market report for government bonds.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "International Funds Increase Australian Bond Holdings",
          "International funds increase Australian bond holdings. A major positive event has changed expectations for future income.",
          "International funds increase Australian bond holdings. The event was confirmed in the latest fictional market report for government bonds.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Budget Surplus Strengthens Government Borrowing",
          "Budget surplus strengthens government borrowing. A major positive event has changed expectations for future income.",
          "Budget surplus strengthens government borrowing. The event was confirmed in the latest fictional market report for government bonds.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Emergency Rebuilding Bonds Receive Strong Support",
          "Emergency rebuilding bonds receive strong support. A major positive event has changed expectations for future income.",
          "Emergency rebuilding bonds receive strong support. The event was confirmed in the latest fictional market report for government bonds.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Central Bank Announcement Lifts Bond Confidence",
          "Central bank announcement lifts bond confidence. A major positive event has changed expectations for future income.",
          "Central bank announcement lifts bond confidence. The event was confirmed in the latest fictional market report for government bonds.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "National School Programme Secures Full Funding",
          "National school programme secures full funding. A major positive event has changed expectations for future income.",
          "National school programme secures full funding. The event was confirmed in the latest fictional market report for government bonds.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "stable": [
        [
          "Bond Investors Wait For The Federal Budget",
          "Bond investors wait for the federal budget. The latest information contains both helpful and unhelpful signs.",
          "Bond investors wait for the federal budget. The event was confirmed in the latest fictional market report for government bonds.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Interest Rates Remain Unchanged",
          "Interest rates remain unchanged. The latest information contains both helpful and unhelpful signs.",
          "Interest rates remain unchanged. The event was confirmed in the latest fictional market report for government bonds.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Would you act now or wait for another report?"
        ],
        [
          "Two Public Projects Produce Mixed Signals",
          "Two public projects produce mixed signals. The latest information contains both helpful and unhelpful signs.",
          "Two public projects produce mixed signals. The event was confirmed in the latest fictional market report for government bonds.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What new information could change your decision?"
        ],
        [
          "Bond Auction Matches The Previous Month",
          "Bond auction matches the previous month. The latest information contains both helpful and unhelpful signs.",
          "Bond auction matches the previous month. The event was confirmed in the latest fictional market report for government bonds.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Government Spending Plans Remain Under Review",
          "Government spending plans remain under review. The latest information contains both helpful and unhelpful signs.",
          "Government spending plans remain under review. The event was confirmed in the latest fictional market report for government bonds.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Investors Balance Safety And Low Returns",
          "Investors balance safety and low returns. The latest information contains both helpful and unhelpful signs.",
          "Investors balance safety and low returns. The event was confirmed in the latest fictional market report for government bonds.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Credit Rating Stays Unchanged",
          "Credit rating stays unchanged. The latest information contains both helpful and unhelpful signs.",
          "Credit rating stays unchanged. The event was confirmed in the latest fictional market report for government bonds.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Infrastructure Timetable Remains Steady",
          "Infrastructure timetable remains steady. The latest information contains both helpful and unhelpful signs.",
          "Infrastructure timetable remains steady. The event was confirmed in the latest fictional market report for government bonds.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Treasury Market Has A Quiet Week",
          "Treasury market has a quiet week. The latest information contains both helpful and unhelpful signs.",
          "Treasury market has a quiet week. The event was confirmed in the latest fictional market report for government bonds.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "smallFall": [
        [
          "Investors Move Some Money Into Company Shares",
          "Investors move some money into company shares. A limited problem has made investors more cautious.",
          "Investors move some money into company shares. The event was confirmed in the latest fictional market report for government bonds.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Small Council Project Is Delayed",
          "Small council project is delayed. A limited problem has made investors more cautious.",
          "Small council project is delayed. The event was confirmed in the latest fictional market report for government bonds.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Would you act now or wait for another report?"
        ],
        [
          "Inflation Worries Reduce Bond Interest",
          "Inflation worries reduce bond interest. A limited problem has made investors more cautious.",
          "Inflation worries reduce bond interest. The event was confirmed in the latest fictional market report for government bonds.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What new information could change your decision?"
        ],
        [
          "Bond Auction Receives Fewer Bids",
          "Bond auction receives fewer bids. A limited problem has made investors more cautious.",
          "Bond auction receives fewer bids. The event was confirmed in the latest fictional market report for government bonds.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Transport Plan Costs Rise Moderately",
          "Transport plan costs rise moderately. A limited problem has made investors more cautious.",
          "Transport plan costs rise moderately. The event was confirmed in the latest fictional market report for government bonds.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "New Savings Product Competes With Bonds",
          "New savings product competes with bonds. A limited problem has made investors more cautious.",
          "New savings product competes with bonds. The event was confirmed in the latest fictional market report for government bonds.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Public Project Completion Moves Back One Month",
          "Public project completion moves back one month. A limited problem has made investors more cautious.",
          "Public project completion moves back one month. The event was confirmed in the latest fictional market report for government bonds.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Government Borrowing Forecast Increases Slightly",
          "Government borrowing forecast increases slightly. A limited problem has made investors more cautious.",
          "Government borrowing forecast increases slightly. The event was confirmed in the latest fictional market report for government bonds.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Overseas Buyers Reduce Small Bond Purchases",
          "Overseas buyers reduce small bond purchases. A limited problem has made investors more cautious.",
          "Overseas buyers reduce small bond purchases. The event was confirmed in the latest fictional market report for government bonds.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "largeFall": [
        [
          "Government Credit Outlook Is Cut",
          "Government credit outlook is cut. A serious event may have a large effect on income, costs or customer trust.",
          "Government credit outlook is cut. The event was confirmed in the latest fictional market report for government bonds.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Major Infrastructure Programme Is Cancelled",
          "Major infrastructure programme is cancelled. A serious event may have a large effect on income, costs or customer trust.",
          "Major infrastructure programme is cancelled. The event was confirmed in the latest fictional market report for government bonds.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Would you act now or wait for another report?"
        ],
        [
          "Unexpected Budget Deficit Worries Investors",
          "Unexpected budget deficit worries investors. A serious event may have a large effect on income, costs or customer trust.",
          "Unexpected budget deficit worries investors. The event was confirmed in the latest fictional market report for government bonds.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What new information could change your decision?"
        ],
        [
          "Large Bond Auction Fails To Reach Its Target",
          "Large bond auction fails to reach its target. A serious event may have a large effect on income, costs or customer trust.",
          "Large bond auction fails to reach its target. The event was confirmed in the latest fictional market report for government bonds.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Inflation Jumps Above Expectations",
          "Inflation jumps above expectations. A serious event may have a large effect on income, costs or customer trust.",
          "Inflation jumps above expectations. The event was confirmed in the latest fictional market report for government bonds.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Public Project Faces A Serious Cost Blowout",
          "Public project faces a serious cost blowout. A serious event may have a large effect on income, costs or customer trust.",
          "Public project faces a serious cost blowout. The event was confirmed in the latest fictional market report for government bonds.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "International Fund Sells A Large Bond Holding",
          "International fund sells a large bond holding. A serious event may have a large effect on income, costs or customer trust.",
          "International fund sells a large bond holding. The event was confirmed in the latest fictional market report for government bonds.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Emergency Spending Sharply Increases Borrowing",
          "Emergency spending sharply increases borrowing. A serious event may have a large effect on income, costs or customer trust.",
          "Emergency spending sharply increases borrowing. The event was confirmed in the latest fictional market report for government bonds.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Political Uncertainty Delays The National Budget",
          "Political uncertainty delays the national budget. A serious event may have a large effect on income, costs or customer trust.",
          "Political uncertainty delays the national budget. The event was confirmed in the latest fictional market report for government bonds.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ]
    },
    "fund": {
      "smallRise": [
        [
          "Healthcare Gains Offset Weak Retail Sales",
          "Healthcare gains offset weak retail sales. A confirmed improvement has given investors a little more confidence.",
          "Healthcare gains offset weak retail sales. The event was confirmed in the latest fictional market report for diversified fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Technology And Food Companies Report Steady Growth",
          "Technology and food companies report steady growth. A confirmed improvement has given investors a little more confidence.",
          "Technology and food companies report steady growth. The event was confirmed in the latest fictional market report for diversified fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Would you act now or wait for another report?"
        ],
        [
          "Transport Costs Fall Across Several Holdings",
          "Transport costs fall across several holdings. A confirmed improvement has given investors a little more confidence.",
          "Transport costs fall across several holdings. The event was confirmed in the latest fictional market report for diversified fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What new information could change your decision?"
        ],
        [
          "Fund Adds A Successful Water Business",
          "Fund adds a successful water business. A confirmed improvement has given investors a little more confidence.",
          "Fund adds a successful water business. The event was confirmed in the latest fictional market report for diversified fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Small Companies Lift The Mixed Portfolio",
          "Small companies lift the mixed portfolio. A confirmed improvement has given investors a little more confidence.",
          "Small companies lift the mixed portfolio. The event was confirmed in the latest fictional market report for diversified fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Stronger Farm Exports Support The Fund",
          "Stronger farm exports support the fund. A confirmed improvement has given investors a little more confidence.",
          "Stronger farm exports support the fund. The event was confirmed in the latest fictional market report for diversified fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Bank Profits Improve While Mining Stays Flat",
          "Bank profits improve while mining stays flat. A confirmed improvement has given investors a little more confidence.",
          "Bank profits improve while mining stays flat. The event was confirmed in the latest fictional market report for diversified fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Tourism Recovery Helps Several Industries",
          "Tourism recovery helps several industries. A confirmed improvement has given investors a little more confidence.",
          "Tourism recovery helps several industries. The event was confirmed in the latest fictional market report for diversified fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Fund Manager Reduces One Weak Holding",
          "Fund manager reduces one weak holding. A confirmed improvement has given investors a little more confidence.",
          "Fund manager reduces one weak holding. The event was confirmed in the latest fictional market report for diversified fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "largeRise": [
        [
          "Most Industries Report Stronger Profits",
          "Most industries report stronger profits. A major positive event has changed expectations for future income.",
          "Most industries report stronger profits. The event was confirmed in the latest fictional market report for diversified fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Major Technology And Energy Rally Lifts The Fund",
          "Major technology and energy rally lifts the fund. A major positive event has changed expectations for future income.",
          "Major technology and energy rally lifts the fund. The event was confirmed in the latest fictional market report for diversified fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Would you act now or wait for another report?"
        ],
        [
          "Global Recovery Supports The Whole Portfolio",
          "Global recovery supports the whole portfolio. A major positive event has changed expectations for future income.",
          "Global recovery supports the whole portfolio. The event was confirmed in the latest fictional market report for diversified fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What new information could change your decision?"
        ],
        [
          "Fund Holdings Win Several National Contracts",
          "Fund holdings win several national contracts. A major positive event has changed expectations for future income.",
          "Fund holdings win several national contracts. The event was confirmed in the latest fictional market report for diversified fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Retail, Banking And Mining Rise Together",
          "Retail, banking and mining rise together. A major positive event has changed expectations for future income.",
          "Retail, banking and mining rise together. The event was confirmed in the latest fictional market report for diversified fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Successful Merger Boosts Multiple Companies",
          "Successful merger boosts multiple companies. A major positive event has changed expectations for future income.",
          "Successful merger boosts multiple companies. The event was confirmed in the latest fictional market report for diversified fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Export Boom Lifts Agriculture And Transport",
          "Export boom lifts agriculture and transport. A major positive event has changed expectations for future income.",
          "Export boom lifts agriculture and transport. The event was confirmed in the latest fictional market report for diversified fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Lower Costs Improve Results Across The Portfolio",
          "Lower costs improve results across the portfolio. A major positive event has changed expectations for future income.",
          "Lower costs improve results across the portfolio. The event was confirmed in the latest fictional market report for diversified fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "New Infrastructure Plan Benefits Many Holdings",
          "New infrastructure plan benefits many holdings. A major positive event has changed expectations for future income.",
          "New infrastructure plan benefits many holdings. The event was confirmed in the latest fictional market report for diversified fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "stable": [
        [
          "Technology Rises While Mining Falls",
          "Technology rises while mining falls. The latest information contains both helpful and unhelpful signs.",
          "Technology rises while mining falls. The event was confirmed in the latest fictional market report for diversified fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Good Sales Are Balanced By Higher Costs",
          "Good sales are balanced by higher costs. The latest information contains both helpful and unhelpful signs.",
          "Good sales are balanced by higher costs. The event was confirmed in the latest fictional market report for diversified fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Would you act now or wait for another report?"
        ],
        [
          "Fund Manager Keeps The Same Mix",
          "Fund manager keeps the same mix. The latest information contains both helpful and unhelpful signs.",
          "Fund manager keeps the same mix. The event was confirmed in the latest fictional market report for diversified fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What new information could change your decision?"
        ],
        [
          "Banks Improve But Retailers Slow Down",
          "Banks improve but retailers slow down. The latest information contains both helpful and unhelpful signs.",
          "Banks improve but retailers slow down. The event was confirmed in the latest fictional market report for diversified fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Strong Healthcare Offsets Weak Transport",
          "Strong healthcare offsets weak transport. The latest information contains both helpful and unhelpful signs.",
          "Strong healthcare offsets weak transport. The event was confirmed in the latest fictional market report for diversified fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Australian Gains Balance Overseas Losses",
          "Australian gains balance overseas losses. The latest information contains both helpful and unhelpful signs.",
          "Australian gains balance overseas losses. The event was confirmed in the latest fictional market report for diversified fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Dividend Income Balances Lower Share Prices",
          "Dividend income balances lower share prices. The latest information contains both helpful and unhelpful signs.",
          "Dividend income balances lower share prices. The event was confirmed in the latest fictional market report for diversified fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Two Large Holdings Move In Opposite Directions",
          "Two large holdings move in opposite directions. The latest information contains both helpful and unhelpful signs.",
          "Two large holdings move in opposite directions. The event was confirmed in the latest fictional market report for diversified fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Portfolio Waits For Company Reporting Season",
          "Portfolio waits for company reporting season. The latest information contains both helpful and unhelpful signs.",
          "Portfolio waits for company reporting season. The event was confirmed in the latest fictional market report for diversified fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "smallFall": [
        [
          "Retail Weakness Pulls The Fund Slightly Lower",
          "Retail weakness pulls the fund slightly lower. A limited problem has made investors more cautious.",
          "Retail weakness pulls the fund slightly lower. The event was confirmed in the latest fictional market report for diversified fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Transport And Fuel Costs Reduce Profits",
          "Transport and fuel costs reduce profits. A limited problem has made investors more cautious.",
          "Transport and fuel costs reduce profits. The event was confirmed in the latest fictional market report for diversified fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Would you act now or wait for another report?"
        ],
        [
          "One Large Holding Misses Its Sales Target",
          "One large holding misses its sales target. A limited problem has made investors more cautious.",
          "One large holding misses its sales target. The event was confirmed in the latest fictional market report for diversified fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What new information could change your decision?"
        ],
        [
          "Fund Manager Cuts The Yearly Forecast",
          "Fund manager cuts the yearly forecast. A limited problem has made investors more cautious.",
          "Fund manager cuts the yearly forecast. The event was confirmed in the latest fictional market report for diversified fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Mining Prices Soften Across The Portfolio",
          "Mining prices soften across the portfolio. A limited problem has made investors more cautious.",
          "Mining prices soften across the portfolio. The event was confirmed in the latest fictional market report for diversified fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Bank Loan Losses Increase Modestly",
          "Bank loan losses increase modestly. A limited problem has made investors more cautious.",
          "Bank loan losses increase modestly. The event was confirmed in the latest fictional market report for diversified fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Overseas Holdings Face Currency Pressure",
          "Overseas holdings face currency pressure. A limited problem has made investors more cautious.",
          "Overseas holdings face currency pressure. The event was confirmed in the latest fictional market report for diversified fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Food Companies Report Smaller Margins",
          "Food companies report smaller margins. A limited problem has made investors more cautious.",
          "Food companies report smaller margins. The event was confirmed in the latest fictional market report for diversified fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Technology Growth Slows After A Strong Month",
          "Technology growth slows after a strong month. A limited problem has made investors more cautious.",
          "Technology growth slows after a strong month. The event was confirmed in the latest fictional market report for diversified fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "largeFall": [
        [
          "Several Industries Report Serious Losses",
          "Several industries report serious losses. A serious event may have a large effect on income, costs or customer trust.",
          "Several industries report serious losses. The event was confirmed in the latest fictional market report for diversified fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Global Market Shock Hits Diversified Holdings",
          "Global market shock hits diversified holdings. A serious event may have a large effect on income, costs or customer trust.",
          "Global market shock hits diversified holdings. The event was confirmed in the latest fictional market report for diversified fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Would you act now or wait for another report?"
        ],
        [
          "Major Bank And Retailer Results Disappoint",
          "Major bank and retailer results disappoint. A serious event may have a large effect on income, costs or customer trust.",
          "Major bank and retailer results disappoint. The event was confirmed in the latest fictional market report for diversified fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What new information could change your decision?"
        ],
        [
          "Fund Holdings Face Widespread Supply Problems",
          "Fund holdings face widespread supply problems. A serious event may have a large effect on income, costs or customer trust.",
          "Fund holdings face widespread supply problems. The event was confirmed in the latest fictional market report for diversified fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Sharp Currency Move Reduces Overseas Value",
          "Sharp currency move reduces overseas value. A serious event may have a large effect on income, costs or customer trust.",
          "Sharp currency move reduces overseas value. The event was confirmed in the latest fictional market report for diversified fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Large Company Failure Damages The Portfolio",
          "Large company failure damages the portfolio. A serious event may have a large effect on income, costs or customer trust.",
          "Large company failure damages the portfolio. The event was confirmed in the latest fictional market report for diversified fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Energy, Mining And Transport Fall Together",
          "Energy, mining and transport fall together. A serious event may have a large effect on income, costs or customer trust.",
          "Energy, mining and transport fall together. The event was confirmed in the latest fictional market report for diversified fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Economic Slowdown Reaches Most Industries",
          "Economic slowdown reaches most industries. A serious event may have a large effect on income, costs or customer trust.",
          "Economic slowdown reaches most industries. The event was confirmed in the latest fictional market report for diversified fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Unexpected Regulation Raises Costs Across The Fund",
          "Unexpected regulation raises costs across the fund. A serious event may have a large effect on income, costs or customer trust.",
          "Unexpected regulation raises costs across the fund. The event was confirmed in the latest fictional market report for diversified fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ]
    },
    "property": {
      "smallRise": [
        [
          "Apartment Rents Increase In Two Cities",
          "Apartment rents increase in two cities. A confirmed improvement has given investors a little more confidence.",
          "Apartment rents increase in two cities. The event was confirmed in the latest fictional market report for property fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "New Town Centre Receives Planning Approval",
          "New town centre receives planning approval. A confirmed improvement has given investors a little more confidence.",
          "New town centre receives planning approval. The event was confirmed in the latest fictional market report for property fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Would you act now or wait for another report?"
        ],
        [
          "Office Vacancies Fall Slightly",
          "Office vacancies fall slightly. A confirmed improvement has given investors a little more confidence.",
          "Office vacancies fall slightly. The event was confirmed in the latest fictional market report for property fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What new information could change your decision?"
        ],
        [
          "Home Sales Improve After A Quiet Month",
          "Home sales improve after a quiet month. A confirmed improvement has given investors a little more confidence.",
          "Home sales improve after a quiet month. The event was confirmed in the latest fictional market report for property fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Builder Completes A Project Under Budget",
          "Builder completes a project under budget. A confirmed improvement has given investors a little more confidence.",
          "Builder completes a project under budget. The event was confirmed in the latest fictional market report for property fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Student Housing Demand Grows",
          "Student housing demand grows. A confirmed improvement has given investors a little more confidence.",
          "Student housing demand grows. The event was confirmed in the latest fictional market report for property fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Warehouse Leases Attract New Tenants",
          "Warehouse leases attract new tenants. A confirmed improvement has given investors a little more confidence.",
          "Warehouse leases attract new tenants. The event was confirmed in the latest fictional market report for property fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Regional Homes Receive More Buyer Interest",
          "Regional homes receive more buyer interest. A confirmed improvement has given investors a little more confidence.",
          "Regional homes receive more buyer interest. The event was confirmed in the latest fictional market report for property fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Property Fund Lowers Maintenance Costs",
          "Property fund lowers maintenance costs. A confirmed improvement has given investors a little more confidence.",
          "Property fund lowers maintenance costs. The event was confirmed in the latest fictional market report for property fund.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "largeRise": [
        [
          "Major Housing Project Sells Out Early",
          "Major housing project sells out early. A major positive event has changed expectations for future income.",
          "Major housing project sells out early. The event was confirmed in the latest fictional market report for property fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "National Rental Demand Rises Sharply",
          "National rental demand rises sharply. A major positive event has changed expectations for future income.",
          "National rental demand rises sharply. The event was confirmed in the latest fictional market report for property fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Would you act now or wait for another report?"
        ],
        [
          "Property Fund Wins A Large Government Lease",
          "Property fund wins a large government lease. A major positive event has changed expectations for future income.",
          "Property fund wins a large government lease. The event was confirmed in the latest fictional market report for property fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What new information could change your decision?"
        ],
        [
          "New Transport Line Lifts Nearby Property Values",
          "New transport line lifts nearby property values. A major positive event has changed expectations for future income.",
          "New transport line lifts nearby property values. The event was confirmed in the latest fictional market report for property fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Office Tower Reaches Full Occupancy",
          "Office tower reaches full occupancy. A major positive event has changed expectations for future income.",
          "Office tower reaches full occupancy. The event was confirmed in the latest fictional market report for property fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Large Building Project Receives Final Approval",
          "Large building project receives final approval. A major positive event has changed expectations for future income.",
          "Large building project receives final approval. The event was confirmed in the latest fictional market report for property fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Tourism Boom Fills Hotel Properties",
          "Tourism boom fills hotel properties. A major positive event has changed expectations for future income.",
          "Tourism boom fills hotel properties. The event was confirmed in the latest fictional market report for property fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Warehouse Demand Reaches A Record Level",
          "Warehouse demand reaches a record level. A major positive event has changed expectations for future income.",
          "Warehouse demand reaches a record level. The event was confirmed in the latest fictional market report for property fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Interest Rate Cut Brings Many Buyers Back",
          "Interest rate cut brings many buyers back. A major positive event has changed expectations for future income.",
          "Interest rate cut brings many buyers back. The event was confirmed in the latest fictional market report for property fund.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "stable": [
        [
          "Home Sales And Prices Remain Close To Last Month",
          "Home sales and prices remain close to last month. The latest information contains both helpful and unhelpful signs.",
          "Home sales and prices remain close to last month. The event was confirmed in the latest fictional market report for property fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Higher Rents Are Balanced By Repair Costs",
          "Higher rents are balanced by repair costs. The latest information contains both helpful and unhelpful signs.",
          "Higher rents are balanced by repair costs. The event was confirmed in the latest fictional market report for property fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Would you act now or wait for another report?"
        ],
        [
          "Buyers Wait For An Interest Rate Decision",
          "Buyers wait for an interest rate decision. The latest information contains both helpful and unhelpful signs.",
          "Buyers wait for an interest rate decision. The event was confirmed in the latest fictional market report for property fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What new information could change your decision?"
        ],
        [
          "Office Demand Varies Between Cities",
          "Office demand varies between cities. The latest information contains both helpful and unhelpful signs.",
          "Office demand varies between cities. The event was confirmed in the latest fictional market report for property fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "New Construction Matches Completed Sales",
          "New construction matches completed sales. The latest information contains both helpful and unhelpful signs.",
          "New construction matches completed sales. The event was confirmed in the latest fictional market report for property fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Property Fund Keeps Occupancy Steady",
          "Property fund keeps occupancy steady. The latest information contains both helpful and unhelpful signs.",
          "Property fund keeps occupancy steady. The event was confirmed in the latest fictional market report for property fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Regional Growth Balances City Weakness",
          "Regional growth balances city weakness. The latest information contains both helpful and unhelpful signs.",
          "Regional growth balances city weakness. The event was confirmed in the latest fictional market report for property fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Building Costs Stop Rising",
          "Building costs stop rising. The latest information contains both helpful and unhelpful signs.",
          "Building costs stop rising. The event was confirmed in the latest fictional market report for property fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Rental Income Remains Predictable",
          "Rental income remains predictable. The latest information contains both helpful and unhelpful signs.",
          "Rental income remains predictable. The event was confirmed in the latest fictional market report for property fund.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "smallFall": [
        [
          "Building Materials Become More Expensive",
          "Building materials become more expensive. A limited problem has made investors more cautious.",
          "Building materials become more expensive. The event was confirmed in the latest fictional market report for property fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "One Apartment Project Is Delayed",
          "One apartment project is delayed. A limited problem has made investors more cautious.",
          "One apartment project is delayed. The event was confirmed in the latest fictional market report for property fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Would you act now or wait for another report?"
        ],
        [
          "Office Vacancy Rate Increases Slightly",
          "Office vacancy rate increases slightly. A limited problem has made investors more cautious.",
          "Office vacancy rate increases slightly. The event was confirmed in the latest fictional market report for property fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What new information could change your decision?"
        ],
        [
          "Home Buyers Take Longer To Decide",
          "Home buyers take longer to decide. A limited problem has made investors more cautious.",
          "Home buyers take longer to decide. The event was confirmed in the latest fictional market report for property fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Property Fund Loses A Small Retail Tenant",
          "Property fund loses a small retail tenant. A limited problem has made investors more cautious.",
          "Property fund loses a small retail tenant. The event was confirmed in the latest fictional market report for property fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Wet Weather Slows Construction",
          "Wet weather slows construction. A limited problem has made investors more cautious.",
          "Wet weather slows construction. The event was confirmed in the latest fictional market report for property fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Maintenance Costs Rise At Older Buildings",
          "Maintenance costs rise at older buildings. A limited problem has made investors more cautious.",
          "Maintenance costs rise at older buildings. The event was confirmed in the latest fictional market report for property fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "One Council Rejects A Planning Change",
          "One council rejects a planning change. A limited problem has made investors more cautious.",
          "One council rejects a planning change. The event was confirmed in the latest fictional market report for property fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Higher Loan Costs Reduce Buyer Interest",
          "Higher loan costs reduce buyer interest. A limited problem has made investors more cautious.",
          "Higher loan costs reduce buyer interest. The event was confirmed in the latest fictional market report for property fund.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "largeFall": [
        [
          "Major Building Site Closes After Safety Checks",
          "Major building site closes after safety checks. A serious event may have a large effect on income, costs or customer trust.",
          "Major building site closes after safety checks. The event was confirmed in the latest fictional market report for property fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Property Developer Loses Finance For A Large Project",
          "Property developer loses finance for a large project. A serious event may have a large effect on income, costs or customer trust.",
          "Property developer loses finance for a large project. The event was confirmed in the latest fictional market report for property fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Would you act now or wait for another report?"
        ],
        [
          "Severe Storm Damages Several Fund Properties",
          "Severe storm damages several fund properties. A serious event may have a large effect on income, costs or customer trust.",
          "Severe storm damages several fund properties. The event was confirmed in the latest fictional market report for property fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What new information could change your decision?"
        ],
        [
          "Office Tower Loses Its Largest Tenant",
          "Office tower loses its largest tenant. A serious event may have a large effect on income, costs or customer trust.",
          "Office tower loses its largest tenant. The event was confirmed in the latest fictional market report for property fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Housing Sales Fall Sharply Across Major Cities",
          "Housing sales fall sharply across major cities. A serious event may have a large effect on income, costs or customer trust.",
          "Housing sales fall sharply across major cities. The event was confirmed in the latest fictional market report for property fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Construction Company Enters Administration",
          "Construction company enters administration. A serious event may have a large effect on income, costs or customer trust.",
          "Construction company enters administration. The event was confirmed in the latest fictional market report for property fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Interest Rate Rise Pushes Buyers Out Of The Market",
          "Interest rate rise pushes buyers out of the market. A serious event may have a large effect on income, costs or customer trust.",
          "Interest rate rise pushes buyers out of the market. The event was confirmed in the latest fictional market report for property fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Large Apartment Project Is Cancelled",
          "Large apartment project is cancelled. A serious event may have a large effect on income, costs or customer trust.",
          "Large apartment project is cancelled. The event was confirmed in the latest fictional market report for property fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Serious Structural Fault Requires Major Repairs",
          "Serious structural fault requires major repairs. A serious event may have a large effect on income, costs or customer trust.",
          "Serious structural fault requires major repairs. The event was confirmed in the latest fictional market report for property fund.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ]
    },
    "shares": {
      "smallRise": [
        [
          "Harbourlink Wins A Regional Ferry Upgrade",
          "HarbourLink wins a regional ferry upgrade. A confirmed improvement has given investors a little more confidence.",
          "HarbourLink wins a regional ferry upgrade. The event was confirmed in the latest fictional market report for share market.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Maple Health Opens Two New Clinics",
          "Maple Health opens two new clinics. A confirmed improvement has given investors a little more confidence.",
          "Maple Health opens two new clinics. The event was confirmed in the latest fictional market report for share market.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Would you act now or wait for another report?"
        ],
        [
          "Orbit Parcel Cuts Delivery Times",
          "Orbit Parcel cuts delivery times. A confirmed improvement has given investors a little more confidence.",
          "Orbit Parcel cuts delivery times. The event was confirmed in the latest fictional market report for share market.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What new information could change your decision?"
        ],
        [
          "Bluepeak Water Signs A Council Deal",
          "BluePeak Water signs a council deal. A confirmed improvement has given investors a little more confidence.",
          "BluePeak Water signs a council deal. The event was confirmed in the latest fictional market report for share market.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Luma Studios Finds A New Audience",
          "Luma Studios finds a new audience. A confirmed improvement has given investors a little more confidence.",
          "Luma Studios finds a new audience. The event was confirmed in the latest fictional market report for share market.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Freshroute Improves Farm Deliveries",
          "FreshRoute improves farm deliveries. A confirmed improvement has given investors a little more confidence.",
          "FreshRoute improves farm deliveries. The event was confirmed in the latest fictional market report for share market.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Redgum Furniture Receives Strong Reviews",
          "RedGum Furniture receives strong reviews. A confirmed improvement has given investors a little more confidence.",
          "RedGum Furniture receives strong reviews. The event was confirmed in the latest fictional market report for share market.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Cloudgarden Adds Business Customers",
          "CloudGarden adds business customers. A confirmed improvement has given investors a little more confidence.",
          "CloudGarden adds business customers. The event was confirmed in the latest fictional market report for share market.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Silverleaf Robotics Launches A Useful Update",
          "SilverLeaf Robotics launches a useful update. A confirmed improvement has given investors a little more confidence.",
          "SilverLeaf Robotics launches a useful update. The event was confirmed in the latest fictional market report for share market.",
          "The change is useful, but it is not large enough to remove every risk.",
          "Investors will watch the next update before making a bigger decision.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "largeRise": [
        [
          "Skyrail Wins A National Train Contract",
          "SkyRail wins a national train contract. A major positive event has changed expectations for future income.",
          "SkyRail wins a national train contract. The event was confirmed in the latest fictional market report for share market.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Mednova Reports A Successful Vaccine Trial",
          "MedNova reports a successful vaccine trial. A major positive event has changed expectations for future income.",
          "MedNova reports a successful vaccine trial. The event was confirmed in the latest fictional market report for share market.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Would you act now or wait for another report?"
        ],
        [
          "Terrachip Reveals A Faster Low-Power Processor",
          "TerraChip reveals a faster low-power processor. A major positive event has changed expectations for future income.",
          "TerraChip reveals a faster low-power processor. The event was confirmed in the latest fictional market report for share market.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What new information could change your decision?"
        ],
        [
          "Southern Harvest Secures A Major Export Agreement",
          "Southern Harvest secures a major export agreement. A major positive event has changed expectations for future income.",
          "Southern Harvest secures a major export agreement. The event was confirmed in the latest fictional market report for share market.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Aquasafe Technology Stops A Major Water Leak",
          "AquaSafe technology stops a major water leak. A major positive event has changed expectations for future income.",
          "AquaSafe technology stops a major water leak. The event was confirmed in the latest fictional market report for share market.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Northstar Games Breaks Launch Records",
          "NorthStar Games breaks launch records. A major positive event has changed expectations for future income.",
          "NorthStar Games breaks launch records. The event was confirmed in the latest fictional market report for share market.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Ecostone Receives National Product Approval",
          "EcoStone receives national product approval. A major positive event has changed expectations for future income.",
          "EcoStone receives national product approval. The event was confirmed in the latest fictional market report for share market.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Pulse Mobile Buys A Growing Payment Company",
          "Pulse Mobile buys a growing payment company. A major positive event has changed expectations for future income.",
          "Pulse Mobile buys a growing payment company. The event was confirmed in the latest fictional market report for share market.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Aurora Space Signs A Satellite Contract",
          "Aurora Space signs a satellite contract. A major positive event has changed expectations for future income.",
          "Aurora Space signs a satellite contract. The event was confirmed in the latest fictional market report for share market.",
          "The opportunity could create strong growth, although rapid expansion can also create problems.",
          "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "stable": [
        [
          "Central Bank Decision Leaves Investors Waiting",
          "Central bank decision leaves investors waiting. The latest information contains both helpful and unhelpful signs.",
          "Central bank decision leaves investors waiting. The event was confirmed in the latest fictional market report for share market.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Strong Travel Sales Meet Higher Fuel Costs",
          "Strong travel sales meet higher fuel costs. The latest information contains both helpful and unhelpful signs.",
          "Strong travel sales meet higher fuel costs. The event was confirmed in the latest fictional market report for share market.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Would you act now or wait for another report?"
        ],
        [
          "Retailers Report Mixed Holiday Results",
          "Retailers report mixed holiday results. The latest information contains both helpful and unhelpful signs.",
          "Retailers report mixed holiday results. The event was confirmed in the latest fictional market report for share market.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What new information could change your decision?"
        ],
        [
          "Technology Companies Prepare Product Events",
          "Technology companies prepare product events. The latest information contains both helpful and unhelpful signs.",
          "Technology companies prepare product events. The event was confirmed in the latest fictional market report for share market.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Australian Dollar Moves Very Little",
          "Australian dollar moves very little. The latest information contains both helpful and unhelpful signs.",
          "Australian dollar moves very little. The event was confirmed in the latest fictional market report for share market.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Mining Output Rises As Metal Prices Fall",
          "Mining output rises as metal prices fall. The latest information contains both helpful and unhelpful signs.",
          "Mining output rises as metal prices fall. The event was confirmed in the latest fictional market report for share market.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "New Business Rules Create Gains And Costs",
          "New business rules create gains and costs. The latest information contains both helpful and unhelpful signs.",
          "New business rules create gains and costs. The event was confirmed in the latest fictional market report for share market.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Investors Review Leadership Changes",
          "Investors review leadership changes. The latest information contains both helpful and unhelpful signs.",
          "Investors review leadership changes. The event was confirmed in the latest fictional market report for share market.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Market Waits For Quarterly Profit Reports",
          "Market waits for quarterly profit reports. The latest information contains both helpful and unhelpful signs.",
          "Market waits for quarterly profit reports. The event was confirmed in the latest fictional market report for share market.",
          "Neither side is strong enough to give the market a clear direction.",
          "Investors are waiting for stronger evidence before changing their plans.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "smallFall": [
        [
          "Coastair Cancels Some Winter Flights",
          "CoastAir cancels some winter flights. A limited problem has made investors more cautious.",
          "CoastAir cancels some winter flights. The event was confirmed in the latest fictional market report for share market.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Riverbank Sees More Late Loan Payments",
          "RiverBank sees more late loan payments. A limited problem has made investors more cautious.",
          "RiverBank sees more late loan payments. The event was confirmed in the latest fictional market report for share market.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Would you act now or wait for another report?"
        ],
        [
          "Urbancart Delays A Warehouse Opening",
          "UrbanCart delays a warehouse opening. A limited problem has made investors more cautious.",
          "UrbanCart delays a warehouse opening. The event was confirmed in the latest fictional market report for share market.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What new information could change your decision?"
        ],
        [
          "Silverscreen Loses A Popular Show",
          "SilverScreen loses a popular show. A limited problem has made investors more cautious.",
          "SilverScreen loses a popular show. The event was confirmed in the latest fictional market report for share market.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Farmtech Pays More For Imported Parts",
          "FarmTech pays more for imported parts. A limited problem has made investors more cautious.",
          "FarmTech pays more for imported parts. The event was confirmed in the latest fictional market report for share market.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Beacon Education Reports Slower Enrolments",
          "Beacon Education reports slower enrolments. A limited problem has made investors more cautious.",
          "Beacon Education reports slower enrolments. The event was confirmed in the latest fictional market report for share market.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Metrobuild Loses One Apartment Project",
          "MetroBuild loses one apartment project. A limited problem has made investors more cautious.",
          "MetroBuild loses one apartment project. The event was confirmed in the latest fictional market report for share market.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Oceanfresh Recalls One Product Batch",
          "OceanFresh recalls one product batch. A limited problem has made investors more cautious.",
          "OceanFresh recalls one product batch. The event was confirmed in the latest fictional market report for share market.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Quickcharge Delays A Charger Launch",
          "QuickCharge delays a charger launch. A limited problem has made investors more cautious.",
          "QuickCharge delays a charger launch. The event was confirmed in the latest fictional market report for share market.",
          "The issue may reduce income or increase costs, but the wider business remains active.",
          "Investors are waiting to see whether managers can solve the problem quickly.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ],
      "largeFall": [
        [
          "Ironvale Mine Closes After A Major Flood",
          "IronVale mine closes after a major flood. A serious event may have a large effect on income, costs or customer trust.",
          "IronVale mine closes after a major flood. The event was confirmed in the latest fictional market report for share market.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Which detail in this report is most important for an investor?"
        ],
        [
          "Securepay Reports A Serious Data Breach",
          "SecurePay reports a serious data breach. A serious event may have a large effect on income, costs or customer trust.",
          "SecurePay reports a serious data breach. The event was confirmed in the latest fictional market report for share market.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Would you act now or wait for another report?"
        ],
        [
          "Aeroquest Flight Test Ends In Failure",
          "AeroQuest flight test ends in failure. A serious event may have a large effect on income, costs or customer trust.",
          "AeroQuest flight test ends in failure. The event was confirmed in the latest fictional market report for share market.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What new information could change your decision?"
        ],
        [
          "Citymart Corrects Major Accounting Errors",
          "CityMart corrects major accounting errors. A serious event may have a large effect on income, costs or customer trust.",
          "CityMart corrects major accounting errors. The event was confirmed in the latest fictional market report for share market.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "How does this event affect risk and possible reward?"
        ],
        [
          "Bioleaf Loses Approval For Its Main Product",
          "BioLeaf loses approval for its main product. A serious event may have a large effect on income, costs or customer trust.",
          "BioLeaf loses approval for its main product. The event was confirmed in the latest fictional market report for share market.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Is this likely to be a short-term or long-term change?"
        ],
        [
          "Global Freight Workers Begin A Long Strike",
          "Global Freight workers begin a long strike. A serious event may have a large effect on income, costs or customer trust.",
          "Global Freight workers begin a long strike. The event was confirmed in the latest fictional market report for share market.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What could happen if the plan does not work as expected?"
        ],
        [
          "Homecore Announces A Dangerous Appliance Recall",
          "HomeCore announces a dangerous appliance recall. A serious event may have a large effect on income, costs or customer trust.",
          "HomeCore announces a dangerous appliance recall. The event was confirmed in the latest fictional market report for share market.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "Would spreading money across investments reduce the risk?"
        ],
        [
          "Zenith Media Merger Is Blocked",
          "Zenith Media merger is blocked. A serious event may have a large effect on income, costs or customer trust.",
          "Zenith Media merger is blocked. The event was confirmed in the latest fictional market report for share market.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "What evidence would make this choice feel safer?"
        ],
        [
          "Titan Motors Stops Production After A Battery Fire",
          "Titan Motors stops production after a battery fire. A serious event may have a large effect on income, costs or customer trust.",
          "Titan Motors stops production after a battery fire. The event was confirmed in the latest fictional market report for share market.",
          "The organisation must respond quickly, and the final cost is not yet known.",
          "Investors reacted strongly because recovery may take significant time.",
          "How might customers, costs or government decisions affect the result?"
        ]
      ]
    }
  },
  "shareStories": {
    "smallRise": [
      [
        "Harbourlink Wins A Regional Ferry Upgrade",
        "HarbourLink wins a regional ferry upgrade. A confirmed improvement has given investors a little more confidence.",
        "HarbourLink wins a regional ferry upgrade. The event was confirmed in the latest fictional market report for share market.",
        "The change is useful, but it is not large enough to remove every risk.",
        "Investors will watch the next update before making a bigger decision.",
        "Which detail in this report is most important for an investor?"
      ],
      [
        "Maple Health Opens Two New Clinics",
        "Maple Health opens two new clinics. A confirmed improvement has given investors a little more confidence.",
        "Maple Health opens two new clinics. The event was confirmed in the latest fictional market report for share market.",
        "The change is useful, but it is not large enough to remove every risk.",
        "Investors will watch the next update before making a bigger decision.",
        "Would you act now or wait for another report?"
      ],
      [
        "Orbit Parcel Cuts Delivery Times",
        "Orbit Parcel cuts delivery times. A confirmed improvement has given investors a little more confidence.",
        "Orbit Parcel cuts delivery times. The event was confirmed in the latest fictional market report for share market.",
        "The change is useful, but it is not large enough to remove every risk.",
        "Investors will watch the next update before making a bigger decision.",
        "What new information could change your decision?"
      ],
      [
        "Bluepeak Water Signs A Council Deal",
        "BluePeak Water signs a council deal. A confirmed improvement has given investors a little more confidence.",
        "BluePeak Water signs a council deal. The event was confirmed in the latest fictional market report for share market.",
        "The change is useful, but it is not large enough to remove every risk.",
        "Investors will watch the next update before making a bigger decision.",
        "How does this event affect risk and possible reward?"
      ],
      [
        "Luma Studios Finds A New Audience",
        "Luma Studios finds a new audience. A confirmed improvement has given investors a little more confidence.",
        "Luma Studios finds a new audience. The event was confirmed in the latest fictional market report for share market.",
        "The change is useful, but it is not large enough to remove every risk.",
        "Investors will watch the next update before making a bigger decision.",
        "Is this likely to be a short-term or long-term change?"
      ],
      [
        "Freshroute Improves Farm Deliveries",
        "FreshRoute improves farm deliveries. A confirmed improvement has given investors a little more confidence.",
        "FreshRoute improves farm deliveries. The event was confirmed in the latest fictional market report for share market.",
        "The change is useful, but it is not large enough to remove every risk.",
        "Investors will watch the next update before making a bigger decision.",
        "What could happen if the plan does not work as expected?"
      ],
      [
        "Redgum Furniture Receives Strong Reviews",
        "RedGum Furniture receives strong reviews. A confirmed improvement has given investors a little more confidence.",
        "RedGum Furniture receives strong reviews. The event was confirmed in the latest fictional market report for share market.",
        "The change is useful, but it is not large enough to remove every risk.",
        "Investors will watch the next update before making a bigger decision.",
        "Would spreading money across investments reduce the risk?"
      ],
      [
        "Cloudgarden Adds Business Customers",
        "CloudGarden adds business customers. A confirmed improvement has given investors a little more confidence.",
        "CloudGarden adds business customers. The event was confirmed in the latest fictional market report for share market.",
        "The change is useful, but it is not large enough to remove every risk.",
        "Investors will watch the next update before making a bigger decision.",
        "What evidence would make this choice feel safer?"
      ],
      [
        "Silverleaf Robotics Launches A Useful Update",
        "SilverLeaf Robotics launches a useful update. A confirmed improvement has given investors a little more confidence.",
        "SilverLeaf Robotics launches a useful update. The event was confirmed in the latest fictional market report for share market.",
        "The change is useful, but it is not large enough to remove every risk.",
        "Investors will watch the next update before making a bigger decision.",
        "How might customers, costs or government decisions affect the result?"
      ]
    ],
    "largeRise": [
      [
        "Skyrail Wins A National Train Contract",
        "SkyRail wins a national train contract. A major positive event has changed expectations for future income.",
        "SkyRail wins a national train contract. The event was confirmed in the latest fictional market report for share market.",
        "The opportunity could create strong growth, although rapid expansion can also create problems.",
        "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
        "Which detail in this report is most important for an investor?"
      ],
      [
        "Mednova Reports A Successful Vaccine Trial",
        "MedNova reports a successful vaccine trial. A major positive event has changed expectations for future income.",
        "MedNova reports a successful vaccine trial. The event was confirmed in the latest fictional market report for share market.",
        "The opportunity could create strong growth, although rapid expansion can also create problems.",
        "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
        "Would you act now or wait for another report?"
      ],
      [
        "Terrachip Reveals A Faster Low-Power Processor",
        "TerraChip reveals a faster low-power processor. A major positive event has changed expectations for future income.",
        "TerraChip reveals a faster low-power processor. The event was confirmed in the latest fictional market report for share market.",
        "The opportunity could create strong growth, although rapid expansion can also create problems.",
        "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
        "What new information could change your decision?"
      ],
      [
        "Southern Harvest Secures A Major Export Agreement",
        "Southern Harvest secures a major export agreement. A major positive event has changed expectations for future income.",
        "Southern Harvest secures a major export agreement. The event was confirmed in the latest fictional market report for share market.",
        "The opportunity could create strong growth, although rapid expansion can also create problems.",
        "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
        "How does this event affect risk and possible reward?"
      ],
      [
        "Aquasafe Technology Stops A Major Water Leak",
        "AquaSafe technology stops a major water leak. A major positive event has changed expectations for future income.",
        "AquaSafe technology stops a major water leak. The event was confirmed in the latest fictional market report for share market.",
        "The opportunity could create strong growth, although rapid expansion can also create problems.",
        "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
        "Is this likely to be a short-term or long-term change?"
      ],
      [
        "Northstar Games Breaks Launch Records",
        "NorthStar Games breaks launch records. A major positive event has changed expectations for future income.",
        "NorthStar Games breaks launch records. The event was confirmed in the latest fictional market report for share market.",
        "The opportunity could create strong growth, although rapid expansion can also create problems.",
        "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
        "What could happen if the plan does not work as expected?"
      ],
      [
        "Ecostone Receives National Product Approval",
        "EcoStone receives national product approval. A major positive event has changed expectations for future income.",
        "EcoStone receives national product approval. The event was confirmed in the latest fictional market report for share market.",
        "The opportunity could create strong growth, although rapid expansion can also create problems.",
        "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
        "Would spreading money across investments reduce the risk?"
      ],
      [
        "Pulse Mobile Buys A Growing Payment Company",
        "Pulse Mobile buys a growing payment company. A major positive event has changed expectations for future income.",
        "Pulse Mobile buys a growing payment company. The event was confirmed in the latest fictional market report for share market.",
        "The opportunity could create strong growth, although rapid expansion can also create problems.",
        "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
        "What evidence would make this choice feel safer?"
      ],
      [
        "Aurora Space Signs A Satellite Contract",
        "Aurora Space signs a satellite contract. A major positive event has changed expectations for future income.",
        "Aurora Space signs a satellite contract. The event was confirmed in the latest fictional market report for share market.",
        "The opportunity could create strong growth, although rapid expansion can also create problems.",
        "Investors reacted strongly and will now watch whether the plan is delivered successfully.",
        "How might customers, costs or government decisions affect the result?"
      ]
    ],
    "stable": [
      [
        "Central Bank Decision Leaves Investors Waiting",
        "Central bank decision leaves investors waiting. The latest information contains both helpful and unhelpful signs.",
        "Central bank decision leaves investors waiting. The event was confirmed in the latest fictional market report for share market.",
        "Neither side is strong enough to give the market a clear direction.",
        "Investors are waiting for stronger evidence before changing their plans.",
        "Which detail in this report is most important for an investor?"
      ],
      [
        "Strong Travel Sales Meet Higher Fuel Costs",
        "Strong travel sales meet higher fuel costs. The latest information contains both helpful and unhelpful signs.",
        "Strong travel sales meet higher fuel costs. The event was confirmed in the latest fictional market report for share market.",
        "Neither side is strong enough to give the market a clear direction.",
        "Investors are waiting for stronger evidence before changing their plans.",
        "Would you act now or wait for another report?"
      ],
      [
        "Retailers Report Mixed Holiday Results",
        "Retailers report mixed holiday results. The latest information contains both helpful and unhelpful signs.",
        "Retailers report mixed holiday results. The event was confirmed in the latest fictional market report for share market.",
        "Neither side is strong enough to give the market a clear direction.",
        "Investors are waiting for stronger evidence before changing their plans.",
        "What new information could change your decision?"
      ],
      [
        "Technology Companies Prepare Product Events",
        "Technology companies prepare product events. The latest information contains both helpful and unhelpful signs.",
        "Technology companies prepare product events. The event was confirmed in the latest fictional market report for share market.",
        "Neither side is strong enough to give the market a clear direction.",
        "Investors are waiting for stronger evidence before changing their plans.",
        "How does this event affect risk and possible reward?"
      ],
      [
        "Australian Dollar Moves Very Little",
        "Australian dollar moves very little. The latest information contains both helpful and unhelpful signs.",
        "Australian dollar moves very little. The event was confirmed in the latest fictional market report for share market.",
        "Neither side is strong enough to give the market a clear direction.",
        "Investors are waiting for stronger evidence before changing their plans.",
        "Is this likely to be a short-term or long-term change?"
      ],
      [
        "Mining Output Rises As Metal Prices Fall",
        "Mining output rises as metal prices fall. The latest information contains both helpful and unhelpful signs.",
        "Mining output rises as metal prices fall. The event was confirmed in the latest fictional market report for share market.",
        "Neither side is strong enough to give the market a clear direction.",
        "Investors are waiting for stronger evidence before changing their plans.",
        "What could happen if the plan does not work as expected?"
      ],
      [
        "New Business Rules Create Gains And Costs",
        "New business rules create gains and costs. The latest information contains both helpful and unhelpful signs.",
        "New business rules create gains and costs. The event was confirmed in the latest fictional market report for share market.",
        "Neither side is strong enough to give the market a clear direction.",
        "Investors are waiting for stronger evidence before changing their plans.",
        "Would spreading money across investments reduce the risk?"
      ],
      [
        "Investors Review Leadership Changes",
        "Investors review leadership changes. The latest information contains both helpful and unhelpful signs.",
        "Investors review leadership changes. The event was confirmed in the latest fictional market report for share market.",
        "Neither side is strong enough to give the market a clear direction.",
        "Investors are waiting for stronger evidence before changing their plans.",
        "What evidence would make this choice feel safer?"
      ],
      [
        "Market Waits For Quarterly Profit Reports",
        "Market waits for quarterly profit reports. The latest information contains both helpful and unhelpful signs.",
        "Market waits for quarterly profit reports. The event was confirmed in the latest fictional market report for share market.",
        "Neither side is strong enough to give the market a clear direction.",
        "Investors are waiting for stronger evidence before changing their plans.",
        "How might customers, costs or government decisions affect the result?"
      ]
    ],
    "smallFall": [
      [
        "Coastair Cancels Some Winter Flights",
        "CoastAir cancels some winter flights. A limited problem has made investors more cautious.",
        "CoastAir cancels some winter flights. The event was confirmed in the latest fictional market report for share market.",
        "The issue may reduce income or increase costs, but the wider business remains active.",
        "Investors are waiting to see whether managers can solve the problem quickly.",
        "Which detail in this report is most important for an investor?"
      ],
      [
        "Riverbank Sees More Late Loan Payments",
        "RiverBank sees more late loan payments. A limited problem has made investors more cautious.",
        "RiverBank sees more late loan payments. The event was confirmed in the latest fictional market report for share market.",
        "The issue may reduce income or increase costs, but the wider business remains active.",
        "Investors are waiting to see whether managers can solve the problem quickly.",
        "Would you act now or wait for another report?"
      ],
      [
        "Urbancart Delays A Warehouse Opening",
        "UrbanCart delays a warehouse opening. A limited problem has made investors more cautious.",
        "UrbanCart delays a warehouse opening. The event was confirmed in the latest fictional market report for share market.",
        "The issue may reduce income or increase costs, but the wider business remains active.",
        "Investors are waiting to see whether managers can solve the problem quickly.",
        "What new information could change your decision?"
      ],
      [
        "Silverscreen Loses A Popular Show",
        "SilverScreen loses a popular show. A limited problem has made investors more cautious.",
        "SilverScreen loses a popular show. The event was confirmed in the latest fictional market report for share market.",
        "The issue may reduce income or increase costs, but the wider business remains active.",
        "Investors are waiting to see whether managers can solve the problem quickly.",
        "How does this event affect risk and possible reward?"
      ],
      [
        "Farmtech Pays More For Imported Parts",
        "FarmTech pays more for imported parts. A limited problem has made investors more cautious.",
        "FarmTech pays more for imported parts. The event was confirmed in the latest fictional market report for share market.",
        "The issue may reduce income or increase costs, but the wider business remains active.",
        "Investors are waiting to see whether managers can solve the problem quickly.",
        "Is this likely to be a short-term or long-term change?"
      ],
      [
        "Beacon Education Reports Slower Enrolments",
        "Beacon Education reports slower enrolments. A limited problem has made investors more cautious.",
        "Beacon Education reports slower enrolments. The event was confirmed in the latest fictional market report for share market.",
        "The issue may reduce income or increase costs, but the wider business remains active.",
        "Investors are waiting to see whether managers can solve the problem quickly.",
        "What could happen if the plan does not work as expected?"
      ],
      [
        "Metrobuild Loses One Apartment Project",
        "MetroBuild loses one apartment project. A limited problem has made investors more cautious.",
        "MetroBuild loses one apartment project. The event was confirmed in the latest fictional market report for share market.",
        "The issue may reduce income or increase costs, but the wider business remains active.",
        "Investors are waiting to see whether managers can solve the problem quickly.",
        "Would spreading money across investments reduce the risk?"
      ],
      [
        "Oceanfresh Recalls One Product Batch",
        "OceanFresh recalls one product batch. A limited problem has made investors more cautious.",
        "OceanFresh recalls one product batch. The event was confirmed in the latest fictional market report for share market.",
        "The issue may reduce income or increase costs, but the wider business remains active.",
        "Investors are waiting to see whether managers can solve the problem quickly.",
        "What evidence would make this choice feel safer?"
      ],
      [
        "Quickcharge Delays A Charger Launch",
        "QuickCharge delays a charger launch. A limited problem has made investors more cautious.",
        "QuickCharge delays a charger launch. The event was confirmed in the latest fictional market report for share market.",
        "The issue may reduce income or increase costs, but the wider business remains active.",
        "Investors are waiting to see whether managers can solve the problem quickly.",
        "How might customers, costs or government decisions affect the result?"
      ]
    ],
    "largeFall": [
      [
        "Ironvale Mine Closes After A Major Flood",
        "IronVale mine closes after a major flood. A serious event may have a large effect on income, costs or customer trust.",
        "IronVale mine closes after a major flood. The event was confirmed in the latest fictional market report for share market.",
        "The organisation must respond quickly, and the final cost is not yet known.",
        "Investors reacted strongly because recovery may take significant time.",
        "Which detail in this report is most important for an investor?"
      ],
      [
        "Securepay Reports A Serious Data Breach",
        "SecurePay reports a serious data breach. A serious event may have a large effect on income, costs or customer trust.",
        "SecurePay reports a serious data breach. The event was confirmed in the latest fictional market report for share market.",
        "The organisation must respond quickly, and the final cost is not yet known.",
        "Investors reacted strongly because recovery may take significant time.",
        "Would you act now or wait for another report?"
      ],
      [
        "Aeroquest Flight Test Ends In Failure",
        "AeroQuest flight test ends in failure. A serious event may have a large effect on income, costs or customer trust.",
        "AeroQuest flight test ends in failure. The event was confirmed in the latest fictional market report for share market.",
        "The organisation must respond quickly, and the final cost is not yet known.",
        "Investors reacted strongly because recovery may take significant time.",
        "What new information could change your decision?"
      ],
      [
        "Citymart Corrects Major Accounting Errors",
        "CityMart corrects major accounting errors. A serious event may have a large effect on income, costs or customer trust.",
        "CityMart corrects major accounting errors. The event was confirmed in the latest fictional market report for share market.",
        "The organisation must respond quickly, and the final cost is not yet known.",
        "Investors reacted strongly because recovery may take significant time.",
        "How does this event affect risk and possible reward?"
      ],
      [
        "Bioleaf Loses Approval For Its Main Product",
        "BioLeaf loses approval for its main product. A serious event may have a large effect on income, costs or customer trust.",
        "BioLeaf loses approval for its main product. The event was confirmed in the latest fictional market report for share market.",
        "The organisation must respond quickly, and the final cost is not yet known.",
        "Investors reacted strongly because recovery may take significant time.",
        "Is this likely to be a short-term or long-term change?"
      ],
      [
        "Global Freight Workers Begin A Long Strike",
        "Global Freight workers begin a long strike. A serious event may have a large effect on income, costs or customer trust.",
        "Global Freight workers begin a long strike. The event was confirmed in the latest fictional market report for share market.",
        "The organisation must respond quickly, and the final cost is not yet known.",
        "Investors reacted strongly because recovery may take significant time.",
        "What could happen if the plan does not work as expected?"
      ],
      [
        "Homecore Announces A Dangerous Appliance Recall",
        "HomeCore announces a dangerous appliance recall. A serious event may have a large effect on income, costs or customer trust.",
        "HomeCore announces a dangerous appliance recall. The event was confirmed in the latest fictional market report for share market.",
        "The organisation must respond quickly, and the final cost is not yet known.",
        "Investors reacted strongly because recovery may take significant time.",
        "Would spreading money across investments reduce the risk?"
      ],
      [
        "Zenith Media Merger Is Blocked",
        "Zenith Media merger is blocked. A serious event may have a large effect on income, costs or customer trust.",
        "Zenith Media merger is blocked. The event was confirmed in the latest fictional market report for share market.",
        "The organisation must respond quickly, and the final cost is not yet known.",
        "Investors reacted strongly because recovery may take significant time.",
        "What evidence would make this choice feel safer?"
      ],
      [
        "Titan Motors Stops Production After A Battery Fire",
        "Titan Motors stops production after a battery fire. A serious event may have a large effect on income, costs or customer trust.",
        "Titan Motors stops production after a battery fire. The event was confirmed in the latest fictional market report for share market.",
        "The organisation must respond quickly, and the final cost is not yet known.",
        "Investors reacted strongly because recovery may take significant time.",
        "How might customers, costs or government decisions affect the result?"
      ]
    ]
  }
};

(function(){
  function install(){
    if(typeof window.ensureMarkets!=='function'||typeof window.activeScenario!=='function')return setTimeout(install,25);
    window.marketNewsCategory=function(m){
      const s=activeScenario(m), eq=s.mode==='steady'?0:(Number(s.target)||0)*28/Math.max(1,Number(s.length)||28);
      if(eq>8)return 'largeRise'; if(eq>1)return 'smallRise'; if(eq<-8)return 'largeFall'; if(eq<-1)return 'smallFall'; return 'stable';
    };
    window.ensureMarketNews=function(p,type,force=false){
      ensureMarkets(p); const m=p.markets[type], category=marketNewsCategory(m), s=activeScenario(m);
      const signature=[category,s.startDate,s.length,s.target,s.volatility,s.after].join('|');
      const old=m.news||{}, age=old.publishedDate?days(old.publishedDate,today()):999;
      if(force||old.signature!==signature||old.category!==category||age>=2||!Number.isInteger(old.index)){
        const list=PMM_NEWS_DATA.marketStories[type][category], recent=Array.isArray(old.recent)?old.recent:[];
        let choices=list.map((_,i)=>i).filter(i=>i!==old.index&&!recent.includes(i));
        if(!choices.length)choices=list.map((_,i)=>i).filter(i=>i!==old.index);
        const index=choices[Math.floor(Math.random()*choices.length)]??0;
        m.news={category,index,publishedDate:today(),signature,recent:[index,...recent.filter(x=>x!==index)].slice(0,3)};
      }
      return m.news;
    };
    window.effectiveMarketStory=function(type){
      const n=ensureMarketNews(P(),type), raw=PMM_NEWS_DATA.marketStories[type][n.category][n.index], d=PMM_NEWS_DATA[type];
      return {d,s:{headline:raw[0],preview:raw[1],paragraphs:raw.slice(2,-1),think:raw.at(-1)},publishedDate:n.publishedDate};
    };
    window.currentStory=function(type){return effectiveMarketStory(type)};
    window.news=function(){
      MARKET_TYPES.forEach(type=>ensureMarketNews(P(),type)); window.scrollTo(0,0);
      V.innerHTML=`<div class="panel"><h2>Market News</h2><p>Read the latest reports and look for clues before you invest.</p></div>${MARKET_TYPES.map(type=>{let{d,s,publishedDate}=effectiveMarketStory(type);return `<button class="news-card" data-story="${type}"><h3>${d.label}</h3><small>Risk Level: ${d.risk} · Updated ${publishedDate}</small><h4>${s.headline}</h4><p>${s.preview}</p><b class="read-more">Read Full Story ›</b></button>`}).join('')}<p class="simulation-note">${PMM_NEWS_DATA.disclaimer}</p>`;
      V.querySelectorAll('[data-story]').forEach(b=>b.onclick=()=>fullNews(b.dataset.story)); save();
    };
    window.fullNews=function(type){
      let{d,s,publishedDate}=effectiveMarketStory(type);
      V.innerHTML=`<button id="newsBack" class="btn">‹ Back to News</button><article class="full-news panel"><small>Updated ${publishedDate}</small><h2>${s.headline}</h2><p class="news-lead">${s.preview}</p>${s.paragraphs.map(x=>`<p>${x}</p>`).join('')}<div class="think"><b>Think About It</b><p>${s.think}</p></div></article><p class="simulation-note">${PMM_NEWS_DATA.disclaimer}</p>`;
      document.querySelector('#newsBack').onclick=news; window.scrollTo(0,0);
    };
  }
  window.addEventListener('DOMContentLoaded',()=>setTimeout(install,0));
})();
