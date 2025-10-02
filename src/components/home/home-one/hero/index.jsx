import Rattingful from "../../../../assets/images/v1/rattingful.svg";
import Rattinghalf from "../../../../assets/images/v1/rattinghalf.svg";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
import CTAButton from "../../../common/CTAButton";

// Importando os logos
import AhrefsLogo from "../../../../assets/images/partners/front-ahrefs.webp";
import SemrushLogo from "../../../../assets/images/partners/front-semrush.webp";
import MozLogo from "../../../../assets/images/partners/front-moz.webp";
import GoogleAnalyticsLogo from "../../../../assets/images/partners/front-google.webp";

function HeroSection() {
	return (
		<div 
			className="sofax-hero-section overflow-hidden" 
			id="hero"
			style={{
				paddingTop: 'clamp(80px, 12vh, 120px)',
				position: 'relative',
				zIndex: 1,
				background: '#fff'
			}}
		>
			<div className="container">
				<HeroContent />
				<div className="sofax-cta-button text-center" style={{ marginTop: '40px', marginBottom: '60px' }}>
					<CTAButton 
						text="QUERO MAIS TRÁFEGO COM IA"
						className="hero-cta"
						style={{
							fontSize: 'clamp(16px, 2.5vw, 18px)',
							padding: '20px 40px',
							borderRadius: '8px',
							background: '#FF5C35',
							color: '#fff',
							border: 'none',
							fontWeight: '600',
							textTransform: 'uppercase'
						}}
					/>
				</div>
				<div className="text-center" style={{ marginBottom: '60px' }}>
					<h6 style={{ 
						color: '#666', 
						fontSize: '14px',
						marginBottom: '25px',
						fontWeight: '500'
					}}>
						Integrado com
					</h6>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '20px',
						flexWrap: 'wrap',
						padding: '0 15px'
					}}>
						<img 
							src={AhrefsLogo} 
							alt="Ahrefs" 
							style={{ 
								height: 'clamp(20px, 4vw, 24px)', 
								opacity: 0.7,
								maxWidth: '100%',
								objectFit: 'contain'
							}} 
						/>
						<img 
							src={SemrushLogo} 
							alt="SEMrush" 
							style={{ 
								height: 'clamp(20px, 4vw, 24px)', 
								opacity: 0.7,
								maxWidth: '100%',
								objectFit: 'contain'
							}} 
						/>
						<img 
							src={MozLogo} 
							alt="Moz" 
							style={{ 
								height: 'clamp(20px, 4vw, 24px)', 
								opacity: 0.7,
								maxWidth: '100%',
								objectFit: 'contain'
							}} 
						/>
						<img 
							src={GoogleAnalyticsLogo} 
							alt="Google Analytics" 
							style={{ 
								height: 'clamp(20px, 4vw, 24px)', 
								opacity: 0.7,
								maxWidth: '100%',
								objectFit: 'contain'
							}} 
						/>
					</div>
				</div>
				<HeroThumbs />
				<div className="text-center mt-5 mb-5">
					<h6 style={{ 
						color: '#666', 
						fontSize: '24px',
						marginBottom: '40px',
						fontFamily: 'DM Sans',
						fontWeight: 'bold'
					}}>
						Mais de 2.000 sites já aumentaram seu tráfego com a 8links
					</h6>
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div style={{
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								padding: '20px',
								background: 'rgba(255, 255, 255, 0.1)',
								borderRadius: '16px',
								marginTop: '40px',
								marginBottom: '40px',
								flexWrap: 'wrap',
								gap: '30px'
							}}>
								<div style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									flex: '1',
									minWidth: '250px',
									textAlign: 'center'
								}}>
									<div style={{ fontSize: '36px', fontWeight: 'bold', color: '#FF5C35', marginBottom: '8px' }}>2000+</div>
									<div style={{ fontSize: '16px', color: '#666', fontWeight: 'bold' }}>Sites Atendidos</div>
								</div>
								<div style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									flex: '1',
									minWidth: '250px',
									textAlign: 'center'
								}}>
									<div style={{ fontSize: '36px', fontWeight: 'bold', color: '#FF5C35', marginBottom: '8px' }}>500K+</div>
									<div style={{ fontSize: '16px', color: '#666', fontWeight: 'bold' }}>Backlinks Gerados</div>
								</div>
								<div style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									flex: '1',
									minWidth: '250px',
									textAlign: 'center'
								}}>
									<div style={{ fontSize: '36px', fontWeight: 'bold', color: '#FF5C35', marginBottom: '8px' }}>300%</div>
									<div style={{ fontSize: '16px', color: '#666', fontWeight: 'bold' }}>Média de Aumento<br />no Tráfego</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
