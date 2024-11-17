"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import User from "./User";
import { useEffect } from "react";
import useUserStore from "@/store/user";
import api from "@/util/api";
import { UserType } from "@/util/type";

const UserList = () => {
  const { users, setUsers } = useUserStore();
  useEffect(() => {
    const callUsersApi = async () => {
      const usersResponse = await api<UserType[]>("/users/");
      if (usersResponse) {
        setUsers(usersResponse);
      }
    };
    callUsersApi();
  }, [setUsers]);

  return (
    <div className="w-full ">
      <div className="w-full flex justify-end mb-3">
        <Link href="/users/add">
          <Plus className="h-7 w-7" />
        </Link>
      </div>
      <div className="text-5xl font-bold mb-3">Team members</div>
      {!users ? (
        <div className="py-12 text-center text-lg">Loading...</div>
      ) : (
        <>
          <div className="text-gray-400 mb-12">{`You have ${
            users.length
          } team member${users.length > 1 ? "s" : ""}.`}</div>
          <div className="border-t">
            {users.map((user) => (
              <User key={user.email} {...user} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
