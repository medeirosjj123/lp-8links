import Cta from "../../components/home/home-one/cta";
import HeroSection from "../../components/home/home-one/hero";
import Integrations from "../../components/home/home-one/integrations";
import PricePlan from "../../components/home/home-one/price-plan";
import Services from "../../components/home/home-one/services";
import Testimonial from "../../components/home/home-one/testimonial";
import WhyChooseUs from "../../components/home/home-one/why-choose-us";
import SEOHead from "../../components/common/SEOHead";

function HomeOne() {
	return (
		<>
			<SEOHead 
				title="8Links - Backlinks com Inteligência Artificial | Aumente seu Tráfego Orgânico"
				description="Multiplique seu tráfego orgânico com backlinks de qualidade criados por IA. Rede com +1000 sites parceiros, automação completa e resultados garantidos. Comece grátis!"
				keywords="backlinks, SEO, inteligência artificial, tráfego orgânico, link building, marketing digital, posicionamento google, automação SEO"
				url="/"
			/>
			<HeroSection />
			<Services />
			<WhyChooseUs />
			<Testimonial />
			<PricePlan />
			<Integrations />
			<Cta />
		</>
	);
}

export default HomeOne;
