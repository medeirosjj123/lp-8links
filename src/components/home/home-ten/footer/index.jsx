import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/logo/logo-white.svg";
import FooterBottom from "./FooterBottom";

function Footer() {
	return (
		<footer className="sofax-footer-section dark-bg light-color">
			<div className="container">
				<div className="sofax-footer-top">
					<div className="row">
						<div className="col-xl-6 col-md-12">
							<div className="sofax-footer-wrap mr15">
								<Link to="/">
									<img src={Logo} alt="Logo" />
								</Link>
								<p style={{ 
									fontSize: '16px', 
									lineHeight: '1.6',
									marginTop: '20px',
									color: '#fff',
									opacity: '0.9'
								}}>
									Domine os rankings do Google com a tecnologia mais avançada de backlinks do mercado. Nossa IA identifica e distribui links de alta autoridade, garantindo um boost real no seu SEO. Mais de 2.000 sites já aumentaram seu tráfego orgânico com a 8links.
								</p>
							</div>
						</div>
						<div className="col-xl-6 col-md-12">
							<div className="sofax-footer-menu ml-70 light-color">
								<h5>Company</h5>
								<ul>
									<li>
										<Link to="/sobre-nos">Sobre nós</Link>
									</li>
									<li>
										<Link to="/contato">Contato</Link>
									</li>
									<li>
										<Link to="/pricing">Preço</Link>
									</li>
									<li>
										<Link to="/termos-e-condicoes">Termos e Condições</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<FooterBottom />
			</div>
		</footer>
	);
}

export default Footer;
