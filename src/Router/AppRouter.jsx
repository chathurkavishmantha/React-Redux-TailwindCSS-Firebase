import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import User from "../Pages/User";
import Login from "../Pages/Login";
import UserProtected from "./UserProtected";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />

        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route element={<UserProtected />}>
            <Route path="user" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
