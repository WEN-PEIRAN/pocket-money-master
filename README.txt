POCKET MONEY MASTER — VERSION 2.8

Interaction reliability
- Wallet taps are handled directly on pointer-up instead of depending on a later synthetic click.
- Tapping any visible account card now opens that account directly; swiping remains the way to browse cards.
- Wallet movement distinguishes a vertical swipe from a tap and processes only one card per swipe.
- The selected Wallet position is stored separately for each profile.
- Account pages validate the account ID before rendering.

Navigation
- Accounts, Activity, Summary and Settings explicitly restore the correct Back destination.
- A specific account returns to the Wallet; the Wallet returns to Profiles.
- The top Add button works on Accounts.
- The top Settings button works on Activity and Summary and is hidden on Settings to avoid an inert control.

PIN and dialogs
- Closing a Parent PIN dialog now resolves the pending action as cancelled instead of leaving it hanging.
- Restore Backup is available again and requires Parent PIN.
- Restored data is passed through V2.8 migration and normalisation.

Financial/data corrections
- Unknown investment types no longer run silently as Diversified Fund while awaiting repair.
- Repairing an investment clears its invalid state and reinitialises appropriate status.
- Buy/Sell Share account choices are limited to Transaction and Savings accounts.
- New records save an actual creation time so same-day Activity ordering is stable.
- Summary restores 1 Month, 3 Months, 1 Year and All Time filters.

Retained
- Unified profile mode, 4–6 digit Parent PIN, avatars, card designs and dark Add Account card.
- Wallet stack, gold card chip, Savings, Term Deposit, Investment and Share Market functions.
- Complete image assets and root-level package structure.
