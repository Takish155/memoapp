"use server";

import { cookies } from "next/headers";
import { endpoint } from "../getCategoryList";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { MemoData } from "../getMemo";

export const updateMemoAction = async (data: MemoData) => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("access_token");

    const response = await fetch(`${endpoint}/memo/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-TOKEN": token?.value!,
        body: JSON.stringify(data),
      },
      method: "PUT",
    });

    console.log(response);

    if (response.ok) {
      return {
        message: response.statusText,
        type: 200,
      };
    }
  } catch (error) {}
};
