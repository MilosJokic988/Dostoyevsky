import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/MainLayout';
import Home from './pages/Home';
import CrimeAndPunishment from './pages/CrimeAndPunishment';
import WhiteNights from './pages/WhiteNights';
import BrothersKaramazov from './pages/BrothersKaramazov';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="crime-and-punishment"
              element={
                <ProtectedRoute>
                  <CrimeAndPunishment />
                </ProtectedRoute>
              }
            />
            <Route
              path="white-nights"
              element={
                <ProtectedRoute>
                  <WhiteNights />
                </ProtectedRoute>
              }
            />
            <Route
              path="brothers-karamazov"
              element={
                <ProtectedRoute>
                  <BrothersKaramazov />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
