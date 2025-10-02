import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/index.jsx";
import LayoutEleven from "../components/layout/multi-page/LayoutEleven.jsx";
import ErrorPage from "../error-page.jsx";
import AboutUs from "../page/sobre-nos/index.jsx";
import BlogPage from "../page/blog/index.jsx";
import SingleBlogPage from "../page/blog/SingleBlog.jsx";
import ContactUs from "../page/contact-us/index.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import Pricing from "../page/pricing/index.jsx";
import TermsAndConditionPage from "../page/utility/TermsAndCondition.jsx";
import CheckoutSuccess from "../page/checkout/Success.jsx";
import Suporte from "../page/suporte/index.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutEleven />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "sobre-nos",
						element: <AboutUs />,
					},
					{
						path: "contact-us",
						element: <ContactUs />,
					},
					{
						path: "terms-and-condition",
						element: <TermsAndConditionPage />,
					},
					{
						path: "error-page",
						element: <ErrorPage />,
					},
					{
						path: "pricing",
						element: <Pricing />,
					},
					{
						path: "blog",
						element: <BlogPage />,
					},
					{
						path: "single-blog",
						element: <SingleBlogPage />,
					},
					{
						path: "sucesso",
						element: <CheckoutSuccess />,
					},
					{
						path: "suporte",
						element: <Suporte />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			},
		],
	},
]);
