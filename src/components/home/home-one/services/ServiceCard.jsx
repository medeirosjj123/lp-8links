import { Link } from "react-router-dom";

function ServiceCard({ service }) {
	return (
		<div className="sofax-iconbox-wrap" style={{ padding: '30px 20px' }}>
			<div className="sofax-iconbox-icon">
				<img src={service.icon} alt={service.title} />
			</div>
			<div className="sofax-iconbox-data">
				<h4 style={{ 
					fontSize: 'clamp(20px, 4vw, 24px)',
					marginBottom: '15px',
					lineHeight: '1.3'
				}}>{service.title}</h4>
				<p style={{
					fontSize: 'clamp(14px, 3vw, 16px)',
					lineHeight: '1.6',
					marginBottom: '25px'
				}}>{service.description}</p>
				<Link 
					to="#pricing" 
					className="sofax-btn v1"
					style={{
						display: 'inline-flex',
						alignItems: 'center',
						padding: '12px 24px',
						borderRadius: '8px',
						fontSize: '16px',
						marginTop: '10px'
					}}
				>
					Quero Backlinks →
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
