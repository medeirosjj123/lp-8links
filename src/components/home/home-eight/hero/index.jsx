import { useState } from "react";
import Image1 from "../../../../assets/images/v8/image1v8.png";
import Shape1 from "../../../../assets/images/v8/shape1v8.png";
import Shape2 from "../../../../assets/images/v8/shape2v8.png";
import FadeInUp from "../../../animation/FadeInUp";
import HeroContent from "./HeroContent";

function Hero() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className=" section sofax-section-padding4" id="hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<HeroContent />
					</div>
					<div className="col-lg-5">
						<FadeInUp className="sofax-hero-thumb8 position-ralatiove">
							<img src={Image1} alt="Thumb" />
							<div className="sofax-hero-shape-v8">
								<img src={Shape1} alt="Shape" />
							</div>
							<div className="sofax-hero-shape2-v8">
								<img src={Shape2} alt="Shape" />
							</div>
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
