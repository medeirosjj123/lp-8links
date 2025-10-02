import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image5 from "../../../../assets/images/v5/image5.png";
import Shape from "../../../../assets/images/v5/shape5.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: 1,
		rating: 5,
		review: "A 8links revolucionou nossa estratégia de SEO! Em apenas 3 meses, nosso tráfego orgânico aumentou 247% e conquistamos posições no top 3 do Google para palavras-chave importantes. A tecnologia de IA para distribuição de backlinks é realmente impressionante!",
		author: {
			name: "Carlos Silva",
			title: "CEO - E-commerce de Moda",
			image: Image5,
		},
	},
	{
		id: 2,
		rating: 5,
		review: "Depois de anos tentando melhorar nosso SEO sem sucesso, a 8links nos mostrou o caminho certo. Aumentamos nossa autoridade de domínio em 15 pontos e agora estamos recebendo leads qualificados todos os dias. O investimento valeu cada centavo!",
		author: {
			name: "André Oliveira",
			title: "Diretor de Marketing - Agência Digital",
			image: Image5,
		},
	},
	{
		id: 3,
		rating: 5,
		review: "Como agência de marketing, precisávamos de uma solução escalável para nossos clientes. A 8links nos permitiu gerenciar backlinks para mais de 50 sites simultaneamente, com resultados consistentes e relatórios detalhados. Recomendo para qualquer profissional de SEO!",
		author: {
			name: "Ricardo Santos",
			title: "Fundador - Agência de SEO",
			image: Image5,
		},
	},
];

const swiperSettings = {
	slidesPerView: 1,
	loop: true,
	navigation: true,
	modules: [Navigation],
};

function Testimonials() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-xl-7">
						<div className="sofax-default-content sofax-default-contentv5 tac2">
							<div className="tg-heading-subheading animation-style3">
								<h2>O que nossos clientes dizem sobre a 8links</h2>
							</div>
							<p>
								Junte-se a mais de 2.000 sites que já dominaram seus rankings no Google com nossa 
								tecnologia de IA para backlinks. Veja como nossos clientes estão transformando 
								seu tráfego orgânico e conquistando posições de destaque nos resultados de busca.
							</p>
						</div>
					</div>
					<div className="col-xl-5">
						<div className="sofax-testimonial-2column-sliderv5">
							{
								<Swiper {...swiperSettings}>
									{testimonialsData.map((testimonial) => (
										<SwiperSlide key={testimonial.id}>
											<TestimonialCard testimonial={testimonial} />
										</SwiperSlide>
									))}
								</Swiper>
							}
						</div>
					</div>
					<div className="sofax-testimonial-shapev5">
						<img src={Shape} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
