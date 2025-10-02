import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";

import Logo from "../../../../assets/images/logo/logo-dark.svg";
import AppleStore from "../../../../assets/images/v1/app-store.png";
import PLayStore from "../../../../assets/images/v1/play-store.png";

function Footer() {
	return (
		<footer className="sofax-footer-section">
			<div className="container">
				<div className="sofax-footer-top">
					<div className="row">
						<div className="col-xl-6 col-md-12">
							<div className="sofax-footer-wrap mr-15">
								<Link to="/">
									<img src={Logo} alt="Logo" />
								</Link>
								<p style={{ 
									fontSize: '16px', 
									lineHeight: '1.6',
									marginTop: '20px',
									color: '#333'
								}}>
									Domine os rankings do Google com a tecnologia mais avançada de backlinks do mercado. Nossa IA identifica e distribui links de alta autoridade, garantindo um boost real no seu SEO. Mais de 2.000 sites já aumentaram seu tráfego orgânico com a 8links.
								</p>
								<div className="sofax-social-icon">
									<ul>
										<li>
											<a target="_blank" href="https://www.twitter.com/">
												<svg
													width="17"
													height="18"
													viewBox="0 0 17 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M9.96447 7.24539L16.1975 0H14.7205L9.30833 6.29107L4.98567 0H0L6.5367 9.51321L0 17.1111H1.47711L7.19246 10.4675L11.7575 17.1111H16.7432L9.9641 7.24539H9.96447ZM7.94136 9.59702L7.27906 8.64972L2.00933 1.11194H4.27809L8.53082 7.19517L9.19312 8.14247L14.7212 16.0497H12.4524L7.94136 9.59739V9.59702Z"
														fill="#0E0E0E"
													/>
												</svg>
											</a>
										</li>
										<li>
											<a href="https://www.facebook.com/" target="_blank">
												<svg
													width="11"
													height="18"
													viewBox="0 0 11 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M9.88663 0.00357362L7.65153 0C5.14046 0 3.5177 1.65905 3.5177 4.22688V6.17575H1.27039C1.0762 6.17575 0.918945 6.33263 0.918945 6.52614V9.34984C0.918945 9.54335 1.07638 9.70005 1.27039 9.70005H3.5177V16.8251C3.5177 17.0187 3.67495 17.1754 3.86914 17.1754H6.80123C6.99543 17.1754 7.15268 17.0185 7.15268 16.8251V9.70005H9.7803C9.9745 9.70005 10.1318 9.54335 10.1318 9.34984L10.1328 6.52614C10.1328 6.43323 10.0957 6.34425 10.0299 6.27849C9.9641 6.21274 9.87444 6.17575 9.7812 6.17575H7.15268V4.52367C7.15268 3.72961 7.34257 3.3265 8.3806 3.3265L9.88627 3.32597C10.0803 3.32597 10.2375 3.16909 10.2375 2.97575V0.353788C10.2375 0.160634 10.0805 0.00393098 9.88663 0.00357362Z"
														fill="#0E0E0E"
													/>
												</svg>
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/" target="_blank">
												<svg
													width="18"
													height="17"
													viewBox="0 0 18 17"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M12.043 0H5.9475C3.14256 0 0.86792 2.26664 0.86792 5.06173V11.1358C0.86792 13.9309 3.14256 16.1975 5.9475 16.1975H12.043C14.8479 16.1975 17.1226 13.9309 17.1226 11.1358V5.06173C17.1226 2.26664 14.8479 0 12.043 0ZM15.5987 11.1358C15.5987 13.0896 14.0037 14.679 12.043 14.679H5.9475C3.98678 14.679 2.39179 13.0896 2.39179 11.1358V5.06173C2.39179 3.1079 3.98678 1.51852 5.9475 1.51852H12.043C14.0037 1.51852 15.5987 3.1079 15.5987 5.06173V11.1358Z"
														fill="#0E0E0E"
													/>
													<path
														d="M9.00312 4.05713C6.75896 4.05713 4.93945 5.87024 4.93945 8.10651C4.93945 10.3428 6.75896 12.1559 9.00312 12.1559C11.2473 12.1559 13.0668 10.3428 13.0668 8.10651C13.0668 5.87024 11.2473 4.05713 9.00312 4.05713ZM9.00312 10.6374C7.60319 10.6374 6.46333 9.50153 6.46333 8.10651C6.46333 6.71049 7.60319 5.57565 9.00312 5.57565C10.4031 5.57565 11.5429 6.71049 11.5429 8.10651C11.5429 9.50153 10.4031 10.6374 9.00312 10.6374Z"
														fill="#0E0E0E"
													/>
													<path
														d="M13.3527 4.29821C13.653 4.29821 13.8964 4.05602 13.8964 3.75726C13.8964 3.4585 13.653 3.21631 13.3527 3.21631C13.0525 3.21631 12.8091 3.4585 12.8091 3.75726C12.8091 4.05602 13.0525 4.29821 13.3527 4.29821Z"
														fill="#0E0E0E"
													/>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-md-12">
							<div className="sofax-footer-menu ml-100 sofax-footer-active">
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
				<CopyRight />
			</div>
		</footer>
	);
}

export default Footer;
