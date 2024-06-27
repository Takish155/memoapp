"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import useHandleSignIn from "@/hooks/useHandleSignIn";

const SignInForm = () => {
  const { generateUuid, input, onSubmit, serverMessage, setInput } =
    useHandleSignIn();

  return (
    <form className="mt-8" onSubmit={onSubmit}>
      {serverMessage.message && (
        <Alert
          className="mb-8"
          variant={serverMessage.status === 200 ? "default" : "destructive"}
        >
          <AlertDescription>{serverMessage.message}</AlertDescription>
        </Alert>
      )}
      <div className="mb-6">
        <Input
          placeholder="UUID"
          className="mb-1 max-w-[400px]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="text-sm">
          Don&apos;t have UUID or new? create one by clicking{" "}
          <span
            className="text-blue-600 underline hover:cursor-pointer"
            onClick={generateUuid}
          >
            here
          </span>
        </p>
      </div>
      <Button>Sign in</Button>
    </form>
  );
};

export default SignInForm;
