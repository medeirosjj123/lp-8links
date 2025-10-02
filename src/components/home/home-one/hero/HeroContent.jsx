import CTAButton from "../../../common/CTAButton";

function HeroContent() {
	return (
		<div 
			className="sofax-hero-content center"
			style={{
				marginTop: 'clamp(40px, 10vh, 80px)',
				padding: '0 20px'
			}}
		>
			<h1 
				className="slider-custom-anim-left" 
				data-ani="slider-custom-anim-left" 
				data-ani-delay="0.3s"
				style={{
					fontSize: 'clamp(42px, 7vw, 82px)',
					lineHeight: '1.1',
					marginBottom: '30px',
					fontWeight: '900',
					letterSpacing: '-0.02em'
				}}
			>
				Backlinks<br />
				ILIMITADOS em<br />
				Piloto Automático
			</h1>
			<p style={{
				fontSize: 'clamp(16px, 2.5vw, 20px)',
				lineHeight: '1.6',
				maxWidth: '800px',
				margin: '0 auto',
				padding: '0 20px',
				color: '#4A4A4A'
			}}>
				Deixe a Inteligência Artificial publicar backlinks ILIMITADOS em sites com DA 25+ enquanto você toma café. 100% automatizado, 0% de trabalho manual.
			</p>
		</div>
	);
}

export default HeroContent;
