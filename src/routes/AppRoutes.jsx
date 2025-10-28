import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "@/lib/routes";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import VerifyOtp from "@/pages/auth/VerifyOtp";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        {/* <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.PRICING} element={<PricingPage />} /> */}

        {/* Auth */}
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.Verify_OTP} element={<VerifyOtp />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.Reset_PASSWORD} element={<ResetPassword />} />

        {/* Protected */}
        {/* <Route
          path={ROUTES.DASHBOARD}
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.WORKOUTS}
          element={
            <PrivateRoute>
              <WorkoutsPage />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.NUTRITION}
          element={
            <PrivateRoute>
              <NutritionPage />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.PROFILE}
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        /> */}

        {/* Catch-all redirect */}
        {/* <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} /> */}
      </Routes>
    </Router>
  );
}
