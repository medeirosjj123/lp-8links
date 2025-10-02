import { useState } from "react";
import ModalVideo from "react-modal-video";
import Thumb from "../../../../assets/images/v5/aboutthumb.png";
import Icon6 from "../../../../assets/images/v5/icon6.png";
import Icon7 from "../../../../assets/images/v5/icon7.png";
import FadeInUp from "../../../animation/FadeInUp";
function HeroVideo() {
	const [isOpen, setOpen] = useState(false);
	return (
		<FadeInUp className="hero5-thumb">
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="zE_WFiHnSlY"
				onClose={() => setOpen(false)}
			/>
			<img src={Thumb} alt="Thumb" />
			<div className="play-btn-wrap">
				<button className="sofax-popup-video2 video-init" onClick={() => setOpen(true)}>
					<img src={Icon7} alt="icon" />
				</button>

				<img className="play-btn-img" onClick={() => setOpen(true)} src={Icon6} alt="Icon" />
			</div>
		</FadeInUp>
	);
}

export default HeroVideo;
