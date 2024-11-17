import { Plus } from "lucide-react";
import Link from "next/link";
import User from "./User";

const UserList = () => {
  const users = [
    {
      id: 1,
      firstname: "Brian",
      lastname: "Cho",
      email: "brianbscho@gmail.com",
      phonenumber: "123-456-7890",
      role: "ADM",
    },
  ];

  return (
    <div className="w-full ">
      <div className="w-full flex justify-end mb-3">
        <Link href="/users/add">
          <Plus className="h-7 w-7" />
        </Link>
      </div>
      <div className="text-5xl font-bold mb-3">Team members</div>
      <div className="text-gray-400 mb-12">{`You have ${
        users.length
      } team member${users.length > 1 ? "s" : ""}.`}</div>
      <div className="border-t">
        {users.map((user) => (
          <User key={user.email} {...user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
