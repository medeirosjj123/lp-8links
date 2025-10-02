import mixitup from "mixitup";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/images/v5/icon5.png";
import image1 from "../../assets/images/v5/image1.png";
import image2 from "../../assets/images/v5/image2.png";
import image3 from "../../assets/images/v5/image3.png";
import image4 from "../../assets/images/v5/image4.png";

function PortfolioList() {
	useEffect(() => {
		mixitup(".sofax-portfolio-column", {
			selectors: {
				target: ".mix",
			},
			animation: {
				duration: 500,
			},
		});
	}, []);
	return (
		<div className="section sofax-section-padding">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<h2>Check out all our latest feature projects</h2>
					<div className="sofax-portfolio-menu extra-mt">
						<ul className="option-set clear-both controls">
							<li className="mixitup-control mixitup-control-active" data-filter="*">
								View All Projects
							</li>
							<li className="mixitup-control" data-filter=".development">
								Web Design
							</li>
							<li className="mixitup-control" data-filter=".consultancy">
								Branding
							</li>
							<li className="mixitup-control" data-filter=".security">
								Mobile App
							</li>
						</ul>
					</div>
				</div>
				<div className="sofax-portfolio-column row">
					<div className="collection-grid-item mix col-md-6 business consultancy">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link to="/single-portfolio">
									<img src={image1} alt="image" />
								</Link>
							</div>
							<Link to="/single-portfolio">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Gradient Web Design</h4>
										<p>Web design & development</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<img src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6 development">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link to="/single-portfolio">
									<img src={image2} alt="Image 2" />
								</Link>
							</div>
							<Link to="/single-portfolio">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Mobile Web Design</h4>
										<p>APP</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<img src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6 Security business consultancy">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link to="/single-portfolio">
									<img src={image4} alt="image 4" />
								</Link>
							</div>
							<Link to="/single-portfolio">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Responsive Web Design</h4>
										<p>UI/UX Design</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<img src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6 consultancy">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link to="/single-portfolio">
									<img src={image3} alt="Image 3" />
								</Link>
							</div>
							<Link to="/single-portfolio">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Smart Watch Design</h4>
										<p>Digital World</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<img src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6 development security">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link to="/single-portfolio">
									<img src={image1} alt="Image 1" />
								</Link>
							</div>
							<Link to="/single-portfolio">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Gradient Web Design</h4>
										<p>Web Design</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<img src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6 development security">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link to="/single-portfolio">
									<img src={image2} alt="Iamge 2" />
								</Link>
							</div>
							<Link to="/single-portfolio">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Website SEO Ranking</h4>
										<p>Development</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<img src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
