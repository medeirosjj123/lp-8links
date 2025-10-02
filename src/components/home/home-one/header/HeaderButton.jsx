import CTAButton from "../../../common/CTAButton";

function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<CTAButton 
				text="Login" 
				to="https://app.8links.com.br"
				className="header-cta"
			/>
		</div>
	);
}

export default HeaderButton;
