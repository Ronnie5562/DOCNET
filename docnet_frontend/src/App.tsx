import Login from "./pages/auth/LogIn"
import Register from "./pages/auth/Register"
import { AuthServiceProvider } from "./context/AuthContext";
import ConfirmAccount from "./pages/auth/AccountConfirmation";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./services/ProtectedRoute";
import Messages from "./pages/app/Messages";
import Profile from "./pages/app/Profile";
import Home from "./pages/app/Home";
import Appointments from "./pages/app/Appointments";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthServiceProvider>
        <Routes>
          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-account" element={<ConfirmAccount />} />

          {/* APP ROUTES */}
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthServiceProvider>
    </BrowserRouter>
  )
}

export default App;
