import { API } from "..";
import { ResponseData } from "../api.types";
import { UnsplashPhotoData } from "./Photos.types";

const API_CLIENT_ID = import.meta.env.VITE_API_CLIENT_ID;

const PHOTOS = "/photos";
const SEARCH_PHOTOS = "/search/photos";

const UNSPLASH_API_AUTHORIZATION = `Client-ID ${API_CLIENT_ID}`;
const UNSPLASH_API_HEADERS = {
  Authorization: UNSPLASH_API_AUTHORIZATION,
};

/**
 * Fetch a list of photos from Unsplash
 * @param {number} page - The page number to fetch
 * @param {number} perPage - Number of photos per page
 * @returns {Promise} - Resolves to an array of photos
 */
export const fetchPhotos = async (
  page = 1,
  perPage = 10
): Promise<ResponseData<UnsplashPhotoData[]>> => {
  return await API.get<UnsplashPhotoData[]>(PHOTOS, {
    params: { page: `${page}`, per_page: `${perPage}` },
    headers: UNSPLASH_API_HEADERS,
  });
};

/**
 * Fetch a single photo from Unsplash
 * @param {string} id - The photo ID
 * @returns {Promise} - Resolves to an photo object
 */

export const fetchPhoto = async (
  id?: string
): Promise<ResponseData<UnsplashPhotoData>> => {
  return await API.get<UnsplashPhotoData>(`${PHOTOS}/${id}`, {
    headers: UNSPLASH_API_HEADERS,
  });
};

/**
 * Search for photos on Unsplash
 * @param {string} query - The search query (e.g., "nature")
 * @param {number} page - The page number to fetch
 * @param {number} perPage - Number of photos per page
 * @returns {Promise<UnsplashImage[]>} - Resolves to an array of photos
 */
export const searchPhotos = async (
  query: string,
  page: number = 1,
  perPage: number = 10
): Promise<ResponseData<UnsplashPhotoData[]>> => {
  return await API.get<UnsplashPhotoData[]>(SEARCH_PHOTOS, {
    params: { query, page: `${page}`, per_page: `${perPage}` },
    headers: UNSPLASH_API_HEADERS,
  });
};
