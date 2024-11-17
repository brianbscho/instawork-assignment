import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <header className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Instawork Full-stack Take-home Assignment
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-medium">
            The project is to implement a simple team-member management
            application that allows the user to view, edit, add, and delete team
            members.
          </p>
        </div>
      </header>

      <main className="flex-grow w-full max-w-3xl mx-auto mt-12 px-4">
        <div className="border-4 border-dashed border-gray-300 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Team Member Management App
          </h2>
          <div className="text-gray-600 text-lg">
            This app consists of 3 pages:
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>List:</strong> View all team members.
              </li>
              <li>
                <strong>Add:</strong> Add a new team member.
              </li>
              <li>
                <strong>Edit:</strong> Edit details of an existing team member.
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <Link href="/users">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 text-lg font-semibold">
                View Team Members
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
