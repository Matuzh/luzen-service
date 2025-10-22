const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  details?: any;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  deviceType: string;
  deviceBrand: string;
  deviceModel?: string;
  problemDescription: string;
  preferredDate: string; // ISO string
  preferredTime: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  service?: string;
  createdAt: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'An error occurred');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  // Bookings
  async createBooking(data: BookingData): Promise<ApiResponse> {
    return this.request('/api/bookings', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getBooking(id: string): Promise<ApiResponse> {
    return this.request(`/api/bookings/${id}`, {
      method: 'GET',
    });
  }

  // Contact
  async sendContactMessage(data: ContactData): Promise<ApiResponse> {
    return this.request('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Reviews
  async getReviews(): Promise<ApiResponse<Review[]>> {
    return this.request('/api/reviews', {
      method: 'GET',
    });
  }

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    return this.request('/health', {
      method: 'GET',
    });
  }
}

// Export singleton instance
export const api = new ApiClient(API_URL);

// Export individual methods for convenience
export const bookings = {
  create: (data: BookingData) => api.createBooking(data),
  get: (id: string) => api.getBooking(id),
};

export const contact = {
  send: (data: ContactData) => api.sendContactMessage(data),
};

export const reviews = {
  getAll: () => api.getReviews(),
};

export default api;