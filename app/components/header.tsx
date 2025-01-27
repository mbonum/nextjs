"use client";

import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { CLogo } from "../ui/c-logo.tsx";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="relative">
      <div
        className={`sticky top-4 z-20 h-8 md:h-12 flex shrink-0 items-center rounded-lg bg-amber-500/70 border-[2.3px] border-amber-500 p-2 md:p-4 ${
          menuOpen
            ? "border-b-0 rounded-b-none"
            : "shadow-[rgba(0,_0,_0,_0.2)_0px_2px_3px]"
        }`}
      >
        <CLogo />
        <div className="md:hidden flex flex-1 justify-end">
          {menuOpen ? (
            <XMarkIcon
              className="h-6 w-6 text-white rounded-md p-0.5 hover:bg-amber-600/60 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <Bars3Icon
              className="h-6 w-6 text-white rounded-md p-0.5 hover:bg-amber-600/60 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
        </div>
        <div
          className={`md:flex md:flex-1 md:justify-end md:gap-2 ${
            menuOpen
              ? "absolute top-full left-0 right-0 flex flex-col gap-0.5 bg-amber-500/70 rounded-b-lg border-x-[2.3px] border-b-[2.3px] border-amber-500 shadow-[rgba(0,_0,_0,_0.2)_0px_2px_3px] p-2"
              : "hidden"
          }`}
        >
          <Link
            href="/"
            className="flex rounded-md p-2 pr-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600/60"
          >
            <span className="flex gap-1 items-center">
              <HomeIcon className="w-4 md:w-6" />
              Dashboard
            </span>
          </Link>
          {!session ? (
            <Link
              href="/login"// onClick={() => signIn()}
              className="flex rounded-md p-2 pr-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600/60"
            >
              <span className="flex gap-1 items-center">
                <ArrowRightEndOnRectangleIcon className="w-4 md:w-6" />
                Log in
              </span>
            </Link>
          ) : (
            <button onClick={() => signOut()}
              className="flex rounded-md p-2 pr-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600/60"
            >
              <span className="flex gap-1 items-center">
                <ArrowRightStartOnRectangleIcon className="w-4 md:w-6" />
                Log out
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
