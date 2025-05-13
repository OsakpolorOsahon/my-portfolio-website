import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createMessage(validatedData);
      
      // Return a success response
      return res.status(201).json({
        id: message.id,
        success: true,
        message: "Your message has been received. Thank you for contacting us!"
      });
    } catch (error) {
      console.error("Error processing contact form submission:", error);
      
      // Return an error response
      return res.status(400).json({
        success: false,
        message: "There was an error processing your request. Please try again."
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);
  
  return httpServer;
}
