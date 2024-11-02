import { useAuthStore } from '@/lib/store';

export default function Dashboard() {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Please log in to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Welcome, {user.name}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">My Courses</h2>
          <p className="text-gray-600">You haven't enrolled in any courses yet.</p>
        </div>
      </div>
    </div>
  );
}