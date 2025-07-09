import { useState } from 'react';
import { students, deleteStudent, addStudent, updateStudent } from '@/data/mockData';
import { Student } from '@/types';
import Navigation from '@/components/Navigation';
import StudentCard from '@/components/StudentCard';
import StudentForm from '@/components/StudentForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Users, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StudentsPage = () => {
  const [studentsList, setStudentsList] = useState(students);
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const { toast } = useToast();

  // Get all unique skills
  const allSkills = Array.from(new Set(studentsList.flatMap(s => s.skills)));

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterStudents(term, skillFilter);
  };

  const handleSkillFilter = (skill: string) => {
    setSkillFilter(skill);
    filterStudents(searchTerm, skill);
  };

  const filterStudents = (search: string, skill: string) => {
    let filtered = studentsList;

    if (search) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase()) ||
        student.description.toLowerCase().includes(search.toLowerCase()) ||
        student.studentId.includes(search)
      );
    }

    if (skill) {
      filtered = filtered.filter(student => student.skills.includes(skill));
    }

    setFilteredStudents(filtered);
  };

  const handleAddStudent = (studentData: Omit<Student, 'id'>) => {
    const newStudent = addStudent(studentData);
    setStudentsList([...students]);
    setFilteredStudents([...students]);
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
      setFilteredStudents([...students]);
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
      setFilteredStudents([...students]);
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

  const clearFilters = () => {
    setSearchTerm('');
    setSkillFilter('');
    setFilteredStudents(studentsList);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 persian-text">
            <span className="gradient-text">مدیریت دانشجویان</span>
          </h1>
          <p className="text-lg text-muted-foreground persian-text max-w-2xl mx-auto mb-8">
            مشاهده، جستجو و مدیریت اطلاعات دانشجویان درس وب ۲
          </p>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="جستجو در نام، ایمیل، توضیحات..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pr-10 persian-text"
            />
          </div>
          
          <select
            value={skillFilter}
            onChange={(e) => handleSkillFilter(e.target.value)}
            className="px-3 py-2 border border-border rounded-md bg-background text-foreground persian-text"
          >
            <option value="">همه مهارت‌ها</option>
            {allSkills.map(skill => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>

          <Button onClick={() => setIsFormOpen(true)} className="persian-text">
            <Plus className="h-4 w-4 ml-2" />
            دانشجوی جدید
          </Button>
        </div>

        {/* Filters Info */}
        {(searchTerm || skillFilter) && (
          <div className="mb-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm persian-text">
                  {filteredStudents.length} دانشجو از {studentsList.length} دانشجو یافت شد
                </span>
                {searchTerm && (
                  <span className="text-sm text-muted-foreground">
                    (جستجو: "{searchTerm}")
                  </span>
                )}
                {skillFilter && (
                  <span className="text-sm text-muted-foreground">
                    (مهارت: {skillFilter})
                  </span>
                )}
              </div>
              <Button variant="outline" size="sm" onClick={clearFilters} className="persian-text">
                پاک کردن فیلترها
              </Button>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{studentsList.length}</div>
            <div className="text-sm persian-text text-muted-foreground">کل دانشجویان</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-2xl font-bold text-accent">{filteredStudents.length}</div>
            <div className="text-sm persian-text text-muted-foreground">نتایج فیلتر</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-2xl font-bold text-primary">
              {Math.round(studentsList.reduce((acc, s) => acc + s.semester, 0) / studentsList.length)}
            </div>
            <div className="text-sm persian-text text-muted-foreground">میانگین ترم</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-2xl font-bold text-accent">{allSkills.length}</div>
            <div className="text-sm persian-text text-muted-foreground">مهارت‌های مختلف</div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student, index) => (
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
        {filteredStudents.length === 0 && studentsList.length > 0 && (
          <div className="text-center py-12">
            <Search className="h-24 w-24 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold persian-text mb-2">نتیجه‌ای یافت نشد</h3>
            <p className="text-muted-foreground persian-text mb-4">
              با کلمات کلیدی دیگری جستجو کنید یا فیلترها را تغییر دهید
            </p>
            <Button onClick={clearFilters} variant="outline" className="persian-text">
              پاک کردن فیلترها
            </Button>
          </div>
        )}

        {filteredStudents.length === 0 && studentsList.length === 0 && (
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
      </main>
    </div>
  );
};

export default StudentsPage;