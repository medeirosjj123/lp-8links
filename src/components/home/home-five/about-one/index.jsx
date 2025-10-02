import { Link } from "react-router-dom";
import Thumb from "../../../../assets/images/v5/aboutthumb.png";
import Shape from "../../../../assets/images/v5/shape2.png";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInUp from "../../../animation/FadeInUp";
import AboutCounter from "./Counter";
function AboutOne() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInLeft className="about-thumbv5 mr-80 ">
							<img src={Thumb} alt="Thumb" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>Revolucionando o SEO com IA</h2>
							</div>
							<p>
								A 8links nasceu com a missão de democratizar o acesso a backlinks de qualidade. Utilizamos inteligência artificial para automatizar e otimizar o processo de link building, tornando-o acessível para empresas de todos os tamanhos.
							</p>
							<p>
								Nossa tecnologia analisa milhões de sites para identificar as melhores oportunidades de backlinks, garantindo que cada link gerado tenha o máximo impacto no seu SEO.
							</p>

							<AboutCounter />

							<FadeInUp className="extra-mt tac3">
								<Link 
									className="sofax-default-btn pill" 
									to="/pricing"
									style={{
										background: '#FF5C35',
										color: '#FFFFFF',
										padding: '16px 32px',
										borderRadius: '8px',
										textDecoration: 'none',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: '18px',
										fontWeight: '600',
										transition: 'all 0.3s',
										border: 'none',
										cursor: 'pointer',
										whiteSpace: 'nowrap'
									}}
									onMouseOver={(e) => {
										e.target.style.background = '#e54525';
										e.target.style.color = '#FFFFFF';
									}}
									onMouseOut={(e) => {
										e.target.style.background = '#FF5C35';
										e.target.style.color = '#FFFFFF';
									}}
								>
									Comece Agora
								</Link>
							</FadeInUp>
							<div className="sofax-about-shapev5">
								<img src={Shape} alt="Shape" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutOne;
