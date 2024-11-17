import React from "react";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full py-12 px-7 overflow-auto relative">
      {children}
    </div>
  );
};

export default UsersLayout;
