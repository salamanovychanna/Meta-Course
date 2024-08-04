import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from '../LoadingFallback'
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback/ErrorFallback";


const Home = lazy(()=>import("../Pages/Home"));
const Profile = lazy(()=>import("../Pages/Profile"));
const Booking = lazy(()=>import("../Pages/Booking"));
const Confirmed = lazy(()=>import("../Pages/Confirmed"));
const PageNotFound = lazy(()=>import("../Pages/PageNotFound"));

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
      <Route path="/booking" element={<Booking />} />
      <Route path="/confirmed" element={<Confirmed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Suspense>
    </ErrorBoundary>
  );
};

export default MainRoutes;
