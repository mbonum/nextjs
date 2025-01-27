import { inter } from "@/app/ui/fonts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CLogo() {
  return (
    <Link
      href="/"
      className={`${inter.className} flex flex-row items-center leading-none text-white gap-1`}
    >
      <GlobeAltIcon className="size-6 md:size-10 rotate-[15deg]" />
      <p className="text-md md:text-[36px]">C</p>
    </Link>
  );
}
