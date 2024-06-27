import { MemoData } from "@/app/api/getMemo";
import { updateMemoAction } from "@/app/api/memo/updateMemoAction";
import React, { useState } from "react";

const useHandleUpdateMemo = (data: MemoData) => {
  const [memoTitle, setMemoTitle] = useState(data.title);
  const [memoContent, setMemoContent] = useState(data.content);
  const [serverMessage, setServerMessage] = useState({
    message: "",
    type: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await updateMemoAction({
      category_id: data.category_id,
      id: data.id,
      title: memoTitle,
      content: memoContent,
    });
    if (res) {
      setServerMessage(res);
    } else {
      setServerMessage({
        message: "Something went wrong",
        type: 400,
      });
    }
  };

  return {
    memoTitle,
    setMemoTitle,
    memoContent,
    setMemoContent,
    serverMessage,
    handleSubmit,
  };
};

export default useHandleUpdateMemo;
