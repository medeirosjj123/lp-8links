import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";

function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const submitForm = (formData) => {
		toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
		reset();
		console.log("Form Data = ", formData);
	};

	return (
		<div className="sofax-field-box ml-50">
			<ToastContainer position="bottom-right" />
			<h3>Envie sua mensagem</h3>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label="Seu Nome" error={errors.name}>
								<input
									{...register("name", { required: "Nome é obrigatório." })}
									type="text"
									name="name"
									id="name"
									placeholder="Digite seu nome completo"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label="Email" error={errors.email}>
								<input
									{...register("email", { 
										required: "Email é obrigatório.",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Email inválido"
										}
									})}
									type="email"
									name="email"
									id="email"
									placeholder="seu@email.com"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-main-field">
							<Field label="Assunto" error={errors.subject}>
								<input
									{...register("subject", { required: "Assunto é obrigatório." })}
									type="text"
									name="subject"
									id="subject"
									placeholder="Qual o motivo do seu contato?"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-main-field">
							<Field label="Mensagem" error={errors.message}>
								<textarea 
									{...register("message", { required: "Mensagem é obrigatória." })}
									name="message" 
									id="message"
									placeholder="Como podemos ajudar você?"
								></textarea>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-form-box">
							<input 
								type="checkbox" 
								id="privacy" 
								{...register("privacy", { required: "Você precisa aceitar a política de privacidade." })}
							/>
							<label htmlFor="privacy">
								Li e concordo com a <a href="/politica-de-privacidade">política de privacidade</a>.
							</label>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tac">
							<button id="sofax-submit-btn" className="mt-30" type="submit">
								Enviar Mensagem
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
