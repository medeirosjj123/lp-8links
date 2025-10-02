import Star from "../../../../assets/images/v7/icon4v7.png";
function TestimonialCard({
	testimonial: {
		image,
		review,
		rating,
		author: { name, title },
	},
}) {
	return (
		<div className="sofax-testimonial-wrapperv7">
			<div className="sofax-testimonial-wrapv7">
				<div className="sofax-testimonial-thumbv7">
					<img src={image} alt="thumb" />
				</div>
				<div className="sofax-testimonial-rattingv7">
					<ul>
						{[...Array(rating)].map(() => (
							<li key={crypto.randomUUID()}>
								<img src={Star} alt="rating star" />
							</li>
						))}
					</ul>
					<div className="sofax-testimonial-authorev7">
						<h5>{name}</h5>
						<p>{title}</p>
					</div>
				</div>
			</div>
			<div className="sofax-testimonial-datav7">
				<p>{review}</p>
			</div>
		</div>
	);
}

export default TestimonialCard;
