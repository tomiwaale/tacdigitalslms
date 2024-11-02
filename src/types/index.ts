export type User = {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
  bio?: string;
  createdAt: Date;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructorId: string;
  price: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  modules: Module[];
  enrolledStudents: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
};

export type Lesson = {
  id: string;
  title: string;
  content: string;
  type: 'video' | 'text' | 'quiz';
  duration: number;
  order: number;
  resources?: Resource[];
};

export type Resource = {
  id: string;
  title: string;
  type: 'pdf' | 'doc' | 'video' | 'link';
  url: string;
};

export type Progress = {
  userId: string;
  courseId: string;
  completedLessons: string[];
  quizScores: Record<string, number>;
  lastAccessed: Date;
  certificateIssued: boolean;
};