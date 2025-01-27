"use client";

// import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FileUp } from "lucide-react";
import { PdfUpload } from "./pdf-upload";

export function UploadModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center bg-amber-500 text-white hover:bg-amber-500/85 dark:bg-zinc-50 dark:text-zinc-900 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_2px_3px] px-3 py-2">
          <FileUp className="mr-2 size-5" />
          Upload Pet Analysis
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0.5">
        <PdfUpload />
      </DialogContent>
    </Dialog>
  );
}
