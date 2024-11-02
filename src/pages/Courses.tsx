import { BookOpen } from 'lucide-react';

export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Available Courses</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <BookOpen className="mb-4 h-8 w-8 text-blue-600" />
          <h2 className="mb-2 text-xl font-semibold">Web Development</h2>
          <p className="text-gray-600">Learn modern web development techniques</p>
        </div>
      </div>
    </div>
  );
}