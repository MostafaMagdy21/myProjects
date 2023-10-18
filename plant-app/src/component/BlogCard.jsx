import React from "react";

export const BlogCard = ({ imge }) => {
	return (
		<div class="card">
			<div class="image">
				<img src={imge} alt="Green Plants" width="312" height="235" />
			</div>
			<br />
			<div class="days">
				<h3>2 days ago</h3>
			</div>
			<br />
			<div class="info">
				<h4>5 Simple Tips treat plant</h4>
				<br />
				<p>
					leaf, in botany, any usually flattened green outgrowth from the stem
					of
				</p>
			</div>
		</div>
	);
};

export default BlogCard;
