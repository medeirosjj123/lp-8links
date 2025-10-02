import { Link } from "react-router-dom";
import LogoWhite from "../../../../assets/images/logo/logo-dark.svg";
import CopyRight from "./CopyRight";
function Footer() {
	return (
		<footer className="sofax-footer-section">
			<div className="container">
				<div className="sofax-footer-top">
					<div className="row">
						<div className="col-xl-4 col-md-12">
							<div className="sofax-footer-wrap mr15">
								<Link to="/muti-page/home-four">
									<img src={LogoWhite} alt="logo" />
								</Link>
								<p>
									We are a branding agency that works to help companies grow digitally. We have a
									successful track record of working with various organizations.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="sofax-footer-menu ml-70">
								<h5>Company</h5>
								<ul>
									<li>
										<Link to="/about-us">About Us</Link>
									</li>
									<li>
										<Link to="/contact-us">Contact US</Link>
									</li>
									<li>
										<Link to="/contact-us">Privacy Policy</Link>
									</li>
									<li>
										<Link to="/terms-and-condition">Terms & Conditions</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<div className="sofax-footer-menu ml-50">
								<h5>Utility pages</h5>
								<ul>
									<li>
										<Link to="/contact-us">Instructions</Link>
									</li>
									<li>
										<Link to="/contact-us">Style guide</Link>
									</li>
									<li>
										<Link to="/404">404 Pages</Link>
									</li>
									<li>
										<Link to="/contact-us">Licenses</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="sofax-footer-menu sofax-footer-active">
								<h5>Resources</h5>
								<ul>
									<li>
										<Link to="/contact-us">Articles</Link>
									</li>
									<li>
										<Link to="/faq">FAQ</Link>
									</li>
									<li>
										<Link to="/career">Careers</Link>
									</li>
									<li>
										<Link to="/contact-us">Video guide</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<CopyRight />
			</div>
		</footer>
	);
}

export default Footer;
