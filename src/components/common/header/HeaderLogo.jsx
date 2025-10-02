import { Link } from "react-router-dom";
import LogoWhite from "../../../assets/images/logo/logo-white.png";

function HeaderLogo() {
	return (
		<div className="sofax-header-logo">
			<Link to="/">
				<img src={LogoWhite} alt="8links" style={{ height: '40px' }} />
			</Link>
		</div>
	);
}

export default HeaderLogo;
