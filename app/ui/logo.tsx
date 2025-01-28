import { inter } from "@/app/ui/fonts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className={`${inter.className} flex flex-row items-center leading-none text-white gap-1.5 pl-1.5`}
    >
      <GlobeAltIcon className="size-5 md:size-8 rotate-[15deg]" />
      <p className="text-md md:text-2xl">C</p>
    </Link>
  );
}
