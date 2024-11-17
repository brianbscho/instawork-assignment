import UserForm from "@/components/UserForm";
import { X } from "lucide-react";
import Link from "next/link";

const Edit = () => {
  return (
    <div className="absolute w-full h-full inset-0 overflow-y-auto py-12 px-7 bg-white">
      <div className="w-full flex justify-end mb-3">
        <Link href="/users">
          <X className="h-7 w-7" />
        </Link>
      </div>
      <div className="text-5xl font-bold mb-3">Edit team member</div>
      <div className="text-gray-400 mb-12">
        Edit contact info, location, and role.
      </div>
      <div className="border-t py-3">
        <form>
          <UserForm />
          <div className="flex justify-between mt-12">
            <button>
              <div className="px-7 py-3 text-red-500 rounded-md border border-gray-300">
                Delete
              </div>
            </button>
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

export default Edit;
