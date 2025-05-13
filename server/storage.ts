import { contactMessages, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getMessages(): Promise<ContactMessage[]>;
  getMessage(id: number): Promise<ContactMessage | undefined>;
  createMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, ContactMessage>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async getMessages(): Promise<ContactMessage[]> {
    return Array.from(this.messages.values());
  }

  async getMessage(id: number): Promise<ContactMessage | undefined> {
    return this.messages.get(id);
  }

  async createMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentId++;
    const now = new Date();
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: now
    };
    this.messages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
