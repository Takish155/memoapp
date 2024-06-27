import { auth } from "@/app/api/auth";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useHandleSignIn = () => {
  const [input, setInput] = useState("");

  const [serverMessage, setServerMessage] = useState({
    status: 0,
    message: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await auth(input);
    setServerMessage({
      status: res.status,
      message: res.message,
    });
  };

  const generateUuid = () => {
    const uuid = uuidv4();
    setInput(uuid);
  };

  return {
    generateUuid,
    input,
    setInput,
    serverMessage,
    onSubmit,
  };
};

export default useHandleSignIn;
