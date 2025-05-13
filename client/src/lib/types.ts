export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  id: number;
  success: boolean;
  message: string;
}
