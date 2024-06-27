"use server";

import { cookies } from "next/headers";
import { endpoint } from "../getCategoryList";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const deleteMemoAction = async (memoId: number) => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("access_token");

    const deleteResponse = await fetch(`${endpoint}/memo/${memoId}`, {
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-TOKEN": token?.value!,
      },
      method: "DELETE",
    });

    if (deleteResponse.ok) {
      revalidateTag("memoCategory");
    }
  } catch (error) {}
  redirect("/");
};
