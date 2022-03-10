import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<LoginScreen />} /> */}
          <Route path="/login" element={
            <PublicRoutes>
              <LoginScreen />
            </PublicRoutes>
          }></Route>
          <Route path="/*" element={
            <PrivateRoute>
              <DashBoardRoutes />

            </PrivateRoute>
          }/>
          {/* <Route path="/*" element={<DashBoardRoutes />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
