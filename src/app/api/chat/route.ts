import { convertToCoreMessages, StreamData, streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { prompt } from "@/lib/prompt";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const streamData = new StreamData();
    
    const result = await streamText({
      model: openai("gpt-4o"),
      system: prompt,
      messages: convertToCoreMessages(messages),
      onFinish: () => streamData.close(),
    });

    return result.toDataStreamResponse({ data: streamData });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process chat request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
