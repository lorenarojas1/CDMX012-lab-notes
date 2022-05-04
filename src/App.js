/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/welcome';
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import NotFoundPage from './pages/NotFound';
import Blog from './pages/Blog';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './pages/protectedRouter';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/blog"
            element={(
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
          )}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
