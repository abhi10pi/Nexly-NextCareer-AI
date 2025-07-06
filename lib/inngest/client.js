import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "nexly", // Unique app ID
  name: "Nexly",
   credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
  
});