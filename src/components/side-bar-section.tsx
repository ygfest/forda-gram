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

async function SideBarSection() {
  const authUser = await currentUser();
  if (!authUser) return;

  const user = await getUserDataFromDb(authUser.id);
  if (!user) return null;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
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
