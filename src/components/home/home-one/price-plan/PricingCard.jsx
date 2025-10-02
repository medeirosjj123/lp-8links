import { Link } from "react-router-dom";
import UnifiedCheckout from "../../../checkout/UnifiedCheckout";

function PricingCard({ pricing: { plan, tagline, price, img, features, highlighted, featureIcon }, frequency }) {
	// Mapear frequência para string
	const getFrequencyString = () => {
		return frequency.id === 1 ? 'yearly' : 'monthly';
	};

	return (
		<div className="sofax-pricing-wrap">
			<div className="sofax-pricing-header">
				<img src={img} alt="icon" />
				<h4>{plan}</h4>
				{tagline && <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>{tagline}</p>}
			</div>
			<div className="sofax-pricing-price">
				<h2>
					R$
					{price.map((item) => {
						if (item.id === frequency.id) {
							return item.value;
						}
					})}
				</h2>
				<p className="dynamic-value">{frequency.label}</p>
			</div>
			<div className="sofax-pricing-body">
				<h5>Benefícios do Plano:</h5>
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
				<UnifiedCheckout 
					plan={plan}
					frequency={getFrequencyString()}
					className={highlighted ? "highlighted" : ""}
				>
					Quero Mais Tráfego
				</UnifiedCheckout>
			</div>
		</div>
	);
}

export default PricingCard;
