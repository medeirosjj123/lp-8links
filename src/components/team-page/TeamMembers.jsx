import image1 from "../../assets/images/about/image1.png";
import image2 from "../../assets/images/about/image2.png";
import image3 from "../../assets/images/about/image3.png";
import image4 from "../../assets/images/about/image4.png";
import image5 from "../../assets/images/about/image5.png";
import image6 from "../../assets/images/about/image6.png";
import image7 from "../../assets/images/about/image7.png";
import image8 from "../../assets/images/about/image8.png";
import FadeInStagger from "../animation/FadeInStagger";
import SingleTeamMember from "./SingleTeamMember";
import TeamCarousel from "./TeamCarousel";

const teamMembers = [
	[
		{
			id: crypto.randomUUID(),
			name: "Bruno Medeiros",
			title: "Founder & Especialista em SEO",
			image: image1,
			className: "sofax-team-member-aboutus",
		},
		{
			id: crypto.randomUUID(),
			name: "Experiência Global",
			title: "15+ anos em SEO",
			image: image5,
			className: "",
		},
	],

	[
		{
			id: crypto.randomUUID(),
			name: "Autor Best-Seller",
			title: "Smart Hat: Guia prático completo de SEO",
			image: image2,
			className: "",
		},
		{
			id: crypto.randomUUID(),
			name: "Educador Digital",
			title: "2.000+ vídeos no YouTube",
			image: image6,
			className: "",
		},
	],
	[
		{
			id: crypto.randomUUID(),
			name: "Willemor Smilty",
			title: "Chief Strategy Officer",
			image: image3,
			className: "sofax-team-member-aboutus",
		},
		{
			id: crypto.randomUUID(),
			name: "Ferroliam Centrl",
			title: "Creative director",
			image: image7,
			className: "",
		},
	],
	[
		{
			id: crypto.randomUUID(),
			name: "Amillen Canver",
			title: "Director of HR",
			image: image4,
			className: "",
		},
		{
			id: crypto.randomUUID(),
			name: "Jovenners Willom",
			title: "Market researcher",
			image: image8,
			className: "",
		},
	],
];

function TeamMembers() {
	return (
		<section className="section sofax-section-padding">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<h2>Nosso Fundador</h2>
						</div>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="sofax-aboutus-content-text our-teaminner">
							<p>
								Bruno Medeiros é especialista em SEO há mais de 15 anos. Residiu em Chiang Mai, 
								capital mundial do SEO, e participou dos maiores eventos do setor como SEO Estonia, 
								SEO Conference e SEO Mastery Summit. Autor best-seller e criador do maior canal de 
								SEO no YouTube com mais de 2.000 publicações.
							</p>
							<div className="team-highlights">
								<div className="highlight-item">
									<h4>15+ Anos de Experiência</h4>
									<p>Especialista em SEO e Link Building</p>
								</div>
								<div className="highlight-item">
									<h4>Autor Best-Seller</h4>
									<p>Smart Hat: Guia prático completo de SEO</p>
								</div>
								<div className="highlight-item">
									<h4>Educador Digital</h4>
									<p>2.000+ vídeos no YouTube sobre SEO</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<TeamCarousel />
					</div>
				</div>
				<style jsx>{`
					.team-highlights {
						margin-top: 2rem;
					}
					.highlight-item {
						margin-bottom: 1.5rem;
					}
					.highlight-item h4 {
						color: var(--primary-color);
						margin-bottom: 0.5rem;
					}
					.highlight-item p {
						margin-bottom: 0;
						color: var(--text-color);
					}
				`}</style>
			</div>
		</section>
	);
}

export default TeamMembers;
