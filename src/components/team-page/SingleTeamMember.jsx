import { Link } from "react-router-dom";
import FadeInUp from "../animation/FadeInUp";

function SingleTeamMember({ member: { image, title, name, className } }) {
	return (
		<Link to="/single-team">
			<div className={`sofax-team-member-wrap ${className}`}>
				<FadeInUp className="sofax-team-member-img">
					<img src={image} alt="team member" />
				</FadeInUp>
				<div className="sofax-team-member-content">
					<h4>{name}</h4>
					<p>{title}</p>
				</div>
			</div>
		</Link>
	);
}

export default SingleTeamMember;
