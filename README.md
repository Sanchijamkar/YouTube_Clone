# MERN-Stack-YouTube-Clone  
🎥 YouTube Clone
🚀 Demo Video

🌟 Overview
A feature-rich YouTube Clone application built using the MERN Stack (MongoDB, Express.js, React, and Node.js)
with cloud storage and secure authentication. This project replicates core YouTube functionalities, such as
uploading, streaming, and interacting with video content, while providing a modern, responsive user experience.

✨ Features
📹 Core Functionalities

User Authentication:

Secure registration and login using JWT.
Google form integration for login and registration.
Video Management:

Upload videos securely to Cloudinary.
View and delete uploaded videos.
Video Streaming:

High-performance streaming with a custom video player.
Includes like/dislike buttons and a comment section.
Search and Filter:

Search videos by title via a header search bar.
Filter by categories using dynamic filter buttons.
Channel Page:

Create a channel (after login).
View, edit, and delete channel-specific videos.
🛠️ Technologies Used
🌐 Frontend:
React: Interactive and dynamic UI.
React Router: Enables seamless navigation.
Axios: Handles API requests.
Tailwind CSS: Provides a utility-first framework for styling.
🔙 Backend:
Node.js: Server-side runtime for JavaScript.
Express.js: Simplifies building REST APIs.
💾 Database & Cloud Storage:
MongoDB: Efficiently stores user, video, and comment data.
Cloudinary: Secure cloud storage for video and image assets.
🔐 Authentication:
JWT: Manages secure user authentication and protected routes.
🛠️ Installation Guide
Follow these steps to set up and run the YouTube Clone on your local machine:

Clone the Repository

bash
Copy
Edit
git clone https://github.com/Ayushgreat/MERN-Stack-YouTube-Clone.git  

Install Dependencies
Navigate to the respective directories and install the required packages:

bash
Copy
Edit

# Frontend  
cd frontend  
npm install  
npm run dev  
bash
Copy
Edit
# Backend  
cd backend  
npm install  
npm start  
Run the Application
Open your browser and visit:

bash
Copy
Edit
http://localhost:5173  

🎨 Modern UI Layouts

Homepage

Header: Includes the search bar and a login/signup button for unauthenticated users.
Sidebar: A collapsible menu displaying categories and filters.
Video Grid: Displays video cards with thumbnails, titles, channel names, and views.
Video Player Page
Video Player: Streams the selected video.
Details: Shows video title, description, channel name, likes, and dislikes.
Comments: Users can add, edit, and delete comments.
Channel Page
Channel Management: Allows users to create, edit, or delete videos within their channel.
Subscribers and Stats: Displays channel-specific details like banners, subscriber count, and video lists.
