import Icon1 from "../../../../assets/images/v1/icon1.png";
import Icon2 from "../../../../assets/images/v1/icon2.png";
import Icon3 from "../../../../assets/images/v1/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Publicação Automática",
		description:
			"Nossa IA publica backlinks automaticamente em sites com DA 25+, enquanto você se concentra no que realmente importa para seu negócio.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Sites de Alta Autoridade",
		description:
			"Acesso a mais de 80 sites de alta qualidade para publicação de backlinks, garantindo autoridade e relevância para seu domínio.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Resultados Comprovados",
		description:
			"Aumento médio de 300% no tráfego orgânico dos nossos clientes, com mais de 2.000 sites já atendidos e 30K+ backlinks gerados.",
	},
];

function Services() {
	return (
		<div className="section sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title max-width-770">
					<div className="row">
						<div className="col-xl-12 col-lg-12">
							<div className="tg-heading-subheading animation-style3">
								<h2>A solução definitiva para seus backlinks</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					{servicesData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-xl-4 col-md-6">
							<ServiceCard service={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
