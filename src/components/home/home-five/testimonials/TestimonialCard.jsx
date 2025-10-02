import RatingFull from "../../../../assets/images/v2/yellowstart.svg";

function TestimonialCard({
	testimonial: {
		review,
		rating,
		author: { title, name, image },
	},
}) {
	return (
		<div className="sofax-testimonial-slider-wrapv5">
			<div className="sofax-testimonial-slider-ratingv5">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<img src={RatingFull} alt="Rating" />
						</li>
					))}
				</ul>
			</div>
			<div className="sofax-testimonial-slider-datav5">
				<p>{review}</p>
			</div>
			<div className="sofax-testimonial-slider-authore-wrap">
				<div className="sofax-testimonial-slider-authore-member-img">
					<img src={image} alt="author image" />
				</div>
				<div className="sofax-testimonial-slider-authore-member-data">
					<h5>{name}</h5>
					<p>{title}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
