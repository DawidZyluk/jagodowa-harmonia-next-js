import HeaderSection from "./sections/HeaderSection/HeaderSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import CooperationFormsSection from "./sections/CooperationFormsSection/CooperationFormsSection";
import ReviewsSection from "./sections/ReviewsSection/ReviewsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <CooperationFormsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
