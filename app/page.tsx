import BestSellingProducts from "@/components/Bestsellingproducts/BestSellingProducts";
import Header from "@/components/Header/header";
import WhyChooseUs from "@/components/Whychooseus/whychooseus";
import ExperienceWholesale from "@/components/Experience&Wholesale/ExperienceWholesale";
import Testimonials from "@/components/Testimonials/Testimonials";
import CustomizeProducts from "@/components/CustomizeProducts/CustomizeProducts";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <WhyChooseUs/>
      <BestSellingProducts/>
      <ExperienceWholesale/>
      <CustomizeProducts/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
