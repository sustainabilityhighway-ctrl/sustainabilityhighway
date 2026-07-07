import { supabase } from './supabaseClient';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

class ApiService {
    private getHeaders() {
        const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
        return {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        };
    }

    private isUsingSupabase() {
        return !API_BASE_URL || API_BASE_URL.includes('undefined');
    }

    async get(endpoint: string) {
        if (this.isUsingSupabase()) {
            if (endpoint === '/blogs') {
                const { data, error } = await supabase
                    .from('Blog')
                    .select('*')
                    .order('created_at', { ascending: false });
                if (error) throw error;
                return { items: data };
            }
            if (endpoint.startsWith('/blogs/')) {
                const id = endpoint.split('/').pop();
                const { data, error } = await supabase
                    .from('Blog')
                    .select('*')
                    .eq('id', id)
                    .single();
                if (error) throw error;
                return data;
            }
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'GET',
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }

    async post(endpoint: string, data: any) {
        if (this.isUsingSupabase() && endpoint === '/blogs') {
            const { data: result, error } = await supabase
                .from('Blog')
                .insert([data])
                .select()
                .single();
            if (error) throw error;
            return result;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        });
        return this.handleResponse(response);
    }

    async patch(endpoint: string, data: any) {
        if (this.isUsingSupabase() && endpoint.startsWith('/blogs/')) {
            const id = endpoint.split('/').pop();
            const { data: result, error } = await supabase
                .from('Blog')
                .update(data)
                .eq('id', id)
                .select()
                .single();
            if (error) throw error;
            return result;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'PATCH',
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        });
        return this.handleResponse(response);
    }

    async delete(endpoint: string) {
        if (this.isUsingSupabase() && endpoint.startsWith('/blogs/')) {
            const id = endpoint.split('/').pop();
            const { error } = await supabase
                .from('Blog')
                .delete()
                .eq('id', id);
            if (error) throw error;
            return { message: 'Deleted successfully' };
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'DELETE',
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }

    private async handleResponse(response: Response) {
        if (response.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('adminToken');
                window.location.href = '/admin/login';
            }
            throw new Error('Unauthorized');
        }
        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            throw new Error('Invalid server response');
        }
        if (!response.ok) {
            throw new Error(data.message || 'API request failed');
        }
        return data;
    }
}

export const api = new ApiService();

