import UserForm from "@/components/UserForm";
import { X } from "lucide-react";
import Link from "next/link";

const Add = () => {
  return (
    <div className="absolute w-full h-full inset-0 overflow-y-auto py-12 px-7 bg-white">
      <div className="w-full flex justify-end mb-3">
        <Link href="/users">
          <X className="h-7 w-7" />
        </Link>
      </div>
      <div className="text-5xl font-bold mb-3">Add a team member</div>
      <div className="text-gray-400 mb-12">Set email, location, and role.</div>
      <div className="border-t py-3">
        <form>
          <UserForm />
          <div className="flex justify-end mt-12">
            <button type="submit">
              <div className="px-7 py-3 bg-blue-500 text-white rounded-md">
                Save
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
