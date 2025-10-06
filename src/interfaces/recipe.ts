/**
 * Main Recipe interface
 */
export interface Recipe {
  id: number;
  documentId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  ingredientGroups: IngredientGroup[];
  steps: RecipeStep[];
  author: Author;
  servingSize: ServingSize;
  mainDisplay: MediaFile;
}

/**
 * Ingredient Group interface
 */
export interface IngredientGroup {
  id: number;
  groupName: string;
  ingredients: Ingredient[];
}

/**
 * Individual Ingredient interface
 */
export interface Ingredient {
  id: number;
  name: string;
  unit: string;
  amount: IngredientAmount[];
}

/**
 * Ingredient Amount interface
 */
export interface IngredientAmount {
  id: number;
  value: number;
  level: string | null;
}

/**
 * Recipe Step interface
 */
export interface RecipeStep {
  id: number;
  title: string;
  stage: string;
  description: string;
  duration: number | null;
}

/**
 * Author interface
 */
export interface Author {
  id: number;
  documentId: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * Serving Size interface
 */
export interface ServingSize {
  id: number;
  value: number;
  unit: string;
}

/**
 * Media File interface
 */
export interface MediaFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: MediaFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * Media Formats interface
 */
export interface MediaFormats {
  large?: MediaFormat;
  small?: MediaFormat;
  medium?: MediaFormat;
  thumbnail?: MediaFormat;
}

/**
 * Individual Media Format interface
 */
export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
