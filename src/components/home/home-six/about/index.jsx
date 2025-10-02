import { Link } from "react-router-dom";
import Icon1 from "../../../../assets/images/v6/icon1v6.png";
import Icon2 from "../../../../assets/images/v6/icon2v6.png";
import Icon3 from "../../../../assets/images/v6/icon3v6.png";
import Icon4 from "../../../../assets/images/v6/icon4v6.png";
import Thumb from "../../../../assets/images/v6/thumb1v6.png";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function About() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>Integrate collaborate and grow with Sofax</h2>
							</div>
							<p>
								Business environment, integration, collaboration and growth are key to the staying
								competitive. Sofax an innovative business solutions platform.
							</p>
							<div className="sofax-integration-list-icon-wrap">
								<div className="sofax-integration-list-icon-icon">
									<ul>
										<li>
											<img src={Icon1} alt="icon" />
											Insightly Marketing
										</li>
										<li>
											<img src={Icon3} alt="icon" />
											Marketing Cloud
										</li>
									</ul>
								</div>
								<div className="sofax-integration-list-icon-icon">
									<ul>
										<li>
											<img src={Icon2} alt="icon" />
											Build Relationships
										</li>
										<li>
											<img src={Icon4} alt="icon" />
											App Connect
										</li>
									</ul>
								</div>
							</div>
							<FadeInUp className="extra-mt tac">
								<Link className="sofax-default-btn pill" data-text="About Us" to="/about-us">
									<span className="button-wraper">About Us</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
					<div className="col-lg-5">
						<FadeInRight className="sofax-content-thumb ml-50 box-shadow">
							<img src={Thumb} alt="Thumb" />
						</FadeInRight>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
