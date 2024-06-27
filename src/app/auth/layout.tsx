import React, { ReactNode } from "react";
import { isAuthenticated } from "../api/isAuthenticated";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await isAuthenticated();
  if (session) redirect("/");

  return <>{children}</>;
};

export default layout;
