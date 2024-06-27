import { cookies } from "next/headers";
import { endpoint } from "./getCategoryList";

export type MemoData = {
  id: number;
  category_id: number;
  title: string;
  content: string;
};

export const getMemo = async (memoId: string) => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("access_token");

    const memoResponse = await fetch(`${endpoint}/memo/${memoId}`, {
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-TOKEN": token?.value!,
      },
      method: "GET",
    });

    const memoData: MemoData = await memoResponse.json();
    return memoData;
  } catch (error) {}
};
