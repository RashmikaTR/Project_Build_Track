# BuildTrack (Project Build Track)

BuildTrack is a comprehensive project and construction management web application. It is designed to help teams efficiently manage laborers, track inventory, organize project sites and tasks, and facilitate secure communication through an intuitive dashboard.

## Tech Stack

### Frontend
- **React.js**: Bootstrapped with Create React App.
- **React Router DOM**: For seamless client-side routing.
- **Axios**: For handling HTTP requests to the backend API.
- **React Lottie Player**: For dynamic and lightweight animations.

### Backend
- **Node.js & Express.js**: Fast and scalable server logic.
- **MongoDB**: NoSQL database for flexible data storage, mapped using **Mongoose**.
- **JWT (JSON Web Tokens)**: Secure and stateless user authentication.
- **Bcrypt / Bcrypt.js**: Secure password hashing.
- **Multer**: For multi-part file uploads.
- **Nodemailer**: For email communications or notifications.

## Features

- **Authentication & User Management**: Secure registration and login using JWT.
- **Dashboard**: A centralized hub for project insights and overviews.
- **Site & Task Management**: Detailed tracking of construction/project sites and specific tasks.
- **Labor Management**: Organize and manage labor details effectively.
- **Inventory Tracking**: Monitor materials and equipment inventory.
- **Messaging System**: Secure internal communication system.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally or via MongoDB Atlas

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RashmikaTR/Project_Build_Track.git
   cd Project_Build_Track
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and configure the necessary environment variables (e.g., `PORT`, `MONGO_URI`, `JWT_SECRET`). Then, start the development server:
   ```bash
   npm run dev
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   ```
   Start the React application:
   ```bash
   npm start
   ```

The application will now be running concurrently. The backend API will operate at your designated PORT (e.g., `http://localhost:5000`) and the frontend usually at `http://localhost:3000`.

## License

This project is licensed under the [MIT License](LICENSE).
