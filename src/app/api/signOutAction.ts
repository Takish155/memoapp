"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const signOutAction = () => {
  const cookieStore = cookies();
  cookieStore.delete("access_token");

  redirect("/auth/signin");
};

export default signOutAction;
