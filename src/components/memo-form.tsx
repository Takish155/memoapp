"use client";

import { MemoData } from "@/app/api/getMemo";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { deleteMemoAction } from "@/app/api/memo/deleteMemoAction";
import useHandleUpdateMemo from "@/hooks/useHandleUpdateMemo";
import { Alert, AlertDescription } from "./ui/alert";

const MemoForm = ({ data }: { data: MemoData }) => {
  const {
    handleSubmit,
    memoContent,
    memoTitle,
    setMemoTitle,
    serverMessage,
    setMemoContent,
  } = useHandleUpdateMemo(data);

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      {serverMessage.message && (
        <Alert
          variant={serverMessage.type === 400 ? "destructive" : "default"}
          className="mb-8"
        >
          <AlertDescription>{serverMessage.message}</AlertDescription>
        </Alert>
      )}
      <div className="mb-4 max-w-[500px]">
        <h3 className="font-bold mb-2">Name</h3>
        <Input
          value={memoTitle}
          onChange={(e) => setMemoTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Content</h3>
        <Textarea
          className="min-h-[40vh]"
          value={memoContent}
          onChange={(e) => setMemoContent(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <Button type="submit">Update</Button>
        <Button
          variant={"destructive"}
          type="button"
          onClick={async () => deleteMemoAction(data.id)}
        >
          Delete
        </Button>
      </div>
    </form>
  );
};

export default MemoForm;
