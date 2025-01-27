"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUp, Loader2 } from "lucide-react";
import { analyzePetDocument } from "../actions";

export function PdfUpload() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    try {
      setIsLoading(true);
      setError(null);
      setResult(null);

      const response = await analyzePetDocument(formData);

      if (!response.success) {
        throw new Error(response.error);
      }

      setResult(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl border-0 shadow-none">
      <CardHeader>
        <CardTitle>Upload your Pet Analysis</CardTitle>
        {/* <CardDescription>
          Upload your pet&apos;s veterinary PDF analysis to convert it to a structured format
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-4 bg-muted/50">
            <FileUp className="size-8 mb-2 text-muted-foreground" />
            <input
              type="file"
              name="pdf"
              accept="application/pdf"
              multiple
              className="block w-full md:w-auto text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-primary-foreground hover:file:bg-amber-500/85 cursor-pointer"
            />
          </div>
          <button type="submit" className="w-full bg-amber-500 text-white hover:bg-amber-500/85 dark:bg-zinc-50 dark:text-zinc-900 rounded-xl shadow-[rgba(0,_0,_0,_0.2)_0px_2px_3px] py-2" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Upload and Analyze"
            )}
          </button>
        </form>

        {error && <div className="mt-4 p-4 text-sm text-red-500 bg-red-50 rounded-lg">{error}</div>}

        {result && (
          <div className="mt-4 space-y-4">
            <h3 className="font-medium">Analysis Result:</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-auto text-sm">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
