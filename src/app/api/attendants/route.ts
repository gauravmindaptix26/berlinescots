import { NextResponse } from "next/server";
import { fetchAttendants } from "../../../lib/attendants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") ?? "1");
  const limit = Number(searchParams.get("limit") ?? "12");
  const language = (searchParams.get("language") ?? "de") as "de" | "en";
  const country = searchParams.get("country") ?? "de";
  const lat = Number(searchParams.get("lat") ?? "52.447942");
  const lng = Number(searchParams.get("lng") ?? "13.376429");

  const data = await fetchAttendants({
    page,
    limit,
    language,
    country,
    lat,
    lng,
  });

  if (!data) {
    return NextResponse.json({ items: [] }, { status: 502 });
  }

  return NextResponse.json(data, { status: 200 });
}
