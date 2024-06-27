import { Memo } from "@/app/api/getCategoryList";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { File } from "lucide-react";
import Link from "next/link";

interface MemoCardProps {
  memos: Memo[];
  id: number;
  name: string;
}

const MemoCard = ({ data }: { data: MemoCardProps }) => {
  return (
    <AccordionItem value={data.name}>
      <AccordionTrigger className="text-lg font-semibold ">
        <span className="flex gap-2">
          <File />
          {data.name}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <ul>
          {data.memos.map((memo) => {
            return (
              <li key={memo.id} className="text-lg ml-2">
                <Link href={`/memo/${memo.id}`} className="hover:underline">
                  {memo.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default MemoCard;
