import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CourseSection from '@/components/CourseSection';
import InstructorSection from '@/components/InstructorSection';
import StudentsSection from '@/components/StudentsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CourseSection />
        <InstructorSection />
        <StudentsSection />
      </main>
    </div>
  );
};

export default Index;
