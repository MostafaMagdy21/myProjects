import { Route, Routes } from "react-router-dom";
import BlogCardPage from "../pages/blogPost/BlogCardpage";
import Pages from "../pages/index";

const Router = (props) => (
	<Routes>
		<Route path="/" exact element={<Pages.HomePage />} />
		<Route path="/about" exact element={<Pages.AboutPage />} />
		<Route
			path="/blog"
			exact
			element={<Pages.BlogPage items={props.items} />}
		/>
		<Route
			path="/blog/:id"
			exact
			element={<BlogCardPage getPostId={props.getPostId} />}
		/>
		<Route path="/login-page" exact element={<Pages.LoginPage />} />
		<Route path="/regester-page" exact element={<Pages.RegesterPage />} />
	</Routes>
);

export default Router;
