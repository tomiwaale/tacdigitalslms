import { Link } from 'react-router-dom';
import { useAuthStore } from '@/lib/store';
import { BookOpen, User } from 'lucide-react';

export function Navigation() {
  const { user } = useAuthStore();

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">Tacdigitals Academy</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/courses" className="text-gray-700 hover:text-blue-600">
            Courses
          </Link>
          {user ? (
            <Link to="/dashboard" className="flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2">
              <User className="h-5 w-5" />
              <span>{user.name}</span>
            </Link>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}