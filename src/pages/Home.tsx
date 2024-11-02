import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Tacdigitals Academy
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Empower your tech journey with expert-led courses and hands-on learning
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
        >
          Start Learning
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <GraduationCap className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">Expert Instructors</h3>
          <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
        </div>

        <div className="rounded-lg border bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">Comprehensive Courses</h3>
          <p className="text-gray-600">Access a wide range of tech courses designed for all skill levels</p>
        </div>

        <div className="rounded-lg border bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">Community Support</h3>
          <p className="text-gray-600">Join a community of learners and get support when you need it</p>
        </div>
      </div>
    </div>
  );
}