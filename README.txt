POCKET MONEY MASTER — VERSION 2.4

PIN changes
- Adult Profile PIN is now 4–6 digits only.
- Child Parent PIN is now 4–6 digits only.
- Child avatar changes and transfers between existing accounts do not require PIN.
- Child spending records do not require PIN.
- PIN is required for Add Money, account creation, savings-rate changes, account closure and Child Profile deletion.

Navigation fix
- The Back button on a specific Child account now returns to the Child Accounts carousel, not Profile Selection.

Share Market simulation
- Simulated market session: weekdays, 3:00 pm–6:00 pm Australia/Brisbane time.
- Update interval: one stored movement for each completed 10-minute slot.
- App checks every 30 seconds while open and catches up unprocessed valid slots when reopened.
- Uses small normally distributed movements with infrequent larger shocks.
- Compounds from the latest balance.
- Daily safety cap: +20% / -20% from the day's opening balance.
- Reaching the cap freezes further changes until the next simulated market day.
- Weekends and out-of-session times are frozen.
- Existing non-share investments keep their original daily simulation rules.
