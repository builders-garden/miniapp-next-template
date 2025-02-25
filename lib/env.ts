import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// https://env.t3.gg/docs/nextjs
export const env = createEnv({
  server: {
    APP_ID: z.string().min(1),
    DEV_PORTAL_API_KEY: z.string().min(1),
    WLD_CLIENT_ID: z.string().min(1),
    WLD_CLIENT_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_URL: z.string().min(1),
    NEXT_PUBLIC_APP_ENV: z
      .enum(["development", "production"])
      .optional()
      .default("development"),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  },
});
