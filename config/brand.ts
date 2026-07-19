import type { BrandConfig } from "@/types/brand";

export const BRAND: BrandConfig = {
  businessName: "TILLY JEWELLERY",
  tagline: "Exquisite Jewellery in Chalakudy",
  description:
    "TILLY JEWELLERY is Chalakudy's trusted destination for gold, diamond and silver jewellery. Serving Chalakudy with timeless craftsmanship and exquisite collections for every celebration.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo:
    "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description:
        "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 0, loopEnd: 8 },
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description:
        "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്‍.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 32, loopEnd: 40 },
    },
    {
      quote: "ചാലക്കുടിയുടെ ഹൃദയത്തിൽ നിന്ന്.",
      description:
        "ഈ നാടിന്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 16, loopEnd: 24 },
    },
  ],

  storeImages: [
    "/images/store1.webp",
    "/images/store2.webp",
    "/images/store3.webp",
    "/images/store4.webp",
  ],

  address: "Annarani Shopping Complex, Railway Station Rd, Chalakudy, Kerala 680307",
  city: "Chalakudy",
  state: "Kerala",
  pincode: "680307",

  phone: "+917736358485",
  whatsapp: "917736358485",
  email: "",

  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=TILLY%20JEWELLERY&query_place_id=ChIJt9nnv_ADCDsR3ce9cSlTWiE",

  openingHours: "Mon–Sat: 9:30 AM – 8:00 PM · Sunday: 10:00 AM – 7:00 PM",

  instagram: "",
  facebook: "",

  seo: {
    title: "TILLY JEWELLERY | Jewellery Store in Chalakudy",
    description:
      "TILLY JEWELLERY — your trusted destination for gold, diamond and silver jewellery in Chalakudy, Kerala.",
    keywords: [
      "TILLY JEWELLERY",
      "jewellery Chalakudy",
      "gold jewellery Chalakudy",
      "diamond jewellery Chalakudy",
      "silver jewellery Chalakudy",
      "jewellery store Chalakudy",
      "jewellery Kerala",
    ],
    canonical: "https://tilly-jewellery-chalakudy.vercel.app",
    ogImage:
      "/images/store1.webp",
  },

  faq: [],

  whatsappMessage:
    "Hello TILLY JEWELLERY, I'd like to know more about your jewellery collections.",
};
