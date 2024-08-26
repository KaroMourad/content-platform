import { API } from "..";
import { ResponseData } from "../types";
import { UnsplashImageData } from "./types";

const API_CLIENT_ID = import.meta.env.VITE_API_CLIENT_ID;

const PHOTOS = "/photos";
const SEARCH_PHOTOS = "/search/photos";

const UNSPLASH_API_AUTHORIZATION = `Client-ID ${API_CLIENT_ID}`;
const UNSPLASH_API_HEADERS = {
  Authorization: UNSPLASH_API_AUTHORIZATION,
};

/**
 * Fetch a list of images from Unsplash
 * @param {number} page - The page number to fetch
 * @param {number} perPage - Number of images per page
 * @returns {Promise} - Resolves to an array of images
 */
export const fetchImages = async (
  page = 1,
  perPage = 10
): Promise<ResponseData<UnsplashImageData[]>> => {
  return await API.get<UnsplashImageData[]>(PHOTOS, {
    params: { page: `${page}`, per_page: `${perPage}` },
    headers: UNSPLASH_API_HEADERS,
  });
};

/**
 * Fetch a single image from Unsplash
 * @param {string} id - The image ID
 * @returns {Promise} - Resolves to an image object
 */

export const fetchImage = async (
  id: string
): Promise<ResponseData<UnsplashImageData[]>> => {
  try {
    const data = await API.get<UnsplashImageData[]>(PHOTOS, {
      params: { id: `${id}` },
      headers: UNSPLASH_API_HEADERS,
    });
    return data;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};

/**
 * Search for images on Unsplash
 * @param {string} query - The search query (e.g., "nature")
 * @param {number} page - The page number to fetch
 * @param {number} perPage - Number of images per page
 * @returns {Promise<UnsplashImage[]>} - Resolves to an array of images
 */
export const searchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 10
): Promise<ResponseData<UnsplashImageData[]>> => {
  try {
    const data = await API.get<UnsplashImageData[]>(SEARCH_PHOTOS, {
      params: { query, page: `${page}`, per_page: `${perPage}` },
      headers: UNSPLASH_API_HEADERS,
    });
    return data;

    // return data.results; // Unsplash search results are in the 'results' field
  } catch (error) {
    console.error("Error searching images:", error);
    // Throwing the error again after logging it
    throw new Error(`Failed to search images on Unsplash: ${error}`);
  }
};
