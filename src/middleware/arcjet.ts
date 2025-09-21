import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { NextFunction, Request, Response } from 'express';
import { httpResponse } from "../lib/httpsResponse";

const aj = arcjet({

  key: process.env.ARCJET_KEY as string,
  characteristics: ["ip.src"],
  rules: [
    
    // Shield protects your app from common attacks e.g. SQL injection
    shield({ mode: "LIVE" }),

    tokenBucket({
      mode: "LIVE",
      refillRate: 15, // Refill 5 tokens per interval
      interval: 2, // Refill every 10 seconds
      capacity: 20, // Bucket capacity of 10 tokens
    }),
  ],
});

export async function ajMiddleware(req: Request, res: Response, next: NextFunction) {
  const decision = await aj.protect(req, { requested: 5 }); // Deduct 5 tokens from the bucket

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return httpResponse(429, "Rate limit exceeded", {}, res);
    } else if (decision.reason.isBot()) {
      return httpResponse(403, "Forbidden", {}, res);
    } else {
      return httpResponse(403, "Forbidden", {}, res);
    }
  } else {

    // One step further

    // Check if the Request is from a vpn or proxy

    if (decision.ip.isProxy() || decision.ip.isVpn()) {
      return httpResponse(403, "Forbidden", {}, res);
    }

    return next();
  }
}