import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Shape from "../../../../assets/images/v6/shape1v6.png";
import Field from "../../../common/Field";
function FooterCta() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Subscription Completed!");
		reset();
		console.log("Submited Form Data = ", formData);
	};
	return (
		<div className="footer6-content">
			<ToastContainer position="bottom-right" />
			<div className="tg-heading-subheading animation-style3">
				<h2>Let’s get you growing with simplify CRM</h2>
			</div>
			<div className="sofax-subscription-field blog-details-subscribe-btn extra-mt">
				<form onSubmit={handleSubmit(submitForm)}>
					<Field error={errors.email}>
						<input
							{...register("email", { required: "Email is required." })}
							type="email"
							name="email"
							id="email"
						/>
					</Field>
					<button id="sofax-subscription-btn" type="submit">
						Subscribe
					</button>
				</form>
			</div>
			<div className="footer-shapev6">
				<img src={Shape} alt="Shape" />
			</div>
		</div>
	);
}

export default FooterCta;
