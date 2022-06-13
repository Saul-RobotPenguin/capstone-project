import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import FeaturedPage from "./screens/FeaturesPage/FeaturePage";
import ProfilePage from "./screens/ProfilePage/ProfilePage";
import ErrorPage from "./screens/ErrorPage/ErrorPage";
import Article from "./components/Article/Article";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import GetAllJobLinks from "./screens/FeaturePageJobLink/GetAllJoblinks";

//Joblinks
import JobLink from "./screens/FeaturePageJobLink/Joblink";

const Container = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Feature" element={<FeaturedPage />} />
        <Route path="/Feature/:id" element={<JobLink />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/JobLinks" element={<GetAllJobLinks />} />
        <Route path="/Article/:id" element={<Article />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Container;
