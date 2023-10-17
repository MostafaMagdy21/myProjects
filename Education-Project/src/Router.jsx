import React from "react";
import Pages from "./pages";
import { Routes, Route } from "react-router-dom";

export const Router = () => (
  <Routes>
    <Route path="/" exact element={<Pages.HomePage />} />
    <Route path="/tech/:id" exact element={<Pages.TechAboutPage />} />
    <Route path="/start_learn" exact element={<Pages.StartLearn />} />
    <Route path="/about" exact element={<Pages.AboutPages />} />
    <Route path="/regester" exact element={<Pages.RegesterPage />} />
    <Route path="/inviroment_setup" exact element={<Pages.InviromentSetup />} />
    <Route path="/404" element={<Pages.Errors.E404 />} exact />

    <Route path="*" element={<Pages.Errors.E404 />} />
  </Routes>
);

export default Router;
