import { UserType } from "@/util/type";
import { create } from "zustand";

type UserState = {
  users: UserType[] | null;
  setUsers: (value: UserType[]) => void;
  addUser: (value: UserType) => void;
  deleteUser: (id: number) => void;
  editUser: (value: UserType) => void;
};

const useUserStore = create<UserState>((set) => {
  return {
    users: null,
    setUsers: (users: UserType[]) => set({ users }),
    addUser: (user: UserType) =>
      set((state) => ({ users: [...(state.users ?? []), user] })),
    deleteUser: (id: number) =>
      set((state) => ({ users: state.users?.filter((u) => u.id !== id) })),
    editUser: (user: UserType) =>
      set((state) => ({
        users: state.users?.map((u) => {
          if (u.id === user.id) {
            return user;
          }
          return u;
        }),
      })),
  };
});

export default useUserStore;
