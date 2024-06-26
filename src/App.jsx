import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Rooms from "./pages/Rooms";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />}/>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="account" element={<Account />}/>
            <Route path="bookings" element={<Bookings />}/>
            <Route path="rooms" element={<Rooms />}/>
            <Route path="settings" element={<Settings />}/>
            <Route path="users" element={<Users />}/>
          </Route>
          <Route path="login" element={<Login />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
