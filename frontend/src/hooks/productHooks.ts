import { useQuery } from '@tanstack/react-query';
import apiClient from '../apiClient';
import { Product } from '../types/Product';

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
  });

// Example hook for fetching a single product by slug
export const useGetProductDetailsBySlugQuery = (slug: string) =>
  useQuery({
    queryKey: ['products', slug],
    queryFn: async () => {
      const { data } = await apiClient.get<Product>(
        `api/products/slug/${slug}`
      );
      return data;
    },
  });
