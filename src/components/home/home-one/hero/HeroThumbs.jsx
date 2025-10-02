import Dashboard from "../../../../assets/images/v1/dashboard.png";
import Shape1 from "../../../../assets/images/v1/shape1.png";
import Shape2 from "../../../../assets/images/v1/shape2.png";
import FadeInUp from "../../../animation/FadeInUp";

function HeroThumbs() {
	return (
		<FadeInUp className="sofax-hero-thumb1">
			<img 
				src={Dashboard} 
				alt="Dashboard" 
				style={{ 
					maxWidth: '100%', 
					height: 'auto',
					border: '1px solid rgba(0, 0, 0, 0.1)',
					borderRadius: '12px',
					boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
					padding: '20px',
					backgroundColor: 'white'
				}} 
			/>
			<div className="sofax-hero-shape">
				<img src={Shape1} alt="shape" />
			</div>
			<div className="sofax-hero-shape2">
				<img src={Shape2} alt="shape" />
			</div>
		</FadeInUp>
	);
}

export default HeroThumbs;
