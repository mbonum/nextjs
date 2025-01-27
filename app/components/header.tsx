"use client";

import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { CLogo } from "../ui/c-logo";
import { UploadModal } from "./upload-modal";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="relative">
      <div
        className={`md:flex-col fixed top-0 left-0 h-full w-64 z-20 flex shrink-0 items-center bg-amber-500/70 border-r-[2.3px] border-amber-500 p-2 md:p-4 ${
          menuOpen
            ? ""
            : "md:block hidden"
        } shadow-[rgba(0,_0,_0,_0.2)_0px_2px_3px]`}
      >
        <CLogo />
        <div className="md:hidden flex flex-1 justify-end">
          {menuOpen ? (
            <XMarkIcon
              className="size-6 text-white rounded-md p-0.5 hover:bg-amber-600/60 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <Bars3Icon
              className="size-6 text-white rounded-md p-0.5 hover:bg-amber-600/60 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
        </div>
        <div
          className={`md:flex md:flex-col md:flex-1 md:gap-2 ${
            menuOpen
              ? "flex flex-col gap-0.5 p-2"
              : "md:flex hidden"
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
          <UploadModal />
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
