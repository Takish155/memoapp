import SignInForm from "@/components/sign-in-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <Card className="w-[95%] mx-auto max-w-[800px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          To use Memoapp, Sign in with your account with UUID
        </CardDescription>
        <CardContent>
          <SignInForm />
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default page;
