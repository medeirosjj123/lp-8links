/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ArrowDown from "./ArrowDown";
function NavItem({ dropdown, title, children, url = "", isExternal = false }) {
	const urlFormated = url !== "/" ? `/${url}` : "/";

	return dropdown ? (
		<li className="nav-item nav-item-has-children">
			<span className="nav-link-item drop-trigger" style={{ cursor: 'pointer' }}>
				{title} <ArrowDown />
			</span>
			{children}
		</li>
	) : (
		<li className="nav-item">
			{isExternal ? (
				<a href={url} className="nav-link-item" target="_blank" rel="noopener noreferrer">
					{children}
				</a>
			) : (
				<Link to={urlFormated} className="nav-link-item">
					{children}
				</Link>
			)}
		</li>
	);
}

export default NavItem;
