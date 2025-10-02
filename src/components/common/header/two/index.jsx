import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/logo/logo-white.svg";
function HeaderTwo() {
	return (
		<div className="sofax-form-header">
			<div className="container">
				<div className="sofax-form-header-logo">
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HeaderTwo;
