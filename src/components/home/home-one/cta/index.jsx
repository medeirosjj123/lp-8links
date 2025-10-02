import Shape4 from "../../../../assets/images/v1/shape4.png";
import FadeInUp from "../../../animation/FadeInUp";

function Cta() {
	return (
		<section className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="sofax-cta-content">
					<div className="tg-heading-subheading animation-style3">
						<h2>Impulsione seu SEO com Backlinks de Qualidade</h2>
					</div>
					<p>
						Deixe nossa Inteligência Artificial trabalhar por você. Receba backlinks de qualidade de sites com DA 30+ 
						enquanto você se concentra no que realmente importa: seu negócio.
					</p>
					<FadeInUp className="extra-mt">
						<a 
							href="#pricing"
							style={{
								background: 'rgb(255, 92, 53)',
								borderRadius: '12px',
								padding: '24px 48px',
								fontSize: '18px',
								fontWeight: '600',
								border: 'none',
								cursor: 'pointer',
								textDecoration: 'none',
								display: 'inline-flex',
								transition: 'background-color 0.3s',
								color: 'white',
								fontFamily: 'Inter',
								alignItems: 'center',
								justifyContent: 'center',
								width: 'auto',
								textTransform: 'uppercase'
							}}
							onMouseOver={(e) => e.target.style.background = '#e54525'}
							onMouseOut={(e) => e.target.style.background = 'rgb(255, 92, 53)'}
						>
							QUERO MAIS TRÁFEGO
						</a>
						<span className="cta-bottom">Comece agora. Sem complicação.</span>
					</FadeInUp>
					<div className="sofax-cta-shape">
						<img src={Shape4} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cta;
