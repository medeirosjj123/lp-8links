import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import Faq from "../../components/home/home-five/faq";
import Testimonials from "../../components/home/home-five/testimonials";
import PricePlan from "../../components/home/home-one/price-plan";
import SEOHead from "../../components/common/SEOHead";

function Pricing() {
	return (
		<>
			<SEOHead 
				title="Preços 8Links - Planos de Backlinks com IA | A partir de R$ 97/mês"
				description="Escolha o plano ideal para seu negócio. Backlinks ilimitados, rede com +1000 sites, automação por IA. Planos a partir de R$ 97/mês. Teste grátis!"
				keywords="preços backlinks, planos SEO, custo link building, preço automação SEO, planos 8links"
				url="/pricing"
			/>
			<BreadCrumb title="Preço" />
			<PricePlan />
			<AutoSlider />
			<Testimonials />
			<Faq />
		</>
	);
}

export default Pricing;
