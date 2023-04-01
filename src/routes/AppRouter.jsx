import { BrowserRouter, Route, Routes } from "react-router-dom";

// import NavBar from "../components/NavBar/NavBar";
// import Footer from "../components/Footer/Footer";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CoursesPage from "../pages/CoursesPage";
import WorkshopsPage from "../pages/WorkshopsPage";
import ConferencesPage from "../pages/ConferencesPage";
import ContactPage from "../pages/ContactPage";
import CourseContactPage from "../pages/CoursesContactPage";

import Error404Page from "../pages/Error404Page";


function AppRouter() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<CoursesPage />} path="/courses" />
          <Route element={<WorkshopsPage />} path="/workshops" />
          <Route element={<ConferencesPage />} path="/conferences" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<CourseContactPage />} path="/course_contact" />
          <Route element={<Error404Page />} path="/error404" />
          <Route element={<Error404Page />} path="*" />
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default AppRouter;
