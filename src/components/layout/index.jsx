import { Outlet } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import ScrollToTop from "../common/ScrollToTop";
import GoogleAnalytics from "../common/GoogleAnalytics";
import FacebookPixel from "../common/FacebookPixel";

function Layout() {
	useScrollTop();
	return (
		<>
			<GoogleAnalytics />
			<FacebookPixel />
			<Outlet />
			<ScrollToTop />
		</>
	);
}

export default Layout;
