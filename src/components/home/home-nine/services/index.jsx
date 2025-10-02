import { Link } from "react-router-dom";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: 1,
		title: "E-commerce Integration",
		description:
			"Integration in email marketing involves connecting your email marketing platform with your e-commerce store.",
		link: "single-service.html",
	},
	{
		id: 2,
		title: "Analytics & Reporting",
		description:
			"Recipients who open your email, effectiveness of your subject line and the overall interest of your audience.",
		link: "single-service.html",
	},
	{
		id: 3,
		title: "Email Campaign Creation",
		description:
			"Involves several steps utilizes various tools techniques to ensure the emails are effective engaging & aligned.",
		link: "single-service.html",
	},
	{
		id: 4,
		title: "Conversion Tracking",
		description:
			"Involves monitoring and analyzing to the actions that recipients take after clicking links within your emails.",
		link: "single-service.html",
	},
	{
		id: 5,
		title: "Opt-In Management",
		description:
			"A subscriber is added the email list immediately after submitting their email address without confirmation.",
		link: "single-service.html",
	},
	{
		id: 6,
		title: "Subject Line Testing",
		description:
			"Testing involves creating two different subject lines & sending them two small randomly selected segments.",
		link: "single-service.html",
	},
];
function Services() {
	return (
		<div className="section sofax-section-padding" id="service">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>We provide all email marketing services</h2>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-title-btn wow fadeInUpX">
								<Link className="sofax-default-btn pill" data-text="View All Services" to="/service">
									<span className="button-wraper">View All Services</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
