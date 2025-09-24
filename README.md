Mini Music Distribution Dashboard
🎵 Mini Music Distribution Dashboard
A fully functional Next.js + Tailwind CSS app that simulates a white-label music distribution platform.
This project was built as part of a frontend interview assignment to demonstrate Next.js fundamentals,
API routes, state management, and modern UI design.
🚀 Features Implemented
- Login Page (Mock Authentication)
  - Simple username + password form
  - Redirects to dashboard on submit
  - Session stored in localStorage
- Dashboard Page
  - Displays a list of uploaded tracks (Title, Artist, Release Date, Status)
  - Data served via Next.js API routes (/api/tracks)
  - Search bar to filter tracks by title/artist
  - Clickable rows that open track details
- Track Upload Page
  - Form to "upload" new track (mock form, no real file upload)
  - Fields: Title, Artist, Release Date, Genre
  - Adds track to dashboard list after submit
- Track Details Page (Dynamic Route)
  - /track/[id] fetches data from API and displays track details
- Responsive & Modern UI
  - Glassmorphic design with blurred backgrounds
  - Fully responsive (works on desktop & mobile)
  - Sidebar navigation collapses on small screens
- Bonus Features
  - Dark/Light theme toggle (persists via localStorage)
  - Colored status badges
  - Search/filter on dashboard
🛠️ Tech Stack
- Next.js (Latest Stable Version)
- React Hooks (useState, useEffect)
- Tailwind CSS
- LocalStorage
📂 Project Structure
pages/
 ├── api/
 │    └── tracks.js      # Mock API route for tracks
 ├── track/
 │    └── [id].js        # Dynamic route for track details
 ├── index.js            # Login page
 ├── dashboard.js        # Dashboard page
 └── upload.js           # Track upload page
components/
 ├── Layout.js           # Shared layout (header, logout button)
 ├── Nav.js              # Sidebar navigation
 └── TrackTable.js       # Track list table
styles/
 └── globals.css         # Tailwind base styles
⚡ Getting Started
1. Clone the Repository
    git clone https://github.com/YOUR_USERNAME/mini-music-dashboard.git
    cd mini-music-dashboard
2. Install Dependencies
    npm install
3. Run the Development Server
    npm run dev
🧠 Approach & Thought Process
- Mock authentication with localStorage
- Data served from Next.js API routes
- Dynamic routing with [id].js for track details
- State managed with hooks
- Responsive glassmorphic design with Tailwind CSS
- Bonus: Search bar + Theme toggle
✅ Deliverables
- Complete Next.js project with code
- README with setup instructions, approach, and feature list
- Ready-to-run local environment
🚀 Running the Project
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/mini-music-dashboard.git
cd mini-music-dashboard

2. Install dependencies
npm install

3. Start the development server
npm run dev


Opens at http://localhost:3000

Use this mode while developing or testing features.

Supports hot-reloading for instant updates.

4. Start in production mode (optional)
npm run build    # build the production version
npm start        # start the server using the production build


Use this mode when deploying or testing production behavior.

Requires the .next build folder.

⚠ Note:

Make sure you are in the project folder (where package.json is) to avoid lockfile conflicts.

Development mode (npm run dev) is usually preferred for local testing.
