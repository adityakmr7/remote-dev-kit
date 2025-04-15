import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import AuthCallback from "./pages/AuthCallback.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import PublicRoute from "./components/PublicRoute.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";

function App() {
  return (
      <AuthProvider>
      <BrowserRouter>
          <Routes>
              <Route element={<PublicRoute />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/auth/callback" element={<AuthCallback />} />
              </Route>
              <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
              </Route>
          </Routes>
      </BrowserRouter>
      </AuthProvider>
  )
}

export default App
