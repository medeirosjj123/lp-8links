import { Link } from "react-router-dom";
import Arrow from "../../../../assets/images/v1/arrow-right.png";
function BlogCard({ blog: { title, category, date, image } }) {
	return (
		<div className="sofax-blog-wrap-v4">
			<div className="sofax-blog-img">
				<Link to="/single-blog">
					<img src={image} alt="blog thumb" />
				</Link>
			</div>
			<Link to="/single-blog">
				<div className="sofax-blog-content">
					<div className="sofax-blog-meta">
						<div className="blog-btn">{category}</div>
						<ul>
							<li>{date}</li>
						</ul>
					</div>
					<h4>{title}</h4>
					<div className="sofax-icon-btn  sofax-blog-icon-btn">
						Learn More <img src={Arrow} alt="arrow" />
					</div>
				</div>
			</Link>
		</div>
	);
}

export default BlogCard;
