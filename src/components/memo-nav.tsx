import { getCategoryList } from "@/app/api/getCategoryList";
import { cookies } from "next/headers";
import React from "react";
import { Accordion } from "./ui/accordion";
import MemoCard from "./memo-card";

const MemoNav = async () => {
  const data = await getCategoryList();

  return (
    <nav className="w-[20%]">
      <Accordion type="multiple">
        {data?.map((category) => {
          return <MemoCard data={category} key={category.id} />;
        })}
      </Accordion>
    </nav>
  );
};

export default MemoNav;
