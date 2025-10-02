import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import DesktopMenu from "../navigation/desktop-nav";
import MobileNavbar from "../navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "../navigation/mobile-nav/menuItemsData";
import logoImage from "../../../assets/images/logo/logo-white.png";

function Header() {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`site-header sofax-header-section site-header--menu-center ${isSticky ? "sticky" : ""} bg-white`}>
			<div className="container">
				<nav className="navbar site-navbar">
					<div className="brand-logo">
						<Link to="/">
							<img 
								src={logoImage} 
								alt="8links" 
								style={{ 
									width: '180px',
									height: '100px',
									objectFit: 'contain',
									marginTop: '5px',
									marginBottom: '5px'
								}} 
							/>
						</Link>
					</div>
					<div className="menu-block-wrapper">
						<DesktopMenu />
						<MobileNavbar 
							menuItemsData={menuItemsData} 
							title="8links" 
							onePage={false} 
						/>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
