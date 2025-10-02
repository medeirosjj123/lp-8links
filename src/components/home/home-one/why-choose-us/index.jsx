import { Link } from "react-router-dom";
import Card from "../../../../assets/images/v1/card.png";
import CheckCircle from "../../../../assets/images/v1/check-circle.png";
import ContentThumb1 from "../../../../assets/images/v1/contentthumb1.png";
import ContentThumb2 from "../../../../assets/images/v1/contentthumb2.png";
import Icon4 from "../../../../assets/images/v1/icon4.png";
import Icon9 from "../../../../assets/images/v1/icon9.png";
import Shape3 from "../../../../assets/images/v1/shape3.png";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";

function WhyChooseUs() {
	return (
		<section className="section sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="sofax-content-img1 position-ralatiove">
							<img src={ContentThumb1} alt="Thumbs" />
							<div className="sofax-content-shape">
								<img src={Shape3} alt="shape" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac ml-50 mb-130 animation-title animation-style3">
							<div className="tg-heading-subheading animation-style3">
								<h2>Backlinks de Alta Qualidade Sem Complicação</h2>
							</div>
							<p>
								Chega de perder tempo e dinheiro com link building manual. Nossa plataforma automatiza todo o processo,
								enquanto você se concentra no crescimento do seu negócio.
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Economia de Tempo e Dinheiro</h4>
										<p>
											Backlinks manuais custam em média R$500 cada e levam semanas para serem publicados. 
											Com a 8links, você tem backlinks ilimitados por uma fração do custo.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Publicação Automática 24/7</h4>
										<p>
											Enquanto a maioria dos SEOs gasta mais de 8 horas por semana tentando conseguir backlinks,
											nossa IA trabalha 24 horas por dia publicando em sites de qualidade.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Resultados Garantidos</h4>
										<p>
											Sites com mais backlinks têm 3x mais chances de estar na primeira página do Google.
											Cada dia sem backlinks é um dia perdido no ranking.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-content-img2 position-ralatiove ml-31">
							<img src={ContentThumb2} alt="Thumbs" />
							<div className="sofax-content-shape-v1">
								<img src={Shape3} alt="shape" />
							</div>
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-80 tac fs-19">
							<div className="tg-heading-subheading animation-style3">
								<h2>A Solução Definitiva em Link Building</h2>
							</div>
							<p>
								A 8links é a primeira plataforma que usa IA para publicar backlinks automaticamente em mais de 80 sites de alta autoridade.
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={Icon9} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Piloto Automático</h4>
										<p>
											Assim como um piloto automático dirige seu carro, nossa IA publica seus backlinks enquanto você foca no que realmente importa.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={Icon4} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Time de SEO Virtual</h4>
										<p>
											É como ter um time de SEO trabalhando para você 24/7, mas sem o custo e a demora de processos manuais.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
