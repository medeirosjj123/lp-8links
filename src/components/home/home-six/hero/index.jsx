import Dashboard from "../../../../assets/images/v6/dashboardv6.png";
import FadeInUp from "../../../animation/FadeInUp";
import HeroConent from "./HeroContent";
function Hero() {
	return (
		<div className=" section sofax-section-padding6 position-ralatiove" id="hero">
			<div className="container">
				<div className="row sofax_screenfix_right">
					<div className="col-lg-6">
						<HeroConent />
					</div>
					<div className="col-lg-6">
						<FadeInUp className="hero-thumbv6">
							<img src={Dashboard} alt="Dashboard" />
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
