import { useState } from "react";
import Icon5 from "../../../../assets/images/v1/icon5.png";
import Icon6 from "../../../../assets/images/v1/icon6.png";
import Icon7 from "../../../../assets/images/v1/icon7.png";
import featureIcon from "../../../../assets/images/v1/icon8.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import PricingCard from "./PricingCard";

const pricePlanData = [
	{
		id: crypto.randomUUID(),
		plan: "Empreendedor",
		tagline: "O kit completo para ranquear seu primeiro site",
		price: [
			{ id: 1, value: 997 },
			{ id: 2, value: 97 },
		],
		img: Icon7,
		features: [
			"✅ Raio-X da Concorrência (ILIMITADO)",
			"✅ Gerador de Keywords Lucrativas (ILIMITADO)",
			"✅ Piloto Automático de Backlinks 24/7",
			"✅ Dashboard de Acompanhamento",
			"✅ Área de Membros",
			"1 Site Gerenciado",
			"📧 Suporte por Email (24h)",
			"Garantia de 7 Dias",
			"Sem Taxa de Setup"
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		plan: "Profissional",
		tagline: "Mais escala e suporte ágil para acelerar seus projetos",
		price: [
			{ id: 1, value: 1997 },
			{ id: 2, value: 197 },
		],
		img: Icon5,
		features: [
			"✅ Raio-X da Concorrência (ILIMITADO)",
			"✅ Gerador de Keywords Lucrativas (ILIMITADO)",
			"✅ Piloto Automático de Backlinks 24/7",
			"✅ Dashboard de Acompanhamento",
			"✅ Área de Membros",
			"5 Sites Gerenciados",
			"💬 Suporte Prioritário WhatsApp (2h)",
			"Garantia de 7 Dias",
			"Sem Taxa de Setup",
			"2 Meses Grátis no Plano Anual"
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		plan: "Agência",
		tagline: "Máxima escala para agências e donos de portfólios",
		price: [
			{ id: 1, value: 3997 },
			{ id: 2, value: 397 },
		],
		img: Icon6,
		features: [
			"✅ Raio-X da Concorrência (ILIMITADO)",
			"✅ Gerador de Keywords Lucrativas (ILIMITADO)",
			"✅ Piloto Automático de Backlinks 24/7",
			"✅ Dashboard de Acompanhamento",
			"✅ Área de Membros",
			"10 Sites Gerenciados",
			"💬 Suporte Prioritário WhatsApp (1h)",
			"Prioridade na Fila de Publicação",
			"Garantia de 7 Dias",
			"2 Meses Grátis no Plano Anual"
		],
		featureIcon,
		highlighted: false,
	},
];

function PricePlan() {
	const frequencies = [
		{ id: 1, label: "Por Ano" },
		{ id: 2, label: "Por Mês" },
	];

	const [frequency, setFrequency] = useState(frequencies[1]);

	function handleChange(e) {
		if (e.target.checked) {
			setFrequency(frequencies[1]);
		} else {
			setFrequency(frequencies[0]);
		}
	}

	return (
		<section className="section sofax-section-padding bg-light" id="pricing">
			<div className="container">
				<div className="sofax-section-title center pb-50">
					<div className="tg-heading-subheading animation-style3">
						<h2>Escolha o Plano Ideal para Você</h2>
					</div>
				</div>

				<div className="pricing-btn">
					<label>Por Mês</label>
					<div className="toggle-btn">
						<input
							className="form-check-input btn-toggle price-deck-trigger"
							type="checkbox"
							defaultChecked={true}
							onChange={handleChange}
						/>
					</div>
					<label>Por Ano</label>
				</div>

				<div className="row" id="table-price-value">
					{pricePlanData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-xl-4 col-md-6">
							<PricingCard pricing={pricing} frequency={frequency} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default PricePlan;
