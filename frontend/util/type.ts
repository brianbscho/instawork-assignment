export type RoleType = "ADM" | "REG";

export type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  role: RoleType;
};
