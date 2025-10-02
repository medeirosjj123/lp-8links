import Rating from "../../../../assets/images/v8/yellow-ratting.png";

function TestimonialCard({
	testimonial: {
		image,
		review,
		rating,
		author: { name, title },
	},
}) {
	return (
		<div className="sofax-iconbox-wrap">
			<div className="sofax-iconbox-icon">
				<img src={image} alt="icons" />
			</div>
			<div className="sofax-iconbox-data testimonial-vr8">
				<p>{review}</p>
			</div>
			<div className="sofax-testimonial-authore-wrapv8">
				<div className="sofax-testimonial-authore-data">
					<h5>{name}</h5>
					<p>{title}</p>
				</div>
				<div className="sofax-testimonial-authore-icon">
					<ul>
						{[...Array(rating)].map(() => (
							<li key={crypto.randomUUID()}>
								<img src={Rating} alt="Rating" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
