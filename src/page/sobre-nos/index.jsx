import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import AboutOne from "../../components/home/home-five/about-one";
import Faq from "../../components/home/home-five/faq";
import Features from "../../components/home/home-five/features";
import TeamMembers from "../../components/team-page/TeamMembers";

// Teams images

function AboutUs() {
	return (
		<>
			<BreadCrumb title="Sobre Nós" />
			<Features />
			<AboutOne />
			<TeamMembers />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default AboutUs;
