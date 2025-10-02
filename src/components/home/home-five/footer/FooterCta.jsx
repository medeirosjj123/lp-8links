import { Link } from "react-router-dom";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";

function FooterCta() {
	return (
		<div className="sofax-footer-titlev5 position-ralatiove">
			<div className="row">
				<div className="col-xl-8 col-lg-8">
					<div className="tg-heading-subheading animation-style3">
						<h2 style={{ fontSize: '48px', lineHeight: '1.2', marginBottom: '20px' }}>
							<TextSplitFadeIn>Pronto para Dominar os Rankings do Google?</TextSplitFadeIn>
						</h2>
						<p style={{ 
							fontSize: '18px', 
							color: '#666', 
							marginTop: '20px',
							maxWidth: '600px' 
						}}>
							Junte-se a mais de 2.000 sites que já aumentaram seu tráfego orgânico com nossa tecnologia de IA.
						</p>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4 d-flex align-items-start justify-content-end" style={{ paddingTop: '10px' }}>
					<Link 
						to="/pricing" 
						style={{
							background: '#FF5C35',
							color: 'white',
							padding: '16px 32px',
							borderRadius: '8px',
							textDecoration: 'none',
							display: 'inline-flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: '18px',
							fontWeight: '600',
							transition: 'background-color 0.3s',
							border: 'none',
							cursor: 'pointer',
							textTransform: 'uppercase'
						}}
						onMouseOver={(e) => e.target.style.background = '#e54525'}
						onMouseOut={(e) => e.target.style.background = '#FF5C35'}
					>
						QUERO MAIS TRÁFEGO
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FooterCta;
