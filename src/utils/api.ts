const API_BASE_URL = 'http://localhost:5000/api';

// Types for API responses
export interface ApiResponse<T> {
	status: string;
	data?: T;
	message?: string;
	error?: string;
}

export interface AuthResponse {
	_id: string;
	username: string;
	email: string;
	role: string;
	token: string;
}

export interface HeroData {
	_id?: string;
	greeting: string;
	name: string;
	title: string;
	description: string;
	projectsCount: number;
	customersCount: number;
	experienceYears: number;
}

export interface FAQData {
	_id?: string;
	question: string;
	answer: string;
	order: number;
}

// API Service Class
class ApiService {
	private baseURL: string;
	private token: string | null;

	constructor() {
		this.baseURL = API_BASE_URL;
		this.token = localStorage.getItem('adminToken');
	}

	// Set auth token
	setToken(token: string) {
		this.token = token;
		localStorage.setItem('adminToken', token);
	}

	// Clear auth token
	clearToken() {
		this.token = null;
		localStorage.removeItem('adminToken');
	}

	// Get auth headers
	private getAuthHeaders(): HeadersInit {
		const headers: HeadersInit = {
			'Content-Type': 'application/json',
		};

		if (this.token) {
			headers.Authorization = `Bearer ${this.token}`;
		}

		return headers;
	}

	// Generic request method
	private async request<T>(
		endpoint: string,
		options: RequestInit = {}
	): Promise<T> {
		const url = `${this.baseURL}${endpoint}`;
		const config: RequestInit = {
			...options,
			headers: {
				...this.getAuthHeaders(),
				...options.headers,
			},
		};

		try {
			const response = await fetch(url, config);
			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || 'API request failed');
			}

			return data;
		} catch (error) {
			console.error('API request error:', error);
			throw error;
		}
	}

	// Authentication endpoints
	async login(username: string, password: string): Promise<AuthResponse> {
		return this.request<AuthResponse>('/auth/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
		});
	}

	async getCurrentAdmin(): Promise<any> {
		return this.request<any>('/auth/me');
	}

	async changePassword(currentPassword: string, newPassword: string): Promise<ApiResponse<any>> {
		return this.request<ApiResponse<any>>('/auth/change-password', {
			method: 'PUT',
			body: JSON.stringify({ currentPassword, newPassword }),
		});
	}

	// Hero Section endpoints
	async getHeroSection(): Promise<HeroData> {
		return this.request<HeroData>('/hero');
	}

	async updateHeroSection(heroData: Partial<HeroData>): Promise<HeroData> {
		return this.request<HeroData>('/hero', {
			method: 'PUT',
			body: JSON.stringify(heroData),
		});
	}

	// FAQ endpoints
	async getFAQs(): Promise<FAQData[]> {
		return this.request<FAQData[]>('/faqs');
	}

	async createFAQ(faqData: { question: string; answer: string }): Promise<FAQData> {
		return this.request<FAQData>('/faqs', {
			method: 'POST',
			body: JSON.stringify(faqData),
		});
	}

	async updateFAQ(id: string, faqData: { question?: string; answer?: string }): Promise<FAQData> {
		return this.request<FAQData>(`/faqs/${id}`, {
			method: 'PUT',
			body: JSON.stringify(faqData),
		});
	}

	async deleteFAQ(id: string): Promise<ApiResponse<any>> {
		return this.request<ApiResponse<any>>(`/faqs/${id}`, {
			method: 'DELETE',
		});
	}

	async reorderFAQs(faqIds: string[]): Promise<FAQData[]> {
		return this.request<FAQData[]>('/faqs/reorder', {
			method: 'PUT',
			body: JSON.stringify({ faqIds }),
		});
	}

	// Health check
	async healthCheck(): Promise<ApiResponse<any>> {
		return this.request<ApiResponse<any>>('/health');
	}
}

// Export singleton instance
export const apiService = new ApiService();
