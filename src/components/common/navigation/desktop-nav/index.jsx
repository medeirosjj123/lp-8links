import DesktopNav from "./DesktopNav";
import NavItem from "./NavItem";

function DesktopMenu() {
	return (
		<DesktopNav>
			<NavItem url="/">
				<span 
					style={{ 
						color: '#000000', 
						textDecoration: 'none',
						transition: 'transform 0.3s ease',
						display: 'inline-block'
					}}
					onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
					onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
				>
					Home
				</span>
			</NavItem>
			<NavItem url="sobre-nos">
				<span 
					style={{ 
						color: '#000000', 
						textDecoration: 'none',
						transition: 'transform 0.3s ease',
						display: 'inline-block'
					}}
					onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
					onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
				>
					Sobre Nós
				</span>
			</NavItem>
			<NavItem url="contact-us">
				<span 
					style={{ 
						color: '#000000', 
						textDecoration: 'none',
						transition: 'transform 0.3s ease',
						display: 'inline-block'
					}}
					onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
					onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
				>
					Contato
				</span>
			</NavItem>
			<NavItem url="pricing">
				<span 
					style={{ 
						color: '#000000', 
						textDecoration: 'none',
						transition: 'transform 0.3s ease',
						display: 'inline-block'
					}}
					onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
					onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
				>
					Preço
				</span>
			</NavItem>
			<NavItem url="https://app.8links.com.br" isExternal={true}>
				<span 
					style={{ 
						color: '#000000', 
						textDecoration: 'none',
						transition: 'transform 0.3s ease',
						display: 'inline-block'
					}}
					onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
					onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
				>
					Login
				</span>
			</NavItem>
			<NavItem url="suporte">
				<span 
					style={{ 
						color: '#000000', 
						textDecoration: 'none',
						transition: 'transform 0.3s ease',
						display: 'inline-block'
					}}
					onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
					onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
				>
					Suporte
				</span>
			</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
