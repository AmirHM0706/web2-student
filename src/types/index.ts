export interface Student {
  id: string;
  name: string;
  email: string;
  description: string;
  avatar: string;
  studentId: string;
  skills: string[];
  semester: number;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  instructor: Instructor;
  semester: string;
  credits: number;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  description: string;
  avatar: string;
  email: string;
  expertise: string[];
}