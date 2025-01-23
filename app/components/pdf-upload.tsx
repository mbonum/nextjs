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
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Pet Analysis Upload</CardTitle>
        <CardDescription>
          Upload your pet&apos;s veterinary PDF analysis to convert it to a structured format
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 bg-muted/50">
            <FileUp className="h-8 w-8 mb-2 text-muted-foreground" />
            <input
              type="file"
              name="pdf"
              accept="application/pdf"
              className="block w-full text-sm text-muted-foreground
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-primary-foreground
                hover:file:bg-primary/90 cursor-pointer"
            />
          </div>
          <button type="submit" className="w-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 rounded-xl py-2" disabled={isLoading}>
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
