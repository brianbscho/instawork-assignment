import { UserType } from "@/util/type";
import { create } from "zustand";

type UserState = {
  users: UserType[] | null;
  setUsers: (users: UserType[]) => void;
  addUser: (user: UserType) => void;
  deleteUser: (id: number) => void;
  editUser: (user: UserType) => void;
};

const useUserStore = create<UserState>((set) => {
  return {
    users: null,
    setUsers: (users: UserType[]) => set({ users }),
    addUser: (user: UserType) =>
      set((state) => ({ users: state.users?.concat(user) })),
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
