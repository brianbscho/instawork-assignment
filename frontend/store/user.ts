import { UserType } from "@/util/type";
import { create } from "zustand";

type UserState = {
  users: UserType[] | null;
  setUsers: (value: UserType[]) => void;
};

const useUserState = create<UserState>((set) => {
  return {
    users: null,
    setUsers: (users: UserType[]) => set({ users }),
  };
});

export default useUserState;
