import Login from "./pages/auth/LogIn"
import Register from "./pages/auth/Register"
import { AuthServiceProvider } from "./context/AuthContext";
import ConfirmAccount from "./pages/auth/AccountConfirmation";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./services/ProtectedRoute";
import Messages from "./pages/app/Messages";
import Profile from "./pages/app/Profile";


const App = () => {
  return (
    <BrowserRouter>
      <AuthServiceProvider>
        <Routes>
          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-account" element={<ConfirmAccount />} />

          {/* APP ROUTES */}
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
        </Routes>
      </AuthServiceProvider>
    </BrowserRouter>
  )
}

export default App;
