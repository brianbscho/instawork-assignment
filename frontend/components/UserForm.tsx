"use client";

import { RoleType } from "@/util/type";
import { ChangeEventHandler } from "react";

type UserFormProps = {
  useFirstname: [string, (value: string) => void];
  useLastname: [string, (value: string) => void];
  useEmail: [string, (value: string) => void];
  usePhonenumber: [string, (value: string) => void];
  useRole: [RoleType, (value: RoleType) => void];
};

const UserForm = ({
  useFirstname,
  useLastname,
  useEmail,
  usePhonenumber,
  useRole,
}: UserFormProps) => {
  const [firstname, setFirstname] = useFirstname;
  const [lastname, setLastname] = useLastname;
  const [email, setEmail] = useEmail;
  const [phonenumber, setPhonenumber] = usePhonenumber;
  const [role, setRole] = useRole;

  const onRoleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.value !== "REG" && e.currentTarget.value !== "ADM") {
      return;
    }
    setRole(e.currentTarget.value);
  };

  return (
    <>
      <div className="text-xl font-semibold mb-3">Info</div>
      <input
        type="text"
        placeholder="First name"
        className="w-full py-2 px-3 border focus-visible:outline-none border-gray-300 focus:border-gray-900 rounded-md mb-2"
        value={firstname}
        onChange={(e) => setFirstname(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        className="w-full py-2 px-3 border focus-visible:outline-none border-gray-300 focus:border-gray-900 rounded-md mb-2"
        value={lastname}
        onChange={(e) => setLastname(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Email address"
        className="w-full py-2 px-3 border focus-visible:outline-none border-gray-300 focus:border-gray-900 rounded-md mb-2"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Phone number"
        className="w-full py-2 px-3 border focus-visible:outline-none border-gray-300 focus:border-gray-900 rounded-md mb-12"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.currentTarget.value)}
      />
      <div className="text-xl font-semibold mb-3">Role</div>
      <div className="flex justify-between items-center mb-1">
        <label htmlFor="REG" className={role === "REG" ? "" : "text-gray-400"}>
          Regular - Can&apos;t delete members
        </label>
        <input
          type="radio"
          id="REG"
          name="role"
          value="REG"
          checked={role === "REG"}
          onChange={onRoleChange}
        />
      </div>
      <div className="flex justify-between items-center">
        <label htmlFor="ADM" className={role === "ADM" ? "" : "text-gray-400"}>
          Admin - Can delete members
        </label>
        <input
          type="radio"
          id="ADM"
          name="role"
          value="ADM"
          checked={role === "ADM"}
          onChange={onRoleChange}
        />
      </div>
    </>
  );
};

export default UserForm;
