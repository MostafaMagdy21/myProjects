import React from "react";
import { useParams } from "react-router-dom";
import "./BlogCardPage.scss";
import Header from "../../component/header/Header";

export const BlogCardPage = (props) => {
	const { id } = useParams();
	const post = props.getPostId(id);
	return (
		<div>
			<Header />
			<section class="sec1">
				<h2 class="title"> Blogs </h2>
				<div class="page">
					<img src={post.imge} alt="Green Plants" width="900" height="500" />

					<h6>2 days ago</h6>
					<h3>5 Simple Tips treat plant</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containingLorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<br />
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containingLorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</section>
		</div>
	);
};

export default BlogCardPage;
