import type { Recipe } from '../interfaces/recipe';
import type { Global, DisplayWindow } from '../interfaces';

interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: boolean;
    locale?: string;
  }
  
  /**
   * Fetches data from the Strapi API
   * @param endpoint - The endpoint to fetch from
   * @param query - The query parameters to add to the url
   * @param wrappedByKey - The key to unwrap the response from
   * @param wrappedByList - If the response is a list, unwrap it
   * @returns
   */
  export default async function fetchApi<T>({
    endpoint,
    query,
    wrappedByKey,
    wrappedByList,
    locale,
  }: Props): Promise<T> {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1);
    }
  
    const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);
  
    const headers: Record<string, string> = {
      'Authorization': `Bearer ${import.meta.env.STRAPI_TOKEN}`,
    };
  
    if (locale) {
      url.searchParams.append('locale', locale);
    }
  
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    const res = await fetch(url.toString(), { headers });
    let data = await res.json();
  
    if (wrappedByKey) {
      data = data[wrappedByKey];
    }
  
    if (wrappedByList) {
      data = data[0];
    }
  
    return data as T;
  }

export async function getAllRecipes(locale: string): Promise<Recipe[]> {
    return fetchApi<Recipe[]>({
      endpoint: 'recipes',
      query: {
        "populate[0]": "author",
        "populate[1]": "servingSize",
        "populate[2]": "mainDisplay",
      },
      locale,
      wrappedByKey: 'data',
    });
  }

export async function getRecipe(documentId: string, locale: string): Promise<Recipe> {
    const recipes = await fetchApi<Recipe[]>({
        endpoint: 'recipes',
        query: {
            'filters[documentId][$eq]': documentId,
            'populate[0]': 'ingredientGroups.ingredients.amount',
            'populate[1]': 'steps',
            'populate[2]': 'author',
            'populate[3]': 'servingSize',
            'populate[4]': 'mainDisplay'
        },
        locale,
        wrappedByKey: 'data',
    });
    if (recipes.length > 0) {
        return recipes[0];
    }
    return Promise.reject(`Recipe with documentId ${documentId} not found`);
}

export async function getGlobalData(locale: string): Promise<Global> {
    return fetchApi<Global>({
        endpoint: 'global',
        query: {
            'populate[0]': 'menu',
            'populate[1]': 'logo',
            'populate[2]': 'favicon',
        },
        wrappedByKey: 'data',
        locale,
    });
}

export async function getDisplayWindows(locale: string): Promise<DisplayWindow[]> {
    return fetchApi<DisplayWindow[]>({
        endpoint: 'display-windows',
        query: {
            'populate[0]': 'prices',
            'populate[1]': 'displayMain',
            'populate[2]': 'physicalInformations',
        },
        wrappedByKey: 'data',
        locale,
    });
}