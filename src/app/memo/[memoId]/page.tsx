import { getMemo } from "@/app/api/getMemo";
import MemoForm from "@/components/memo-form";
import React from "react";

const page = async ({ params }: { params: { memoId: string } }) => {
  const data = await getMemo(params.memoId);

  return <main className="w-[70%]">{data && <MemoForm data={data} />}</main>;
};

export default page;
