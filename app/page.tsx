"use client";

import { Header } from "./components/header";
import { UploadModal } from "./components/upload-modal";
import { PdfUpload } from "./components/pdf-upload";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-2 px-3 md:p-4 bg-zinc-50">
      <Header />
      <div className="flex grow flex-col gap-4 md:flex-row">
        {/* Dashboard */}
        <div >
          <UploadModal />
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-1/3 md:px-20"></div>

        <div className="flex items-center justify-center p-4">
          {/* Add button that open PdfUpload as a modal bg-muted/30 */}
          
        </div>

        <div className="flex items-center justify-center p-6 md:w-1/3 md:px-28 md:py-12"></div>
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
