export interface ContactFormData {
  name: string;
  businessName: string;
  contact: string;
  currentLink?: string;
  message: string;
  companyWebsite?: string; // honeypot
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: string[] = [];

  // Required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required');
  } else if (data.name.length > 100) {
    errors.push('Name must be 100 characters or less');
  }

  if (!data.businessName || typeof data.businessName !== 'string' || data.businessName.trim().length === 0) {
    errors.push('Business name is required');
  } else if (data.businessName.length > 150) {
    errors.push('Business name must be 150 characters or less');
  }

  if (!data.contact || typeof data.contact !== 'string' || data.contact.trim().length === 0) {
    errors.push('Phone or email is required');
  } else if (data.contact.length > 200) {
    errors.push('Contact information must be 200 characters or less');
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    errors.push('Message is required');
  } else if (data.message.length < 10) {
    errors.push('Message must be at least 10 characters');
  } else if (data.message.length > 2000) {
    errors.push('Message must be 2000 characters or less');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
