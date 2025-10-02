import { Link } from "react-router-dom";

function PricingCard({ pricing: { plan, price, img, features, highlighted, featureIcon }, frequency }) {
	return (
		<div className="sofax-pricing-wrap">
			<div className="sofax-pricing-header">
				<img src={img} alt="icon" />
				<h4>{plan}</h4>
			</div>
			<div className="sofax-pricing-price">
				<h2>
					$
					{price.map((item) => {
						if (item.id === frequency.id) {
							return item.value;
						}
					})}
				</h2>

				<p className="dynamic-value"> {frequency.label}</p>
			</div>
			<div className="sofax-pricing-body">
				<h5>Key features:</h5>
				<ul>
					{features.map((feature) => (
						<li key={feature}>
							<img src={featureIcon} alt="feature Icon" />
							{feature}
						</li>
					))}
				</ul>
			</div>
			<div className="sofax-pricing-footer">
				<Link className={`sofax-default-btn  d-block pill ${!highlighted && "outline-btn"}`} to="/contact-us">
					Purchase now
				</Link>
			</div>
		</div>
	);
}

export default PricingCard;
