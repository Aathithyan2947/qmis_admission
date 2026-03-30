import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import NewsSection from '@/components/NewsSection';
import JourneySection from '@/components/JourneySection';
import GrowthSection from '@/components/GrowthSection';
import OlympicsSection from '@/components/OlympicsSection';
import KidsGymSection from '@/components/KidsGymSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import BestSchoolSection from '@/components/BestSchoolSection';
import LearningPyramidSection from '@/components/LearningPyramidSection';
import AcademicProgramsSection from '@/components/AcademicProgramsSection';
import AdmissionProcessSection from '@/components/AdmissionProcessSection';
import AlumniSection from '@/components/AlumniSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <NewsSection />
      <JourneySection />
      <GrowthSection />
      <OlympicsSection />
      <KidsGymSection />
      <ShowcaseSection />
      <BestSchoolSection />
      <LearningPyramidSection />
      <AcademicProgramsSection />
      <AdmissionProcessSection />
      <AlumniSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
