import { course } from '@/data/mockData';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BookOpen, Clock, Users, Target, Code, Laptop } from 'lucide-react';

const CourseSection = () => {
  const features = [
    {
      icon: Code,
      title: "React & TypeScript",
      description: "یادگیری React با TypeScript برای توسعه اپلیکیشن‌های مقیاس‌پذیر"
    },
    {
      icon: Laptop,
      title: "پروژه‌های عملی",
      description: "پیاده‌سازی پروژه‌های واقعی و کاربردی در طول ترم"
    },
    {
      icon: Target,
      title: "مهارت‌های مدرن",
      description: "آشنایی با ابزارها و تکنولوژی‌های روز دنیا"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4 persian-text">
            <span className="gradient-text">درباره درس {course.name}</span>
          </h2>
          <p className="text-lg text-muted-foreground persian-text max-w-2xl mx-auto">
            آشنایی با محتوا و اهداف این درس
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Course Info */}
          <div className="space-y-8">
            <Card className="edu-card">
              <CardHeader>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold persian-text">{course.name}</h3>
                    <p className="text-muted-foreground persian-text">{course.semester}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="persian-text leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold persian-text">{course.credits} واحد</div>
                      <div className="text-sm text-muted-foreground persian-text">تعداد واحد</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold persian-text">۶ نفر</div>
                      <div className="text-sm text-muted-foreground persian-text">دانشجو</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Objectives */}
            <Card className="edu-card">
              <CardHeader>
                <h4 className="text-xl font-semibold persian-text">اهداف درس</h4>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 persian-text">
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>یادگیری مفاهیم پیشرفته React و TypeScript</span>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>آشنایی با ابزارهای مدرن توسعه وب</span>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>پیاده‌سازی پروژه‌های عملی و کاربردی</span>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>کار تیمی و مدیریت پروژه با Git</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="edu-card transform transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold mb-2 persian-text">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground persian-text leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;