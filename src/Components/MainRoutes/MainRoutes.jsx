import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from '../LoadingFallback'
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import PrivateRoutes from "./PrivateRoutes";


const Home = lazy(()=>import("../Pages/Home"));
const PasswordReset = lazy(()=>import("../Pages/PasswordReset"))
const Profile = lazy(()=>import("../Pages/Profile/Profile"));
const Booking = lazy(()=>import("../Pages/Booking"));
const Login = lazy(()=>import("../Pages/Login"));
const Register = lazy(()=>import("../Pages/Register"));
const PageNotFound = lazy(()=>import("../Pages/PageNotFound"));
const Reservations = lazy(()=>import("../Pages/Reservations"));
const Menu = lazy(()=>import("../Pages/Menu"))
const NewPassword = lazy(()=>import("../Pages/NewPassword"))

const MainRoutes = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary 
      fallback={ErrorFallback}
      onReset={()=>navigate("/")}
    >
    <Suspense fallback={<Loading>loading...</Loading>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="reset-password" element={<PasswordReset/>}/>
      <Route path="new-password" element={<NewPassword/>}/>
      <Route path="menu" element={<Menu/>}/>
      <Route element={<PrivateRoutes/>}>
            <Route path="reservations" element={<Reservations/>}/>
            <Route path="booking" element={<Booking />} />
            <Route path="profile" element={<Profile />} />
          </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Suspense>
    </ErrorBoundary>
  );
};

export default MainRoutes;
