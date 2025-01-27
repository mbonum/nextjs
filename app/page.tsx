"use client";

import { Header } from "./components/header";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-2 px-3 md:p-4 bg-zinc-50 md:pl-60">
      <Header />
      <div className="flex grow flex-col gap-4 md:flex-row">
        {/* Dashboard */}
        <div className="flex flex-col justify-cente gap- rounded-lg bg-gray-50 px-3 py- md:w-1/ 3 md:px- 20"></div>

        {/* <div className="flex items-center justify-center p-4">
          
        </div>

        <div className="flex items-center justify-center p-6 md:w-1/3 md:px-28 md:py-12"></div> */}
      </div>
    </main>
  );
}
{
  /* <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          /> */
}
