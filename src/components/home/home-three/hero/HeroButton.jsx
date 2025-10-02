import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import Shape1 from "../../../../assets/images/v3/shape1.png";
import PlayBtn from "../../../../assets/images/v3/videoplay.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";

function HeroButton() {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="6mttwIBcig0"
				onClose={() => setOpen(false)}
			/>

			<FadeInStaggerTwo className="sofax-hero-btn-wrap">
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill" data-text="Start Free Trail" to="/contact-us">
						<span className="button-wraper">Start Free Trail</span>
					</Link>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<button className="sofax-popup-video video-init" onClick={() => setOpen(true)}>
						<img src={PlayBtn} alt="Play Btn" />
						Watch A Demo
					</button>
					<div className="hero3-shape">
						<img src={Shape1} alt="Shape1" />
					</div>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</>
	);
}

export default HeroButton;
