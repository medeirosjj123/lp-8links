import Icon1 from "../../../../assets/images/v5/icon1.png";
import Icon2 from "../../../../assets/images/v5/icon2.png";
import Icon3 from "../../../../assets/images/v5/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Automação com IA",
		description:
			"Nossa IA analisa milhões de sites para identificar as melhores oportunidades de backlinks, garantindo qualidade e relevância em cada link gerado.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Resultados Rápidos",
		description:
			"Backlinks criados em apenas 2 minutos e 3 cliques. Resultados visíveis em até 15 dias após a indexação pelo Google.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Segurança Garantida",
		description:
			"Todos os backlinks seguem as diretrizes do Google. Análise profunda de cada site para garantir autoridade e relevância.",
	},
];
function Features() {
	return (
		<section className=" section sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>Por que escolher a 8links?</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} className="col-lg-4 col-md-12" index={index}>
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
