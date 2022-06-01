import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import FeaturedPage from "./screens/FeaturesPage/FeaturePage";
import ProfilePage from "./screens/ProfilePage/ProfilePage";
import ErrorPage from "./screens/ErrorPage/ErrorPage";
import Article from "./components/Article/Article";

const Container = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Feature" element={<FeaturedPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Article/:id" element={<Article />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Container;
