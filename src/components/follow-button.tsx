"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs/server";
import { toggleFollow } from "../../actions/user.action";
import toast from "react-hot-toast";

function FollowButton({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);
    try {
      await toggleFollow(userId);
      toast.success("Followed successfully");
    } catch (error) {
      toast.error("Error following user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button variant="secondary" onClick={handleFollow}>
      Follow
    </Button>
  );
}

export default FollowButton;
