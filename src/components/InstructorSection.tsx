import { instructor } from '@/data/mockData';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Award } from 'lucide-react';

const InstructorSection = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4 persian-text">
            <span className="gradient-text">استاد درس</span>
          </h2>
          <p className="text-lg text-muted-foreground persian-text max-w-2xl mx-auto">
            آشنایی با استاد مجرب و متخصص این درس
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="edu-card overflow-hidden">
            <div className="md:flex">
              {/* Avatar Section */}
              <div className="md:w-1/3 p-8 bg-gradient-to-br from-primary/5 to-accent/5 flex flex-col items-center justify-center">
                <div className="relative mb-6">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center persian-text mb-2">
                  {instructor.name}
                </h3>
                <p className="text-primary font-medium text-center persian-text mb-4">
                  {instructor.title}
                </p>
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="text-left" dir="ltr">{instructor.email}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8">
                <CardHeader className="px-0 pt-0">
                  <h4 className="text-xl font-semibold persian-text mb-4">درباره استاد</h4>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <p className="persian-text leading-relaxed text-muted-foreground">
                    {instructor.description}
                  </p>
                  
                  {/* Expertise */}
                  <div>
                    <h5 className="font-semibold persian-text mb-3">تخصص‌ها:</h5>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-primary/5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center p-4 bg-accent/5 rounded-lg">
                      <div className="text-2xl font-bold text-accent">۱۰+</div>
                      <div className="text-sm persian-text text-muted-foreground">سال تجربه</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">۱۰۰+</div>
                      <div className="text-sm persian-text text-muted-foreground">دانشجوی فارغ‌التحصیل</div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;