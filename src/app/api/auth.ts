"use server";

import { validateUuid } from "@/lib/validateUuid";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const auth = async (uuid: string) => {
  try {
    const isValid = validateUuid(uuid);
    if (!isValid) throw new Error("Invalid UUID, please try again");

    const cookieStore = cookies();
    cookieStore.set("access_token", uuid);
  } catch (error) {
    if (error instanceof Error) {
      return { status: 400, message: error.message };
    }

    return { status: 500, message: "Internal Server Error" };
  }
  redirect("/");
};
