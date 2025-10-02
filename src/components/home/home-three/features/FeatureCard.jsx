import { Link } from "react-router-dom";
import ArrowRight from "../../../../assets/images/v1/arrow-right.png";
function FeatureCard({ feature: { icon, title, description } }) {
	return (
		<div className="sofax-iconbox-wrap">
			<div className="sofax-iconbox-icon">
				<img src={icon} alt="Icons" />
			</div>
			<div className="sofax-iconbox-data">
				<h4>{title}</h4>
				<p>{description}</p>
				<Link className="sofax-icon-btn" to="/single-service">
					Learn More <img src={ArrowRight} alt="Arrow" />
				</Link>
			</div>
		</div>
	);
}

export default FeatureCard;
