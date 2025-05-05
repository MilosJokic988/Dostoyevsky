# Dostoyevsky Quotes

A modern responsive React web application showcasing famous quotes by Fyodor Dostoyevsky. Built with Vite, React, React Router, and React Bootstrap, the site features user authentication, protected routes, and styled quote displays that evoke a classic handwritten manuscript feel.

## 🚀 Live Demo

The site is deployed on Vercel:

> https\://<your-project>.vercel.app

## 🖥️ Features

* **User Authentication**: Register and login stored in localStorage
* **Protected Routes**: Access to quote pages requires login
* **Quotes Pages**:

  * Crime and Punishment
  * White Nights
  * Brothers Karamazov
* **Interactive Cards**: Hover effects, click-to-expand manuscript style
* **Copy to Clipboard**: Easily copy quotes
* **Responsive Design**: Mobile-first, grid and flex layouts

## 📂 Project Structure

```
src/
├── assets/             # Static assets (images, textures)
├── components/         # Shared components (Header, Footer, Layout, ProtectedRoute)
├── context/            # AuthContext for authentication logic
├── pages/              # Page components
│   ├── Home.jsx
│   ├── CrimeAndPunishment.jsx
│   ├── WhiteNights.jsx
│   ├── BrothersKaramazov.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── App.jsx             # Application root with routing
├── main.jsx            # Vite entry point
├── index.css           # Global styles
└── vite.config.js      # Vite configuration
```

## 🛠️ Technologies Used

* **Framework**: React 19 (via Vite)
* **Routing**: react-router-dom
* **UI Library**: react-bootstrap
* **Styling**: CSS Modules / plain CSS
* **Deployment**: Vercel

## ⚙️ Getting Started

### Prerequisites

* Node.js >= 16.x
* npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/dostoyevsky-quotes.git
cd dostoyevsky-quotes

# Install dependencies
npm install
# or
# yarn install
```

### Running Locally

```bash
npm run dev
# or
# yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### Building for Production

```bash
npm run build
# or
# yarn build
```

## 📦 Deployment

1. Push your changes to GitHub.
2. Import the repo into Vercel.
3. Vercel auto-detects Vite and deploys.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License. Feel free to use and modify.
