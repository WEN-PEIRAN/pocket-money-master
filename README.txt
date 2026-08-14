POCKET MONEY MASTER — VERSION 2.6

Wallet card interface
- Child account cards use a fixed-height Wallet-style stack rather than page scrolling.
- Cards overlap while keeping their top sections visible.
- Swipe up/down moves one card at a time without moving the browser page.
- Selecting a rear card brings it to the front; selecting the front card again opens it.
- Keyboard Up/Down browses and Enter/Space opens.
- Add Account is the final card in the stack.
- Reduced-motion accessibility is supported.

Retained from V2.5 plan
- Fixed Share Market type persistence and legacy repair flow.
- Buy Shares / Sell Shares available both during and outside market hours.
- Value is fixed outside weekdays 3:00–6:00 pm Brisbane time.
- Value changes every 10 minutes during the session with ±20% daily safety cap.
- Buy/sell contributions are excluded from market gain calculations.

Package layout
- index.html, style.css, app.js, manifest.webmanifest and README.txt are in the root.
- Images remain under img/ by avatars, branding, buttons, cards and nav.
