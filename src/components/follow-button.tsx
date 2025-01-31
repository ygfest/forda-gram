"use client";

import React from "react";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs/server";

function FollowButton(userId: { userId: string }) {
  const handleFollow = () => {
    try {
    } catch (error) {}
  };

  return (
    <Button variant="secondary" onClick={handleFollow}>
      Follow
    </Button>
  );
}

export default FollowButton;
