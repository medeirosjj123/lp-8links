import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumb1Img from "../../../../assets/images/v1/member1.png";
import Thumb2Img from "../../../../assets/images/v1/member2.png";
import Thumb3Img from "../../../../assets/images/v1/member3.png";
import TestimonialCard from "./TestimonialCard";
//

const testimonialOneData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Incrível! Em apenas 2 meses usando a 8links, conseguimos triplicar nosso tráfego orgânico. A ferramenta é simplesmente genial - você coloca pra rodar e ela faz todo o trabalho pesado. Melhor investimento que já fiz pro meu negócio!",
		author: "Ricardo Silveira",
		designation: "Dono da AgênciaWeb",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Eu gastava uma fortuna com link building manual. Com a 8links, consigo os mesmos resultados por uma fração do custo. O mais impressionante é que a qualidade dos sites é excepcional. Recomendo de olhos fechados!",
		author: "Paulo Santos",
		designation: "Especialista em SEO",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Finalmente uma solução que realmente funciona! Já testei várias ferramentas de backlinks, mas a 8links é outro nível. Em 3 meses, meu site saiu da página 5 para a primeira página do Google. Resultados impressionantes!",
		author: "Carlos Eduardo",
		designation: "Empreendedor Digital",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"A automatização da 8links é fantástica! Enquanto durmo, a IA trabalha construindo backlinks de qualidade. Minha equipe economiza mais de 30 horas por semana que antes gastava com link building manual. Vale cada centavo!",
		author: "Marcos Costa",
		designation: "Gerente de Marketing",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Transformador! Nosso e-commerce cresceu 200% em 4 meses usando a 8links. O mais incrível é a consistência dos resultados - todo mês vemos melhorias no ranking. Sem dúvida, a melhor ferramenta de SEO do mercado!",
		author: "Felipe Mendes",
		designation: "CEO E-commerce",
		img: Thumb2Img,
	},
];

const testimonialTwoData = [
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"  It's an all-in-one solution to that the has turbocharged the growth. The lead generation & capbilities. our partner & result spesk.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "Smith Align",
		designation: "Web Developer",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
	},
];

const swiperSettingsOne = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 4,
		},
	},
};
const swiperSettingsTwo = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 4,
		},
	},
};
function Testimonial() {
	return (
		<section className="sofax-section-padding2" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>Veja o que nossos usuários dizem sobre nós</h2>
					</div>
				</div>
			</div>
			<div className="sofax-testimonial-slider">
				<Swiper {...swiperSettingsOne}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="sofax-testimonial-slider-2">
				<Swiper {...swiperSettingsTwo}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Testimonial;
