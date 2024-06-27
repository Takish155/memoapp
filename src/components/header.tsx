import { isAuthenticated } from "@/app/api/isAuthenticated";
import React from "react";
import SignOutButton from "./sign-out-button";

const Header = async () => {
  const session = await isAuthenticated();

  return (
    <header className="mb-10 mt-5 flex justify-around items-center">
      <h1 className="font-bold text-3xl ">Memoapp</h1>
      {session && <SignOutButton />}
    </header>
  );
};

export default Header;
