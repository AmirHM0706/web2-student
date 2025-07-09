import { Student, Course, Instructor } from '../types';

export const instructor: Instructor = {
  id: "1",
  name: "دکتر علی احمدی",
  title: "استاد دانشکده کامپیوتر",
  description: "استاد مجرب در زمینه توسعه وب و برنامه‌نویسی فرانت‌اند با بیش از ۱۰ سال تجربه تدریس. متخصص در React، JavaScript و تکنولوژی‌های مدرن وب.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  email: "a.ahmadi@university.ac.ir",
  expertise: ["React", "JavaScript", "Node.js", "Web Development", "UI/UX"]
};

export const course: Course = {
  id: "1",
  name: "وب ۲",
  description: "این درس به آموزش مفاهیم پیشرفته توسعه وب می‌پردازد. دانشجویان با React، TypeScript، و تکنولوژی‌های مدرن فرانت‌اند آشنا می‌شوند و پروژه‌های عملی انجام می‌دهند.",
  instructor,
  semester: "پاییز ۱۴۰۳",
  credits: 3
};

export let students: Student[] = [
  {
    id: "1",
    name: "سارا کریمی",
    email: "s.karimi@student.ac.ir",
    description: "دانشجوی علاقه‌مند به توسعه فرانت‌اند و طراحی UI/UX. تجربه کار با React و JavaScript دارد.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c19a2e75?w=150&h=150&fit=crop&crop=face",
    studentId: "401234567",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    semester: 6
  },
  {
    id: "2",
    name: "محمد رضایی",
    email: "m.rezaei@student.ac.ir",
    description: "برنامه‌نویس با تجربه در زمینه بک‌اند و علاقه‌مند به یادگیری تکنولوژی‌های فرانت‌اند.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    studentId: "401234568",
    skills: ["Node.js", "Python", "JavaScript", "React"],
    semester: 6
  },
  {
    id: "3",
    name: "فاطمه نوری",
    email: "f.nouri@student.ac.ir",
    description: "دانشجوی کارشناسی کامپیوتر با علاقه ویژه به توسعه وب و طراحی رابط کاربری.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    studentId: "401234569",
    skills: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    semester: 5
  },
  {
    id: "4",
    name: "علی محمدی",
    email: "a.mohammadi@student.ac.ir",
    description: "دانشجوی فعال در پروژه‌های متن‌باز و علاقه‌مند به تکنولوژی‌های جدید وب.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    studentId: "401234570",
    skills: ["Vue.js", "React", "JavaScript", "Git"],
    semester: 7
  },
  {
    id: "5",
    name: "زهرا حسینی",
    email: "z.hosseini@student.ac.ir",
    description: "دانشجوی کارشناسی ارشد با تجربه در توسعه اپلیکیشن‌های وب پیچیده.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    studentId: "401234571",
    skills: ["React", "Redux", "TypeScript", "GraphQL"],
    semester: 8
  },
  {
    id: "6",
    name: "حسین صادقی",
    email: "h.sadeghi@student.ac.ir",
    description: "دانشجوی علاقه‌مند به هوش مصنوعی و کاربرد آن در توسعه وب.",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    studentId: "401234572",
    skills: ["Python", "React", "Machine Learning", "JavaScript"],
    semester: 6
  }
];

// Functions to manage students data
export const addStudent = (student: Omit<Student, 'id'>): Student => {
  const newStudent: Student = {
    ...student,
    id: Date.now().toString()
  };
  students.push(newStudent);
  return newStudent;
};

export const updateStudent = (id: string, updates: Partial<Student>): Student | null => {
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updates };
    return students[index];
  }
  return null;
};

export const deleteStudent = (id: string): boolean => {
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    return true;
  }
  return false;
};

export const getStudentById = (id: string): Student | null => {
  return students.find(s => s.id === id) || null;
};