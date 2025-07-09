import { useParams, Navigate, Link } from 'react-router-dom';
import { getStudentById } from '@/data/mockData';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Mail, BookOpen, User, Calendar } from 'lucide-react';

const StudentDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/" replace />;
  }

  const student = getStudentById(id);

  if (!student) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold persian-text mb-4">دانشجو یافت نشد</h1>
            <Link to="/">
              <Button className="persian-text">
                <ArrowRight className="h-4 w-4 ml-2" />
                بازگشت به صفحه اصلی
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="persian-text">
              <ArrowRight className="h-4 w-4 ml-2" />
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <Card className="edu-card mb-8">
            <div className="md:flex items-center gap-8 p-8">
              {/* Avatar */}
              <div className="text-center md:text-right mb-6 md:mb-0">
                <div className="relative inline-block">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-right">
                <h1 className="text-3xl font-bold persian-text mb-2">{student.name}</h1>
                <p className="text-lg text-muted-foreground persian-text mb-4">
                  شماره دانشجویی: {student.studentId}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-left" dir="ltr">{student.email}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="persian-text">ترم {student.semester}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Description */}
            <Card className="edu-card">
              <CardHeader>
                <h2 className="text-xl font-semibold persian-text flex items-center space-x-2 space-x-reverse">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>درباره دانشجو</span>
                </h2>
              </CardHeader>
              <CardContent>
                <p className="persian-text leading-relaxed text-muted-foreground">
                  {student.description}
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="edu-card">
              <CardHeader>
                <h2 className="text-xl font-semibold persian-text">مهارت‌ها و تخصص‌ها</h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {student.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                {student.skills.length === 0 && (
                  <p className="text-muted-foreground persian-text">
                    هنوز مهارتی اضافه نشده است.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Academic Info */}
          <Card className="edu-card mt-8">
            <CardHeader>
              <h2 className="text-xl font-semibold persian-text">اطلاعات تحصیلی</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{student.semester}</div>
                  <div className="text-sm persian-text text-muted-foreground">ترم جاری</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent">{student.skills.length}</div>
                  <div className="text-sm persian-text text-muted-foreground">مهارت</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-secondary-foreground">فعال</div>
                  <div className="text-sm persian-text text-muted-foreground">وضعیت</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="edu-card mt-8">
            <CardHeader>
              <h2 className="text-xl font-semibold persian-text">اطلاعات تماس</h2>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold persian-text">ایمیل دانشگاهی</div>
                  <div className="text-muted-foreground text-left" dir="ltr">{student.email}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDetail;