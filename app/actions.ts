"use server"

import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";

const petAnalysisSchema = z.object({
  petName: z.string().describe("The name of the pet from the document"),
  species: z.string().describe("The species of the pet (dog, cat, etc.)"),
  age: z.string().describe("The age of the pet"),
  diagnosis: z.string().describe("The main diagnosis or findings"),
  recommendations: z.array(z.string()).describe("List of recommendations or treatments"),
  testResults: z.record(z.string()).describe("Key test results and their values"),
  veterinarian: z.string().describe("Name of the veterinarian"),
  date: z.string().describe("Date of the analysis"),
});

export async function analyzePetDocument(formData: FormData) {
  try {
    const file = formData.get("pdf") as File;
    if (!file) {
      throw new Error("No file provided");
    }

    const result = await generateObject({
      model: anthropic("claude-3-sonnet"),
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Extract the veterinary analysis information from this PDF into a structured format. Include all relevant medical details, test results, and recommendations.",
            },
            {
              type: "file",
              data: await file.arrayBuffer(),
              mimeType: "application/pdf",
            },
          ],
        },
      ],
      schema: petAnalysisSchema,
    });

    return {
      success: true,
      data: result.object,
    }
  } catch (error) {
    console.error("Error processing PDF:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to process PDF",
    }
  }
}
