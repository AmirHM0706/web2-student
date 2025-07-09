import { useState } from 'react';
import { students, deleteStudent, addStudent, updateStudent } from '@/data/mockData';
import { Student } from '@/types';
import StudentCard from './StudentCard';
import StudentForm from './StudentForm';
import { Button } from '@/components/ui/button';
import { Plus, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StudentsSection = () => {
  const [studentsList, setStudentsList] = useState(students);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const { toast } = useToast();

  const handleAddStudent = (studentData: Omit<Student, 'id'>) => {
    const newStudent = addStudent(studentData);
    setStudentsList([...students]);
    setIsFormOpen(false);
    toast({
      title: "دانشجوی جدید اضافه شد",
      description: `${newStudent.name} با موفقیت به لیست اضافه شد.`,
    });
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
    setIsFormOpen(true);
  };

  const handleUpdateStudent = (studentData: Omit<Student, 'id'>) => {
    if (editingStudent) {
      updateStudent(editingStudent.id, studentData);
      setStudentsList([...students]);
      setIsFormOpen(false);
      setEditingStudent(null);
      toast({
        title: "اطلاعات دانشجو بروزرسانی شد",
        description: `اطلاعات ${studentData.name} با موفقیت ویرایش شد.`,
      });
    }
  };

  const handleDeleteStudent = (studentId: string) => {
    const student = students.find(s => s.id === studentId);
    if (deleteStudent(studentId)) {
      setStudentsList([...students]);
      toast({
        title: "دانشجو حذف شد",
        description: `${student?.name} از لیست حذف شد.`,
        variant: "destructive",
      });
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingStudent(null);
  };

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4 persian-text">
            <span className="gradient-text">دانشجویان درس</span>
          </h2>
          <p className="text-lg text-muted-foreground persian-text max-w-2xl mx-auto mb-8">
            آشنایی با دانشجویان این درس و مهارت‌های آن‌ها
          </p>
          
          <Button 
            onClick={() => setIsFormOpen(true)}
            className="mb-8 persian-text"
            size="lg"
          >
            <Plus className="h-5 w-5 ml-2" />
            اضافه کردن دانشجوی جدید
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary">{studentsList.length}</div>
            <div className="text-sm persian-text text-muted-foreground">دانشجو</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-accent">
              {Math.round(studentsList.reduce((acc, s) => acc + s.semester, 0) / studentsList.length)}
            </div>
            <div className="text-sm persian-text text-muted-foreground">میانگین ترم</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-primary">
              {studentsList.reduce((acc, s) => acc + s.skills.length, 0)}
            </div>
            <div className="text-sm persian-text text-muted-foreground">مجموع مهارت‌ها</div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentsList.map((student, index) => (
            <div 
              key={student.id} 
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StudentCard
                student={student}
                onEdit={handleEditStudent}
                onDelete={handleDeleteStudent}
                showActions={true}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {studentsList.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-24 w-24 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold persian-text mb-2">هنوز دانشجویی اضافه نشده</h3>
            <p className="text-muted-foreground persian-text mb-4">
              اولین دانشجو را اضافه کنید
            </p>
            <Button onClick={() => setIsFormOpen(true)} className="persian-text">
              <Plus className="h-4 w-4 ml-2" />
              اضافه کردن دانشجو
            </Button>
          </div>
        )}

        {/* Student Form Modal */}
        <StudentForm
          isOpen={isFormOpen}
          onClose={handleFormClose}
          onSubmit={editingStudent ? handleUpdateStudent : handleAddStudent}
          student={editingStudent}
        />
      </div>
    </section>
  );
};

export default StudentsSection;