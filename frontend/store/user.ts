import { UserType } from "@/util/type";
import { create } from "zustand";

type UserState = {
  users: UserType[] | null;
  setUsers: (value: UserType[]) => void;
};

const useUserStore = create<UserState>((set) => {
  return {
    users: null,
    setUsers: (users: UserType[]) => set({ users }),
  };
});

export default useUserStore;
