
🚀 Overview
-----------

This YouTube Clone is a full-stack web application designed to offer functionalities similar to YouTube, 
where users can:

*   Upload videos and manage them.
    

*   Stream videos directly from the cloud.
    

*   Authenticate securely using JWT (JSON Web Tokens).
    

*   Explore, search, and view video content.
    

*   Use a clean and responsive user interface for a seamless experience.
    

The project uses **Cloudinary** for cloud storage of videos and images, 
**MongoDB** as the database, and **Tailwind CSS**for styling. 
The backend is powered by **Node.js** and **Express.js**,
while the frontend leverages **React** for building an interactive UI.

✨ Features
----------

### 🎨 Modern UI Layouts
* # Homepage
* **Header**: Includes the search bar and a login/signup button for unauthenticated users.
* **Sidebar**: A collapsible menu displaying categories and filters.
* **Video Grid**: Displays video cards with thumbnails, titles, channel names, and views.
*  # Video Player Page
* **Video Player**: Streams the selected video.
* **Details**: Shows video title, description, channel name, likes, and dislikes.
* **Comments**: Users can add, edit, and delete comments.
* # Channel Page
* **Channel Management**: Allows users to create, edit, or delete videos within their channel.
* **Subscribers and Stats**: Displays channel-specific details like banners, subscriber count, and video lists.


### 📹 Core Functionalities

*   **User Authentication**: Secure sign-up and sign-in using JWT.
    

*   **Video Uploads**: Upload videos and store them securely on Cloudinary.
    

*   **Video Streaming**: Stream videos with optimal performance.
    

*   **Video Management**: View uploaded videos and delete them if necessary.
    

*   **Search & Filter**: Search videos by title or description.
    

*   **Interactive UI**: Clean and responsive design using Tailwind CSS.
    

### 🔐 Security

*   Secure API routes protected using JWT.
    

*   Authentication tokens stored securely to avoid security vulnerabilities.
    

### ⚡ Responsive Design

*   A clean and responsive user interface, making it accessible across all devices.
    

🛠️ Technologies Used
---------------------

### 🌐 **Frontend**

*   **React**: Frontend library for building a dynamic user interface.
    

*   **React Router**: For implementing client-side routing.
    

*   **Axios**: For making API requests.
    

*   **Tailwind CSS**: Utility-first CSS framework for fast and responsive design.
    

### 🔙 **Backend**

*   **Node.js**: JavaScript runtime environment for server-side scripting.
    

*   **Express.js**: Fast and lightweight backend framework for building REST APIs.
    

### 💾 **Database& Cloud Storage**

*   **MongoDB**: NoSQL database for storing user and video data.
    

*   **Cloudinary**: For storing and managing video uploads securely in the cloud.
    

### 🔐 **Authentication**

*   **JWT (JSON Web Tokens)**: For secure user authentication and authorization.
  
### 🧰 **Version Control**

*   **Git**: For tracking changes in source code and collaborating efficiently.


---

## 🛠️ **Installation Guide**

Follow these steps to set up and run the YouTube Clone application on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Sanchijamkar/YouTube_Clone.git
   ```

2. **Install Node Modules And Run the Application**
   - Install dependencies for both the frontend and backend:

   ```bash
   # Navigate to the frontend folder
   cd frontend
   npm install
   npm run dev

   # Open New Terminal and Navigate to the backend folder 
   cd backend
   npm install
   npm start
   ```

3. **Open in Browser**

   - Visit `http://localhost:5173` in your browser to access the application.

---


