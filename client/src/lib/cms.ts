const API_ROOT = (import.meta.env.VITE_WORDPRESS_API_URL || "https://cms.photopicon.com/cms/wp-json/wp/v2").replace(/\/$/, "");
const CACHE_MS = 5 * 60 * 1000;

type RawPost = {
  id: number;
  date?: string;
  slug: string;
  status: string;
  title?: { rendered?: string };
  content?: { rendered?: string };
  excerpt?: { rendered?: string };
  featured_media?: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
  };
  acf?: Record<string, unknown>;
};

export type PiconFormat = {
  id: number;
  title: string;
  dimensions: string;
  priceXof: number;
  description: string;
  category: string;
  frameNote: string;
  order: number;
};

export type PiconFaq = {
  id: number;
  question: string;
  answer: string;
  order: number;
};

export type PiconFeature = {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
  imageUrl?: string;
  imageAlt?: string;
};

const cache = new Map<string, { expires: number; value: RawPost[] }>();
const inFlight = new Map<string, Promise<RawPost[]>>();

function plainText(html = ""): string {
  const element = document.createElement("div");
  element.innerHTML = html;
  return (element.textContent || element.innerText || "").replace(/\s+/g, " ").trim();
}

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function number(value: unknown, fallback = 0): number {
  const parsed = typeof value === "number" ? value : Number.parseFloat(String(value ?? ""));
  return Number.isFinite(parsed) ? parsed : fallback;
}

async function getPosts(type: "picon_format" | "picon_faq" | "picon_feature"): Promise<RawPost[]> {
  const cached = cache.get(type);
  if (cached && cached.expires > Date.now()) return cached.value;
  const existing = inFlight.get(type);
  if (existing) return existing;

  const request = fetch(`${API_ROOT}/${type}?per_page=100&_embed=1`, {
    headers: { Accept: "application/json" },
  })
    .then(async (response) => {
      if (!response.ok) throw new Error(`WordPress REST ${response.status}`);
      const data = (await response.json()) as RawPost[];
      cache.set(type, { value: data, expires: Date.now() + CACHE_MS });
      return data;
    })
    .finally(() => inFlight.delete(type));

  inFlight.set(type, request);
  return request;
}

function custom(post: RawPost, key: string): unknown {
  return post.acf?.[key];
}

export async function fetchPiconFormats(): Promise<PiconFormat[]> {
  const posts = await getPosts("picon_format");
  return posts
    .map((post) => ({
      id: post.id,
      title: plainText(post.title?.rendered),
      dimensions: text(custom(post, "dimensions_cm")),
      priceXof: number(custom(post, "prix_xof"), NaN),
      description: text(custom(post, "description_courte")),
      category: text(custom(post, "categorie")) || "Tirages photo",
      frameNote: text(custom(post, "mention_cadre")),
      order: number(custom(post, "ordre_affichage"), post.id),
    }))
    .filter((item) => item.title && Number.isFinite(item.priceXof))
    .sort((a, b) => a.order - b.order || a.id - b.id);
}

export async function fetchPiconFaqs(): Promise<PiconFaq[]> {
  const posts = await getPosts("picon_faq");
  return posts
    .map((post) => ({
      id: post.id,
      question: plainText(post.title?.rendered),
      answer: plainText(post.content?.rendered),
      order: number(custom(post, "ordre_affichage"), post.id),
    }))
    .filter((item) => item.question && item.answer)
    .sort((a, b) => a.order - b.order || a.id - b.id);
}

export async function fetchPiconFeatures(): Promise<PiconFeature[]> {
  const posts = await getPosts("picon_feature");
  return posts
    .map((post) => {
      const image = post._embedded?.["wp:featuredmedia"]?.[0];
      return {
        id: post.id,
        title: plainText(post.title?.rendered),
        description: plainText(post.excerpt?.rendered || post.content?.rendered),
        icon: text(custom(post, "icone")).toLowerCase(),
        order: number(custom(post, "ordre_affichage"), post.id),
        imageUrl: image?.source_url,
        imageAlt: image?.alt_text,
      };
    })
    .filter((item) => item.title && item.description)
    .sort((a, b) => a.order - b.order || a.id - b.id);
}
