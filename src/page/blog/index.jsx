import Blog from "../../components/blog-page";
import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";

function BlogPage() {
	return (
		<>
			<BreadCrumb title="Blog" />
			<Blog />
			<AutoSlider />
		</>
	);
}

export default BlogPage;
