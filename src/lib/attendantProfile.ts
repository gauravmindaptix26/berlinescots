const BB_BASE_URL = "https://bb-escort.de";

export type InternalAttendantProfile = {
  slug: string;
  name: string;
  image: string | null;
  height: string;
  age: string;
  cupSize: string;
  origin: string;
  sexualOrientation: string;
  languages: string;
  canDoForYou: string;
  toysAndOutfits: string;
  honorarium: string;
  meetingLocations: string;
  travelCosts: string;
  bookingUrl: string;
};

function extract(re: RegExp, text: string) {
  return re.exec(text)?.[1] ?? null;
}

function clean(value: string) {
  return value.replace(/\\n/g, " ").replace(/\\\//g, "/").trim();
}

export async function fetchInternalAttendantProfile(
  slug: string
): Promise<InternalAttendantProfile | null> {
  const safeSlug = slug.trim().toLowerCase();
  if (!safeSlug) return null;

  const res = await fetch(`${BB_BASE_URL}/escort-dame/${encodeURIComponent(safeSlug)}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;

  const html = await res.text();
  const marker = `\\"slug\\":\\"${safeSlug}\\"`;
  const idx = html.indexOf(marker);
  if (idx < 0) return null;

  const chunk = html.slice(Math.max(0, idx - 180000), Math.min(html.length, idx + 260000));

  const name =
    clean(extract(/\\"name\\":\\"([^\\"]+)\\"/, chunk) ?? "") ||
    safeSlug
      .split("-")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");

  const image =
    clean(extract(/\\"lg\\":\\"([^\\"]+)\\"/, chunk) ?? "") ||
    clean(extract(/\\"xs\\":\\"([^\\"]+)\\"/, chunk) ?? "") ||
    null;

  const height = extract(/\\"height\\":(-?\d+(?:\.\d+)?)/, chunk);
  const age = extract(/\\"age\\":(-?\d+(?:\.\d+)?)/, chunk);
  const cup =
    clean(extract(/\\"cupSize\\":\\"([^\\"]+)\\"/, chunk) ?? "") ||
    clean(extract(/\\"breastSize\\":\\"([^\\"]+)\\"/, chunk) ?? "") ||
    clean(extract(/\\"breastScope\\":\\"([^\\"]+)\\"/, chunk) ?? "") ||
    "On request";
  const orientationRaw = clean(extract(/\\"sexualOrientation\\":\\"([^\\"]+)\\"/, chunk) ?? "");
  const orientationMap: Record<string, string> = {
    hetero: "Heterosexual",
    bi: "Bisexual",
    homo: "Homosexual",
  };

  const langMatches = [...chunk.matchAll(/\\"language\\":\\"([^\\"]+)\\"/g)].map((m) => m[1].toLowerCase());
  const langs = Array.from(new Set(langMatches)).map((code) => {
    if (code === "de") return "German";
    if (code === "en") return "English";
    if (code === "fr") return "French";
    if (code === "ru") return "Russian";
    return code.toUpperCase();
  });

  const toList = (k: string) => {
    const arr = extract(new RegExp(`\\\\"${k}\\\\":\\[(.*?)\\]`, "s"), chunk);
    if (!arr) return [] as string[];
    return Array.from(new Set([...arr.matchAll(/\\"([^\\"]+)\\"/g)].map((m) => clean(m[1]).replace(/[_-]/g, " "))));
  };

  const gos = toList("gos");
  const toys = toList("toys");
  const visits = toList("visits");
  const locationsRaw = extract(/\\"locations\\":\[([\s\S]*?)\]/, chunk) ?? "";
  const locations = Array.from(new Set([...locationsRaw.matchAll(/\\"name\\":\\"([^\\"]+)\\"/g)].map((m) => clean(m[1]))));

  const price = extract(/\\"price\\":(-?\d+(?:\.\d+)?)/, chunk);
  const hours = extract(/\\"hours\\":(-?\d+(?:\.\d+)?)/, chunk);
  const ffm = extract(/\\"ffmPrice\\":(-?\d+(?:\.\d+)?)/, chunk);
  const mmf = extract(/\\"mmfPrice\\":(-?\d+(?:\.\d+)?)/, chunk);
  const extraDay = extract(/\\"perExtraDay\\":(-?\d+(?:\.\d+)?)/, chunk);

  const travelStart = extract(/\\"travelCostStartAfterKm\\":(-?\d+(?:\.\d+)?)/, chunk);
  const travelPer = extract(/\\"travelCostsPerKm\\":(-?\d+(?:\.\d+)?)/, chunk);
  const countries = toList("travelReadyCountries");
  const travelReady = extract(/\\"travelReady\\":(true|false)/, chunk);

  const honorarium = [
    price ? `Base price: EUR ${price}` : null,
    hours ? `Hours: ${hours}` : null,
    ffm ? `FFM: EUR ${ffm}` : null,
    mmf ? `MMF: EUR ${mmf}` : null,
    extraDay ? `Per extra day: EUR ${extraDay}` : null,
  ].filter(Boolean).join(" | ") || "On request";

  const travelCosts = [
    travelStart ? `From ${travelStart} km` : null,
    travelPer ? `EUR ${travelPer} per km` : null,
    countries.length ? `Countries: ${countries.join(", ")}` : null,
    travelReady ? `Travel ready: ${travelReady === "true" ? "Yes" : "No"}` : null,
  ].filter(Boolean).join(" | ") || "On request";

  return {
    slug: safeSlug,
    name,
    image,
    height: height ? `${height} cm` : "On request",
    age: age ?? "On request",
    cupSize: cup,
    origin: "On request",
    sexualOrientation: orientationRaw ? orientationMap[orientationRaw] ?? orientationRaw : "On request",
    languages: langs.length ? langs.join(", ") : "On request",
    canDoForYou: gos.length ? gos.join(", ") : "On request",
    toysAndOutfits: toys.length ? `Toys: ${toys.join(", ")}` : "On request",
    honorarium,
    meetingLocations: [
      locations.length ? locations.join(", ") : null,
      visits.length ? visits.join(", ") : null,
    ].filter(Boolean).join(" | ") || "On request",
    travelCosts,
    bookingUrl: `${BB_BASE_URL}/escort-dame/${safeSlug}/verfuegbarkeiten`,
  };
}
