# Git-Hub-Map 🗺️

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)
![LiveKit](https://img.shields.io/badge/LiveKit-WebRTC-E5534B?logo=webrtc&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth-GitHub_OAuth-8A2BE2?logo=github&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google_Maps-API-4285F4?logo=googlemaps&logoColor=white)
![CI Status](https://img.shields.io/badge/build-passing-brightgreen?logo=githubactions&logoColor=white)

Git-Hub-Map is a revolutionary spatial collaboration platform for developers. By fusing GitHub data with Google Maps, it transforms global codebases into an interactive virtual war room. Developers can locate contributors geographically, message in real-time, and instantly join repository-specific WebRTC video conferences directly from the map GUI.

---

## 🚀 Features

* **Spatial Collaboration:** Visualize repository contributors on an interactive global map using `@vis.gl/react-google-maps`.
* **Instant WebRTC Video:** Hop into repository-specific video conferences powered by `LiveKit`.
* **Real-Time Messaging:** Chat instantly with active contributors via LiveKit Data Channels.
* **GitHub Integration:** Secure login and identity verification using `NextAuth` and GitHub OAuth.
* **Automated CI/CD:** Continuous integration configured via GitHub Actions.

---

## 📂 Project Structure

A clean, modular Next.js 14 App Router architecture:

```text
Git-Hub-Map/
├── .github/
│   └── workflows/
│       └── main.yml                  # GitHub Actions CI pipeline
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.js          # NextAuth GitHub login handler
│   │   └── livekit/
│   │       └── route.js              # LiveKit JWT token generator API
│   ├── layout.js                     # Global layout & React Context Providers
│   └── page.js                       # Main entry UI (Full-screen map instance)
├── src/
│   ├── components/
│   │   ├── Chat/                     # Text chat UI powered by LiveKit Data Channels
│   │   ├── Map/
│   │   │   ├── MapContainer.js       # The @vis.gl Google Map instance
│   │   │   └── RepoMarker.js         # Interactive map pins for repositories
│   │   ├── Shared/
│   │   │   └──
