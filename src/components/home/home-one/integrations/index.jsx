import { useState } from "react";
import FadeInUp from "../../../animation/FadeInUp";

function Integrations() {
	const [openIndex, setOpenIndex] = useState(null);

	const faqItems = [
		{
			question: "Quanto custa o serviço?",
			answer: "Nossos planos começam a partir de R$97/mês e incluem todos os recursos necessários para uma estratégia eficaz de link building. Oferecemos diferentes níveis de serviço para atender às necessidades específicas de cada cliente."
		},
		{
			question: "Como sei que vai funcionar?",
			answer: "Já ajudamos mais de 2.000 sites a melhorarem seu posicionamento no Google. Nossa tecnologia é testada e comprovada, e oferecemos uma garantia de 7 dias para você experimentar o serviço sem risco."
		},
		{
			question: "Posso cancelar quando quiser?",
			answer: "Sim! Você tem total liberdade para cancelar sua assinatura a qualquer momento. Não há multas ou taxas de cancelamento, e você mantém todos os backlinks já publicados até o final do período contratado."
		},
		{
			question: "Quanto tempo leva para começar?",
			answer: "Você pode começar imediatamente após a assinatura! Nossa plataforma é totalmente automatizada e você terá acesso instantâneo a todos os recursos. Os backlinks são criados em apenas 2 minutos e 3 cliques, sem complicação."
		},
		{
			question: "Preciso ter conhecimento técnico?",
			answer: "Não! Nossa plataforma foi desenvolvida para ser extremamente simples. Você não precisa de nenhum conhecimento técnico em SEO ou programação. Tudo é automatizado e guiado passo a passo."
		},
		{
			question: "Existe algum risco para meu site?",
			answer: "Absolutamente nenhum! Nossos backlinks são 100% seguros e seguem todas as diretrizes do Google. Não utilizamos técnicas black-hat ou que possam prejudicar seu site. Além disso, você tem controle total sobre onde os links serão publicados."
		},
		{
			question: "Quanto vou gastar com isso?",
			answer: "Você economiza até 90% em comparação com agências tradicionais. Enquanto uma agência cobra em média R$2.000 por mês por um serviço similar, nossa plataforma oferece a mesma qualidade por apenas R$97/mês."
		},
		{
			question: "Por que devo começar agora?",
			answer: "Quanto mais cedo você começar, mais rápido verá resultados. O Google valoriza sites com backlinks consistentes ao longo do tempo. Começando agora, você já estará à frente da concorrência que ainda não investiu em link building."
		},
		{
			question: "Como é o suporte?",
			answer: "Oferecemos suporte prioritário via chat, e-mail e WhatsApp. Nossa equipe está disponível para ajudar você a qualquer momento, garantindo que você aproveite ao máximo a plataforma."
		},
		{
			question: "Posso testar antes de comprar?",
			answer: "Sim! Oferecemos uma garantia de 7 dias sem risco. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Não há perguntas ou burocracia."
		}
	];

	return (
		<>
			<section className="sofax-section-padding2 dark-bg" id="faq">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 text-center mb-5">
							<div className="sofax-default-content light-color">
								<div className="tg-heading-subheading animation-style3">
									<h2>Perguntas Frequentes</h2>
								</div>
								<p>
									Tire suas principais dúvidas sobre nosso serviço de geração automática de backlinks
								</p>
							</div>
						</div>
					</div>
					
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<FadeInUp>
								{faqItems.map((item, index) => (
									<div 
										key={index} 
										className="mb-4"
										style={{
											background: 'rgba(255, 255, 255, 0.05)',
											borderRadius: '8px',
											overflow: 'hidden'
										}}
									>
										<div
											className="p-4"
											onClick={() => setOpenIndex(openIndex === index ? null : index)}
											style={{
												cursor: 'pointer',
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center'
											}}
										>
											<h4 style={{ 
												color: 'white', 
												fontSize: '18px',
												margin: 0,
												fontWeight: '500'
											}}>
												{item.question}
											</h4>
											<span style={{ 
												color: 'white',
												transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
												transition: 'transform 0.3s ease'
											}}>
												▼
											</span>
										</div>
										<div
											style={{
												padding: openIndex === index ? '0 16px 16px' : '0 16px',
												maxHeight: openIndex === index ? '500px' : '0',
												overflow: 'hidden',
												transition: 'all 0.3s ease',
												color: '#ccc'
											}}
										>
											{item.answer}
										</div>
									</div>
								))}
							</FadeInUp>
						</div>
					</div>
				</div>
			</section>

			<section className="sofax-section-padding2" style={{ background: '#FF5C35' }} id="garantia">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 text-center">
							<FadeInUp>
								<div className="sofax-default-content">
									<div className="tg-heading-subheading animation-style3">
										<h2 style={{ color: 'white', marginBottom: '30px' }}>
											Garantia de 7 Dias ou seu Dinheiro de Volta
										</h2>
									</div>
									<div style={{ 
										background: 'rgba(255, 255, 255, 0.1)',
										borderRadius: '16px',
										padding: '40px',
										marginTop: '20px'
									}}>
										<p style={{ 
											color: 'white', 
											fontSize: '18px',
											lineHeight: '1.6',
											marginBottom: '20px'
										}}>
											Confiamos tanto no nosso serviço que oferecemos uma garantia incondicional de 7 dias.
										</p>
										<p style={{ 
											color: 'white', 
											fontSize: '18px',
											lineHeight: '1.6',
											marginBottom: '20px'
										}}>
											Se por qualquer motivo você não ficar satisfeito, basta solicitar o reembolso dentro do período de 7 dias e devolveremos 100% do seu dinheiro.
										</p>
										<p style={{ 
											color: 'white', 
											fontSize: '18px',
											lineHeight: '1.6',
											fontWeight: '600'
										}}>
											Sem perguntas. Sem burocracia. Reembolso integral e imediato.
										</p>
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Integrations;
