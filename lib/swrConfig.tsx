import fetch from "cross-fetch";

class FetcherError extends Error {
  info?: any;
  status?: number;
}

// default fetcher for useSWR

export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  if (!response.ok) {
    const error = new FetcherError("An error occured while fetching the data.");
    // Attach extra info to the error object.
    error.info = await response.text();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

let cache: Map<string, any> | undefined;

export const cacheProvider = () => {
  if (!cache) cache = new Map();
  return cache;
};
