import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getUserDataFromDb } from "../../actions/user.action";
import { Button } from "./ui/button";
import { SignIn, SignInButton, SignUp, SignUpButton } from "@clerk/nextjs";

async function SideBarSection() {
  const authUser = await currentUser();
  if (!authUser) return <UnAuthenticatedSideBar />;

  const user = await getUserDataFromDb(authUser.id);
  if (!user) return null;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SideBarSection;

const UnAuthenticatedSideBar = () => {
  return (
    <div className="sticky top-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl font-sem-bold">
            Welcome Back!
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground mb-4">
            Login to access your profile and connect with others
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton mode="modal">
            <Button className="w-full" variant="outline">
              {" "}
              Login{" "}
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="w-full mt-2">Sign Up</Button>
          </SignUpButton>
        </CardContent>
      </Card>
    </div>
  );
};
