import { Link } from "react-router-dom";
import UnifiedCheckout from "../../../checkout/UnifiedCheckout";

function PricingCard({ pricing: { plan, tagline, price, img, features, highlighted, featureIcon }, frequency }) {
	// Mapear frequência para string
	const getFrequencyString = () => {
		return frequency.id === 1 ? 'yearly' : 'monthly';
	};

	const getPixLink = (planName) => {
		const pixLinks = {
			"Empreendedor": "https://pay.kiwify.com.br/D7o0Q7Y",
			"Profissional": "https://pay.kiwify.com.br/tvnIEAK",
			"Agência": "https://pay.kiwify.com.br/c4elVky"
		};
		return pixLinks[planName];
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
				<a
					href={getPixLink(plan)}
					target="_blank"
					rel="noopener noreferrer"
					className="cta-button"
					style={{
						background: '#00C853',
						color: 'white',
						borderRadius: '12px',
						fontFamily: 'Inter',
						fontWeight: '600',
						border: 'none',
						padding: '18px',
						fontSize: '14px',
						textDecoration: 'none',
						display: 'inline-flex',
						alignItems: 'center',
						justifyContent: 'center',
						transition: 'background-color 0.3s ease',
						cursor: 'pointer',
						width: '100%',
						textTransform: 'uppercase',
						marginTop: '10px'
					}}
					onMouseOver={(e) => e.target.style.background = '#00A746'}
					onMouseOut={(e) => e.target.style.background = '#00C853'}
				>
					Pagar com Pix
				</a>
			</div>
		</div>
	);
}

export default PricingCard;
