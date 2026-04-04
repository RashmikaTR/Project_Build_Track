<div align="center">
  
  <img src="https://img.icons8.com/color/100/000000/crane.png" alt="Crane Logo" width="100"/>
  
  # 🏗️ BuildTrack
  
  **The All-In-One Construction & Project Management Dashboard**

  <p align="center">
    Empowering teams to effortlessly manage construction sites, track inventory, organize labor, and foster structured project communication in one unified web platform.
    <br />
    <a href="#features"><strong>Explore the features »</strong></a>
    <br />
    <br />
  </p>
</div>

<p align="center">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/RashmikaTR/Project_Build_Track?color=blue&style=for-the-badge">
  <img alt="React" src="https://img.shields.io/badge/-React-0F172A?style=for-the-badge&logo=react">
  <img alt="Node.js" src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
</p>

> **Note**: This application is currently in active development.

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Core Features](#-core-features)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage Workflow](#-usage-workflow)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 About The Project

**BuildTrack** solves the operational disconnect common in project and construction management. From logging massive hardware inventories ensuring supplies don't bottleneck timelines, to managing on-site labor effectively—BuildTrack provides managers with a bird’s-eye view of their operations. 

Equipped with a secure backend and a responsive frontend, the application offers an end-to-end management experience tailored for modern builders.

---

## 🛠️ Tech Stack

### Client-Side (Frontend)
*   **React.js (v19)** — Industry standard for building dynamic UI components.
*   **React Router DOM** — Robust client-side routing.
*   **Axios** — Streamlined and reliable promise-based HTTP client.
*   **Lottie Player** — High quality, lightweight animated assets.

### Server-Side (Backend)
*   **Node.js & Express.js** — Fast, non-blocking, scalable backend infrastructure.
*   **MongoDB & Mongoose** — Flexible NoSQL database with strict schema modeling.
*   **JWT & Bcrypt** — State-of-the-art authentication and secure password hashing.
*   **Multer** — Middleware for handling `multipart/form-data` (file uploads).

---

## ✨ Core Features

| Feature | Description |
| --- | --- |
| 🔐 **Secure Authentication** | Token-based security protecting routes and specific user workflows. |
| 📊 **Interactive Dashboard** | A holistic overview featuring data insights, recent activities, and high-level health tracking. |
| 👷 **Labor Management** | Streamlined assignment and tracking of site workers, their roles, and attendance/payroll tracking. |
| 📦 **Inventory Logistics** | Complete tracking of materials, equipment logs, restock alerts, and resource allocation per site. |
| 🏗️ **Site & Task Control** | Register different physical sites, map out timelines, and isolate tasks per active location. |
| 💬 **Internal Messaging** | Secure, direct internal chat functionality for immediate on-site or off-site communication. |

---

## 📂 Project Architecture

```plaintext
Project_Build_Track/
├── backend/                  # Server-side Application
│   ├── config/               # Database and environmental configs
│   ├── controllers/          # API route logic and handlers
│   ├── middleware/           # Security (JWT validation)
│   ├── models/               # MongoDB models (User, Labor, Site, Inventory, Message)
│   ├── routes/               # Express routing endpoints
│   ├── uploads/              # Storage directory for server uploads
│   └── server.js             # Application entry point
│
└── frontend/                 # Client-side Application (React)
    ├── public/               # Static assets
    └── src/                  
        ├── assets/           # Local visual assets (images, Lottie JSON, etc.)
        ├── components/       # Reusable React UI blocks
        ├── contexts/         # Global state management
        ├── pages/            # View components (Dashboard, Login, LaborManagement, etc.)
        ├── services/         # API integration layer
        └── styles/           # Application styling (CSS)
```

---

## 🏁 Getting Started

Follow these instructions to set up the project locally for development or testing purposes.

### Prerequisites

Ensure you have the following installed to run BuildTrack smoothly:
*   [Node.js](https://nodejs.org/en/) `v16.x` or higher
*   [MongoDB](https://www.mongodb.com/) (running locally, or a MongoDB Atlas URI)
*   [Git](https://git-scm.com/)

### Installation

1.  **Clone the Repository**
    ```sh
    git clone https://github.com/RashmikaTR/Project_Build_Track.git
    cd Project_Build_Track
    ```

2.  **Configure Environment Variables**
    *   Navigate to the `backend` folder: `cd backend`
    *   Create a `.env` file and configure:
        ```env
        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_super_secret_jwt_key
        ```

3.  **Start the Backend Server**
    ```sh
    npm install
    npm run dev
    ```

4.  **Start the Frontend App**
    Open a new terminal window parallel to the server process:
    ```sh
    cd ../frontend
    npm install
    npm start
    ```

Your app will automatically launch in the browser at `http://localhost:3000`. The API communicates efficiently over `http://localhost:5000`.

---

## 📈 Usage Workflow

1.  **Login/Register**: Start by registering an admin or manager account via the `Login` visual interface.
2.  **Dashboard**: You will be driven to the `/Home` or `/Dashboard` view showcasing site numbers, material shortages, and active labors.
3.  **Deploy Resources**: Go to `/InventoryManagement` to log initial hardware, then to `/LaborManagement` to organize your workforce mapping.
4.  **Monitor**: Connect labors and inventories to your specific created `Sites`.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

---

<div align="center">
  <p>Built with ❤️ by RashmikaTR and contributors.</p>
</div>
