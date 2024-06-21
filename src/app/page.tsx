// pages/index.tsx
import Image from "next/image";
import AnimatedBanner from "../components/AnimatedBanner";
import CategoryContainer from "@/components/Category";
import ProductSlider from '@/components/productSlider'
import ProductCategoryContainer from "@/components/productCategory";
import CategoryImageContainer from "@/components/ImageSlider";
import Footer from "@/components/Footer"
const Home = () => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Animated Banner Section */}
      <section className="w-full mb-8">
        <AnimatedBanner />
      </section>

      {/* Category Container Section */}
      <section className="w-full mt-40">
        <CategoryContainer />
      </section>

        {/* Product Slider Section */}
        <section className="w-full  mb-2">
        <ProductSlider />
      </section>

         {/* Product Slider Section */}
         <section className="w-full   py-8">
        <ProductCategoryContainer />
      </section>

         {/* Product Slider Section */}
         <div className="w-full   py-4">
        <CategoryImageContainer />
      </div>

      

      
    <div className="w-full">

            <Footer />
    </div>
         
    </main>
  );
};

export default Home;
