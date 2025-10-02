import { Outlet } from "react-router-dom";
import Footer from "../../home/home-one/footer";
import Header from "../../home/home-one/header/multi-page";
function LayoutOne() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutOne;
