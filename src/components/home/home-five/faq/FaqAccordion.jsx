import Icon from "../../../../assets/images/v2/icon9.png";
function FaqAccordion() {
	return (
		<div className="sofax-accordion-section-wrapper">
			<div className="accordion sofax-accordion-section-v2" id="sofax-accordion2">
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
						>
							Como a 8links garante a qualidade dos backlinks?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion2"
					>
						<div className="accordion-body sofax-accordion-body">
							Nossa IA analisa profundamente cada site parceiro, verificando métricas como autoridade de domínio, tráfego orgânico e relevância temática. Só publicamos em sites que atendem a rigorosos critérios de qualidade.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
						>
							Quanto tempo leva para ver resultados?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							Os resultados começam a ficar visíveis assim que os links forem indexados pelo Google, o que geralmente leva entre 10 a 15 dias. Este é o tempo médio que o Google leva para reconhecer e começar a considerar os novos backlinks.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
						>
							Posso escolher onde meus backlinks serão publicados?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							Sim! Você tem total controle sobre onde seus backlinks serão publicados. Nossa plataforma permite que você selecione e gerencie os sites que deseja incluir em sua estratégia de link building.
						</div>
					</div>
				</div>
			</div>
			<div className="accordion sofax-accordion-section-v2 mt-24" id="sofax-accordion3">
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
						>
							É seguro para o SEO do meu site?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseFour"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion3"
					>
						<div className="accordion-body sofax-accordion-body">
							Absolutamente! A 8links segue todas as diretrizes do Google, gerando backlinks naturais através de conteúdo relevante e de qualidade. Não utilizamos técnicas black-hat ou que possam prejudicar seu site.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
						>
							Quanto custa o serviço?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body">
							Nossos planos começam a partir de R$97/mês e incluem todos os recursos necessários para uma estratégia eficaz de link building. Oferecemos diferentes níveis de serviço para atender às necessidades específicas de cada cliente.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSix"
						>
							Posso cancelar quando quiser?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body">
							Sim! Você tem total liberdade para cancelar sua assinatura a qualquer momento. Não há multas ou taxas de cancelamento, e você mantém todos os backlinks já publicados até o final do período contratado.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FaqAccordion;
