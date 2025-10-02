import { Link } from "react-router-dom";
function HeaderButton() {
	return (
		<div className="header-btn header-three-site-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="header-three-btn" to="/sign-in">
				Login
			</Link>
			<Link className="sofax-default-btn pill sofax-header-btn" data-text="Sign Up Free" to="sign-up">
				<span className="button-wraper">Sign Up Free</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
