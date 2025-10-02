import ThumbImg from "../../../../assets/images/v3/shape2.png";
import FadeInUp from "../../../animation/FadeInUp";
function HeroThumb() {
	return (
		<FadeInUp className="hero3-thumb">
			<img src={ThumbImg} alt="ThumbImg" />
		</FadeInUp>
	);
}

export default HeroThumb;
