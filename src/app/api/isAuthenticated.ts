"use server";

import { validateUuid } from "@/lib/validateUuid";
import { cookies } from "next/headers";

export const isAuthenticated = async () => {
  try {
    const cookieStore = cookies();
    const hasCookie = cookieStore.has("access_token");
    if (!hasCookie) return false;

    const token = cookieStore.get("access_token");

    return validateUuid(token?.value!);
  } catch (error) {
    console.error(error);

    return false;
  }
};
