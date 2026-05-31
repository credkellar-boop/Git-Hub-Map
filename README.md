# Git-Hub-Map
Git-Map-Hub is a revolutionary spatial collaboration platform for developers. By fusing GitHub data with Google Maps, it transforms global codebases into an interactive virtual war room. Developers can locate contributors geographically, message in real-time, and instantly join repository-specific WebRTC video conferences directly from the map GUI.

Git-Map-Hub/
├── .env.local                 # API Keys (Google Maps, LiveKit, GitHub OAuth)
├── .gitignore
├── next.config.mjs
├── package.json
└── src/
    ├── app/
    │   ├── api/
    │   │   ├── auth/
    │   │   │   └── [...nextauth]/route.js  # NextAuth.js GitHub login handler
    │   │   └── livekit/
    │   │       └── route.js                # LiveKit JWT token generator
    │   ├── layout.js                       # Global HTML layout and React Context Providers
    │   └── page.js                         # The main entry UI (The full-screen map)
    │
    ├── components/
    │   ├── Map/
    │   │   ├── MapContainer.js             # The @vis.gl Google Map instance
    │   │   └── RepoMarker.js               # Interactive map pins for repositories
    │   │
    │   ├── Video/
    │   │   └── RoomInterface.js            # LiveKit video grid and controls wrapper
    │   │
    │   ├── Chat/
    │   │   └── MessagingOverlay.js         # Text chat UI powered by LiveKit Data Channels
    │   │
    │   └── Shared/
    │       └── NavBar.js                   # Top navigation, showing user profile & login state
    │
    └── lib/
        ├── github.js                       # Helper functions to fetch GitHub API data
        └── utils.js                        # General formatting or coordinate math utilities
