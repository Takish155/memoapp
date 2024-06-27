"use client";

import React from "react";
import { Button } from "./ui/button";
import signOutAction from "@/app/api/signOutAction";

const SignOutButton = () => {
  return (
    <Button variant={"destructive"} onClick={() => signOutAction()}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
