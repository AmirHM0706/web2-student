import { useState, useEffect } from 'react';
import { Student } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X, Plus } from 'lucide-react';

interface StudentFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (student: Omit<Student, 'id'>) => void;
  student?: Student | null;
}

const StudentForm = ({ isOpen, onClose, onSubmit, student }: StudentFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    avatar: '',
    studentId: '',
    skills: [] as string[],
    semester: 1
  });
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        email: student.email,
        description: student.description,
        avatar: student.avatar,
        studentId: student.studentId,
        skills: [...student.skills],
        semester: student.semester
      });
    } else {
      setFormData({
        name: '',
        email: '',
        description: '',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        studentId: '',
        skills: [],
        semester: 1
      });
    }
  }, [student, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl persian-text">
            {student ? 'ویرایش اطلاعات دانشجو' : 'اضافه کردن دانشجوی جدید'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="persian-text">نام و نام خانوادگی</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="نام کامل دانشجو"
                required
                className="persian-text"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentId" className="persian-text">شماره دانشجویی</Label>
              <Input
                id="studentId"
                value={formData.studentId}
                onChange={(e) => setFormData(prev => ({ ...prev, studentId: e.target.value }))}
                placeholder="401234567"
                required
                className="text-left"
                dir="ltr"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="persian-text">ایمیل</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="student@university.ac.ir"
              required
              className="text-left"
              dir="ltr"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="semester" className="persian-text">ترم</Label>
              <Input
                id="semester"
                type="number"
                min="1"
                max="8"
                value={formData.semester}
                onChange={(e) => setFormData(prev => ({ ...prev, semester: parseInt(e.target.value) || 1 }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="avatar" className="persian-text">عکس پروفایل (URL)</Label>
              <Input
                id="avatar"
                value={formData.avatar}
                onChange={(e) => setFormData(prev => ({ ...prev, avatar: e.target.value }))}
                placeholder="https://example.com/avatar.jpg"
                className="text-left"
                dir="ltr"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="persian-text">توضیحات</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="توضیحات کوتاهی درباره دانشجو..."
              rows={3}
              required
              className="persian-text"
            />
          </div>

          <div className="space-y-3">
            <Label className="persian-text">مهارت‌ها</Label>
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="مهارت جدید"
                className="flex-1"
              />
              <Button type="button" onClick={addSkill} variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                  {skill}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 hover:bg-transparent"
                    onClick={() => removeSkill(skill)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1 persian-text">
              {student ? 'بروزرسانی' : 'اضافه کردن'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 persian-text">
              انصراف
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StudentForm;