import { Link } from "react-router-dom";
import Arrow from "../../../../assets/images/v8/icon-right-arrow.png";
function ProjectCard({ project: { title, category, image } }) {
	return (
		<Link to="/single-portfolio">
			<div className="sofax-testimonial-itemv8">
				<div className="sofax-testimonial-thumbv8">
					<img src={image} alt="Thumb" />
					<div className="sofax-testimonial-btnv8 light-color">
						<h4>{title}</h4>
						<p>{category}</p>
						<div className="right-icon-btn">
							<img src={Arrow} alt="Arrow icon" />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProjectCard;
