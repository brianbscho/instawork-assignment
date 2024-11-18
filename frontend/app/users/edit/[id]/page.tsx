"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserForm from "@/components/UserForm";
import { RoleType, UserType } from "@/util/type";
import useUserStore from "@/store/user";
import api from "@/util/api";
import { useShallow } from "zustand/shallow";

const Edit = ({ params }: { params: Promise<{ id: string }> }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [role, setRole] = useState<RoleType>("REG");

  const [id, setId] = useState<number>();
  useEffect(() => {
    const getUserId = async () => {
      const paramId = (await params).id;
      setId(parseInt(paramId));
    };
    getUserId();
  }, [params]);

  const [users, editUser] = useUserStore(
    useShallow((state) => [state.users, state.editUser])
  );
  const [user, setUser] = useState<UserType>();
  useEffect(() => {
    if (!users || !id) {
      return;
    }

    const index = users.findIndex((u) => u.id === id);
    if (index < 0) {
      alert("Invalid user id!");
      router.push("/users");
      return;
    }

    setUser(users[index]);
  }, [users, id]);

  const router = useRouter();
  const [isSettingUser, setIsSettingUser] = useState(true);
  useEffect(() => {
    if (!user) return;

    setFirstname(user.firstname);
    setLastname(user.lastname);
    setEmail(user.email);
    setPhonenumber(user.phonenumber);
    setRole(user.role);
    setIsSettingUser(false);
  }, [user]);

  const callUserPatchApi = useCallback(async () => {
    if (!id) {
      return;
    }
    if (
      firstname.length === 0 ||
      lastname.length === 0 ||
      email.length === 0 ||
      phonenumber.length === 0
    ) {
      alert("Please fill all necessary fields");
      return;
    }

    const updatedUser = await api<UserType>(`/users/${id}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname, email, phonenumber, role }),
    });
    if (updatedUser) {
      editUser(updatedUser);
      router.push("/users");
    }
  }, [firstname, lastname, email, phonenumber, role, editUser, router, id]);
  const onSave = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      callUserPatchApi();
    },
    [callUserPatchApi]
  );

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
      {!users ? (
        <div className="py-12 text-center text-lg">Loading...</div>
      ) : !user || isSettingUser ? (
        <></>
      ) : (
        <div className="border-t py-3">
          <form onSubmit={onSave}>
            <UserForm
              useFirstname={[firstname, setFirstname]}
              useLastname={[lastname, setLastname]}
              useEmail={[email, setEmail]}
              usePhonenumber={[phonenumber, setPhonenumber]}
              useRole={[role, setRole]}
            />
            <div className="flex justify-between mt-12">
              <button>
                <div className="px-7 py-3 text-red-500 rounded-md border border-gray-300">
                  Delete
                </div>
              </button>
              <button type="submit" onClick={onSave}>
                <div className="px-7 py-3 bg-blue-500 text-white rounded-md">
                  Save
                </div>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Edit;
