import { Link } from "react-router-dom";
import Shape from "../../../../assets/images/v4/shape1.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
function HeroButton() {
	return (
		<>
			<FadeInStaggerTwo className="sofax-hero-btn-wrap">
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill" data-text="Contact Us" to="/contact-us">
						<span className="button-wraper">Contact Us</span>
					</Link>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill outline-btn" data-text="View Our Services" to="/service">
						<span className="button-wraper">View Our Services</span>
					</Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
			<div className="hero4-shape1">
				<img src={Shape} alt="Shape" />
			</div>
		</>
	);
}

export default HeroButton;
