"use client";

import Link from "next/link";
import ModeToggle from "./mode-toggle";

function TopNavigation() {
  return (
    <nav className="sticky top-0 bg-background/90 backdrop-blur border-b z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={"/"} className="text-3xl font-mono font-bold">
              FordaGram
            </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default TopNavigation;
