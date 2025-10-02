import Icon1 from "../../assets/images/contact/icon1.png";
import Icon2 from "../../assets/images/contact/icon2.png";
import Icon3 from "../../assets/images/contact/icon3.png";

function ContactInfo() {
	return (
		<div className="contactus-authore-wrapper">
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<img src={Icon1} alt="Icon chat" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Suporte por Chat</h4>
					<p>Nossa equipe está disponível de segunda a sexta, das 9h às 18h (horário de Brasília) para tirar suas dúvidas sobre backlinks e SEO.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<img src={Icon2} alt="Call icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Fale Conosco</h4>
					<p>Entre em contato pelo WhatsApp (11) 99871-0302. Atendimento de segunda a sexta, das 9h às 18h.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<img src={Icon3} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Email</h4>
					<p>Envie um email para contato@8links.com.br e receba uma resposta em até 24 horas úteis.</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
