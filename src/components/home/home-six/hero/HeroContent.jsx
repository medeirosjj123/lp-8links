import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../../../common/Field";
function HeroConent() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Please! Check Email.");
		reset();
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="sofax-hero-content">
			<ToastContainer position="bottom-right" containerId={"heroToast"} />
			<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
				Your all-in-one CRM platform built success
			</h1>
			<p>
				Transform your business with our intelligent CRM solutions. Drive sales, track leads, automate tasks,
				enhance service, boost efficiency – all in one place.
			</p>
			<div className="sofax-subscription-fieldv6 extra-mt blog-details-subscribe-btn wow fadeInUpX">
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
						Start a 14 days free trail
					</button>
				</form>
				<p>Full access, no credit card required.</p>
			</div>
		</div>
	);
}

export default HeroConent;
