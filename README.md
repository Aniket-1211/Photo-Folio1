# 📸 PhotoFolio

PhotoFolio is a **photo album management web application** built with **React.js** and **Firebase**.  
It allows users to create albums, add/edit/delete images, and view them in a responsive carousel, with real-time updates powered by Firebase Firestore.  

## live -->https://photo-folio1.onrender.com/
---

## 🚀 Features
- 📂 **Album Management** – Create and organize photo albums.  
- 🖼️ **Image CRUD** – Add, edit, and delete images inside albums.  
- 🔄 **Real-time Updates** – Integrated with Firebase Firestore for instant syncing.  
- 🖥️ **Carousel View** – Browse album images in a modern, interactive carousel.  
- 🔔 **Notifications** – Feedback system for actions like image/album creation, edits, and deletions.  
- 📱 **Responsive UI** – Works seamlessly on desktop and mobile.  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router, CSS Modules  
- **Database:** Firebase Firestore  
- **Hosting:** Firebase Hosting  
- **State Management:** React Hooks (useState, useEffect)  

---

## 📂 Project Structure
PhotoFolio/
├── public/ # Static files
├── src/
│ ├── components/ # AlbumForm, ImageForm, ImageList, Carousel, Notification
│ ├── App.js # Root component
│ ├── firebase.js # Firebase configuration
│ ├── styles/ # CSS modules
│ └── index.js # Entry point
└── package.json # Dependencies
