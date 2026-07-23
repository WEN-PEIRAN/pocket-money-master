POCKET MONEY MASTER — VERSION 1.8

Startup fix
- index.html and app.js now use exactly matching IDs: subtitle, topimg and modalbody.
- Date helpers are declared before stored-data migration runs.
- App startup waits for DOMContentLoaded before finding page elements.
- Header updates are null-safe.
- Bottom navigation uses delegated click handling.
- A visible Startup Error panel is shown if required page containers are missing.

Retained
- V1.7 Savings, Term Deposit and Investment financial engine.
- V1.6 Delete Profile and Parent PIN controls.
- V1.5 spacing, money symbols and card thumbnails.
- V1.4 hover/press animation and transparent branding.
- Existing pmm-v1-data localStorage compatibility.
