"use client";

import { FormEventHandler, useCallback, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserForm from "@/components/UserForm";
import api from "@/util/api";
import { RoleType, UserType } from "@/util/type";
import useUserStore from "@/store/user";

const Add = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [role, setRole] = useState<RoleType>("REG");

  const addUser = useUserStore((state) => state.addUser);
  const router = useRouter();
  const callUsersApi = useCallback(async () => {
    if (
      firstname.length === 0 ||
      lastname.length === 0 ||
      email.length === 0 ||
      phonenumber.length === 0
    ) {
      alert("Please fill all necessary fields");
      return;
    }

    const newUser = await api<UserType>("/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname, email, phonenumber, role }),
    });
    if (newUser) {
      addUser(newUser);
      router.push("/users");
    }
  }, [firstname, lastname, email, phonenumber, role, addUser, router]);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      callUsersApi();
    },
    [callUsersApi]
  );

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
        <form onSubmit={onSubmit}>
          <UserForm
            useFirstname={[firstname, setFirstname]}
            useLastname={[lastname, setLastname]}
            useEmail={[email, setEmail]}
            usePhonenumber={[phonenumber, setPhonenumber]}
            useRole={[role, setRole]}
          />
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
