export type AttendantLocation = {
  name: string;
  countryCode: string;
  lat: number;
  lng: number;
};

export type AttendantMedia = {
  xs?: string;
  lg?: string;
  id?: string;
  blurThumbnail?: string | null;
};

export type Attendant = {
  id: string;
  slug: string;
  name: string;
  age: number;
  distance?: string;
  height?: number;
  totalLikes?: number;
  totalRating?: number | null;
  totalReviews?: number;
  mobilityStatus?: string[];
  visits?: string[];
  short_biopic?: string;
  defaultMedia?: AttendantMedia;
  locations?: AttendantLocation[];
};

export type AttendantResponse = {
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
  items: Attendant[];
};

const DEFAULT_LAT = 52.447942;
const DEFAULT_LNG = 13.376429;

export async function fetchAttendants(params?: {
  page?: number;
  limit?: number;
  language?: "de" | "en";
  country?: string;
  lat?: number;
  lng?: number;
}) {
  const {
    page = 1,
    limit = 35,
    language = "de",
    country = "de",
    lat = DEFAULT_LAT,
    lng = DEFAULT_LNG,
  } = params ?? {};

  const url =
    `https://backend.bb-escort.de/api/attendants/search/public` +
    `?page=${page}` +
    `&limit=${limit}` +
    `&lng=${encodeURIComponent(String(lng))}` +
    `&lat=${encodeURIComponent(String(lat))}` +
    `&country=${encodeURIComponent(country)}` +
    `&language=${encodeURIComponent(language)}` +
    `&sortBy=distance_asc` +
    `&includePrices=true`;

  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) {
    return null;
  }
  return (await res.json()) as AttendantResponse;
}
