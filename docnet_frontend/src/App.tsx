import Login from "./pages/auth/LogIn"
import Register from "./pages/auth/Register"
import { AuthServiceProvider } from "./context/AuthContext";
import ConfirmAccount from "./pages/auth/AccountConfirmation";
import { Route, Routes, BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <AuthServiceProvider>
        <Routes>
          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-account" element={<ConfirmAccount />} />
        </Routes>
      </AuthServiceProvider>
    </BrowserRouter>
  )
}

export default App;
