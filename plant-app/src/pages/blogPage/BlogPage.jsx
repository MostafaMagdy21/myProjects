import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../component/BlogCard";
import "./BlogPage.scss";
import Header from "../../component/header/Header";

const BlogPage = ({ items }) => {
	return (
		<div>
			<Header />
			<div className="container blogs-page">
				<h2 class="title"> Blogs </h2>
				<div className="row">
					{items.map((card) => (
						<Link className="col-4" to={`/blog/${card.id}`}>
							<BlogCard imge={card.imge} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
