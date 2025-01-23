import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
// import { inter } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import { PdfUpload } from "./components/pdf-upload"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-2 md:p-4 bg-zinc-50">
      <div className="flex h-8 shrink-0 items-center rounded-lg bg-amber-500/80 p-4 md:h-12">
        <AcmeLogo />
        <Link
          href="/login"
          className="flex items-center justify-end rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600/80 md:text-base"
        >
          <span>Log in</span> {/* <ArrowRightIcon className="w-5 md:w-6" /> */}
        </Link>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        </div>

        <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
          <PdfUpload />
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
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
          />
        </div>
      </div>
    </main>
  );
}
