"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs/server";
import { toggleFollow } from "../../actions/user.action";
import toast from "react-hot-toast";
import { Loader2Icon } from "lucide-react";

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
    <Button
      variant="secondary"
      className="w-20"
      size="sm"
      onClick={handleFollow}
      disabled={isLoading}
    >
      {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Follow"}
    </Button>
  );
}

export default FollowButton;
