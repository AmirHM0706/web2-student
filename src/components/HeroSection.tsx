import { Button } from '@/components/ui/button';
import { BookOpen, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-right fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 persian-text">
              <span className="gradient-text">درس وب ۲</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 persian-text leading-relaxed">
              یادگیری تکنولوژی‌های مدرن توسعه وب با React، TypeScript و ابزارهای پیشرفته. 
              پروژه‌های عملی و تجربه واقعی در توسعه اپلیکیشن‌های وب.
            </p>
            
            {/* Course Stats */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-8">
              <div className="flex items-center space-x-2 space-x-reverse text-primary">
                <BookOpen className="h-5 w-5" />
                <span className="persian-text">۳ واحد</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-primary">
                <Users className="h-5 w-5" />
                <span className="persian-text">۶ دانشجو</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-primary">
                <Clock className="h-5 w-5" />
                <span className="persian-text">پاییز ۱۴۰۳</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/students">
                <Button size="lg" className="w-full sm:w-auto persian-text">
                  مشاهده دانشجویان
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto persian-text">
                  درباره درس
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-primary/10 flex items-center justify-center float-animation">
                <div className="w-60 h-60 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-primary/30 flex items-center justify-center">
                    <BookOpen className="h-20 w-20 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg float-animation" style={{animationDelay: '1s'}}>
                <span className="text-white font-bold">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg float-animation" style={{animationDelay: '2s'}}>
                <span className="text-white font-bold">JS</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-secondary border-2 border-primary rounded-full flex items-center justify-center shadow-lg float-animation" style={{animationDelay: '0.5s'}}>
                <span className="text-primary font-bold text-sm">TS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;