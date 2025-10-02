import { Link } from "react-router-dom";
import Icon from "../../../../assets/images/v5/icon5.png";
function ProjectCard({ project: { title, image, category } }) {
	return (
		<div className="sofax-portfolio-content-wrap">
			<div className="sofax-portfolio-thumb">
				<Link to="/single-portfolio">
					<img src={image} alt="project image" />
				</Link>
			</div>
			<Link to="/single-portfolio">
				<div className="sofax-portfolio-author-wrap">
					<div className="sofax-portfolio-author-data">
						<h4>{title}</h4>
						<p>{category}</p>
					</div>
					<div className="sofax-portfolio-author-icon">
						<img src={Icon} alt="Icon" />
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProjectCard;
