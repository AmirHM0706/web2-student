import { Student } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Edit, Trash2, User, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StudentCardProps {
  student: Student;
  onEdit?: (student: Student) => void;
  onDelete?: (studentId: string) => void;
  showActions?: boolean;
}

const StudentCard = ({ student, onEdit, onDelete, showActions = false }: StudentCardProps) => {
  return (
    <Card className="edu-card group">
      <CardHeader className="text-center">
        <div className="relative mx-auto mb-4">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold persian-text">{student.name}</h3>
        <p className="text-sm text-muted-foreground persian-text">
          شماره دانشجویی: {student.studentId}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span className="text-left" dir="ltr">{student.email}</span>
        </div>
        
        <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span className="persian-text">ترم {student.semester}</span>
        </div>
        
        <p className="text-sm persian-text leading-relaxed text-muted-foreground">
          {student.description}
        </p>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {student.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-2">
        <Link to={`/student/${student.id}`} className="w-full">
          <Button variant="outline" className="w-full persian-text">
            مشاهده جزئیات
          </Button>
        </Link>
        
        {showActions && (
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onEdit?.(student)}
            >
              <Edit className="h-4 w-4 ml-2" />
              ویرایش
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-destructive hover:text-destructive"
              onClick={() => onDelete?.(student.id)}
            >
              <Trash2 className="h-4 w-4 ml-2" />
              حذف
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default StudentCard;