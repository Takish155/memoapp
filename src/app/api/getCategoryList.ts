import { cookies } from "next/headers";

type Category = {
  id: number;
  name: string;
};

export type Memo = {
  id: number;
  title: string;
};

export const endpoint = "https://challenge-server.tracks.run/memoapp";

export const getCategoryList = async () => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("access_token");

    const categoryResponse = await fetch(`${endpoint}/category`, {
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-TOKEN": token?.value!,
      },
      method: "GET",
    });

    const categoryData: Category[] = await categoryResponse.json();

    const categoryMemos = await Promise.all(
      categoryData.map(async (category) => {
        const memoResponse = await fetch(
          `${endpoint}/memo?category_id=${category.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "X-ACCESS-TOKEN": token?.value!,
            },
            method: "GET",
            next: { tags: ["memoCategory"] },
          }
        );

        const memoData: Memo[] = await memoResponse.json();

        return {
          ...category,
          memos: memoData,
        };
      })
    );

    return categoryMemos;
  } catch (error) {}
};
