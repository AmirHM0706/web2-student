import Navigation from '@/components/Navigation';
import CourseSection from '@/components/CourseSection';
import InstructorSection from '@/components/InstructorSection';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BookOpen, Target, Clock, Award, Code, Users } from 'lucide-react';

const AboutPage = () => {
  const syllabus = [
    {
      week: 1,
      title: "مقدمه‌ای بر React",
      topics: ["مفاهیم پایه React", "JSX", "Components", "Props"]
    },
    {
      week: 2,
      title: "State و Event Handling",
      topics: ["useState Hook", "Event Handlers", "Conditional Rendering"]
    },
    {
      week: 3,
      title: "TypeScript با React",
      topics: ["TypeScript Basics", "Typing Props", "Interface Design"]
    },
    {
      week: 4,
      title: "Hooks پیشرفته",
      topics: ["useEffect", "useContext", "Custom Hooks"]
    },
    {
      week: 5,
      title: "Routing و Navigation",
      topics: ["React Router", "Dynamic Routing", "Protected Routes"]
    },
    {
      week: 6,
      title: "State Management",
      topics: ["Redux Toolkit", "Context API", "Zustand"]
    },
    {
      week: 7,
      title: "API Integration",
      topics: ["Fetch API", "Axios", "Error Handling", "Loading States"]
    },
    {
      week: 8,
      title: "Testing و Deployment",
      topics: ["Jest", "React Testing Library", "Deployment Strategies"]
    }
  ];

  const requirements = [
    "آشنایی با HTML, CSS و JavaScript",
    "درک مفاهیم برنامه‌نویسی شیءگرا",
    "تجربه کار با Git و GitHub",
    "انگیزه یادگیری تکنولوژی‌های جدید"
  ];

  const goals = [
    "تسلط بر React و TypeScript",
    "توانایی ساخت اپلیکیشن‌های پیچیده",
    "آشنایی با بهترین روش‌های توسعه",
    "تجربه کار تیمی در پروژه‌های واقعی"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 persian-text">
              <span className="gradient-text">درباره درس وب ۲</span>
            </h1>
            <p className="text-xl text-muted-foreground persian-text max-w-3xl mx-auto leading-relaxed">
              درسی جامع و عملی برای یادگیری تکنولوژی‌های مدرن توسعه وب با تمرکز بر React، TypeScript و ابزارهای پیشرفته
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <CourseSection />

        {/* Prerequisites & Goals */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Prerequisites */}
              <Card className="edu-card">
                <CardHeader>
                  <h3 className="text-2xl font-bold persian-text flex items-center space-x-2 space-x-reverse">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span>پیش‌نیازهای درس</span>
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-3 space-x-reverse persian-text">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Learning Goals */}
              <Card className="edu-card">
                <CardHeader>
                  <h3 className="text-2xl font-bold persian-text flex items-center space-x-2 space-x-reverse">
                    <Target className="h-6 w-6 text-primary" />
                    <span>اهداف یادگیری</span>
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {goals.map((goal, index) => (
                      <li key={index} className="flex items-start space-x-3 space-x-reverse persian-text">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 persian-text">
                <span className="gradient-text">سرفصل‌های درس</span>
              </h2>
              <p className="text-lg text-muted-foreground persian-text max-w-2xl mx-auto">
                برنامه هفته به هفته درس طی یک ترم تحصیلی
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {syllabus.map((week, index) => (
                <Card 
                  key={week.week} 
                  className="edu-card fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-primary">{week.week}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold persian-text">{week.title}</h4>
                        <p className="text-sm text-muted-foreground persian-text">هفته {week.week}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {week.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                          <Code className="h-3 w-3 text-accent flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <InstructorSection />

        {/* Course Stats */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 persian-text">
                <span className="gradient-text">آمار درس</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary">۴۸</div>
                <div className="text-sm persian-text text-muted-foreground">ساعت درس</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <Code className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-accent">۵+</div>
                <div className="text-sm persian-text text-muted-foreground">پروژه عملی</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary">۶</div>
                <div className="text-sm persian-text text-muted-foreground">دانشجو</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-accent">۳</div>
                <div className="text-sm persian-text text-muted-foreground">واحد درسی</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;