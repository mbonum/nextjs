"use client";

// import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FileUp } from "lucide-react";
import { PdfUpload } from "./pdf-upload";

export function UploadModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex rounded-md p-2 pr-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600/60">
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
