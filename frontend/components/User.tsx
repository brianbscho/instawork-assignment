import { UserCircle2 } from "lucide-react";
import Link from "next/link";

type UserProps = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  role: string;
};

const User = ({
  id,
  firstname,
  lastname,
  email,
  phonenumber,
  role,
}: UserProps) => {
  return (
    <Link href={`/users/edit/${id}`}>
      <div className="w-full flex gap-3 py-3 border-b">
        <UserCircle2 className="w-12 h-12" strokeWidth="1.5" />
        <div className="space-y-1">
          <div className="font-semibold text-lg">{`${firstname} ${lastname}${
            role === "ADM" ? " (admin)" : ""
          }`}</div>
          <div className="text-gray-400">{phonenumber}</div>
          <div className="text-gray-400">{email}</div>
        </div>
      </div>
    </Link>
  );
};

export default User;
