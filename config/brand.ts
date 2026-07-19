import type { BrandConfig } from "@/types/brand";

/**
 * SINGLE SOURCE OF TRUTH.
 *
 * To rebrand this website for a different jewellery business, edit ONLY this
 * file and the Cloudinary asset URLs. No component code should change.
 */
export const BRAND: BrandConfig = {
  businessName: "TILLY JEWELLERY",
  tagline: "Trusted Jewellery Store in Chalakudy",
  description:
    "TILLY JEWELLERY is Chalakudy's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Chalakudy with timeless craftsmanship and elegant designs for every celebration.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo:
    "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description:
        "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ. നിങ്ങളുടെ ഓരോ സാധാരണ ദിവസത്തെയും മനോഹരമാക്കാൻ ഇവ മതിയാകും.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 0, loopEnd: 8 },
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description:
        "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്. അതിസൂക്ഷ്മമായി, തികഞ്ഞ പൂർണ്ണതയോടെ രൂപപ്പെടുത്തിയെടുത്തവ. നിങ്ങളുടെ സ്വപ്നങ്ങൾക്ക് സ്വർണ്ണത്തിൽ ജീവൻ വയ്ക്കുമ്പോൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 32, loopEnd: 40 },
    },
    {
      quote: "ചാലക്കുടിയുടെ ഹൃദയത്തിൽ നിന്ന്.",
      description:
        "ഈ നാടിന്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ. തലമുറകളായി നിങ്ങൾ നൽകുന്ന വിശ്വാസത്തിന് സ്വർണ്ണത്തേക്കാൾ തിളക്കമുണ്ട്.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 16, loopEnd: 24 },
    },
  ],

  storeImages: [
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWll5ZNrWlasy02hnd_Qk2r3vtrHu47Xk-xRwvphNClXWGhVDNkxKlYlANdviaTcoHbzRlot02z5rhhWOEs5wToe_ACymDKod553WwxJiEMxlmHodumi7f_Drhz0RUb86IrsEBy7hbs61uDm=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnahETJui5y7kWi7WSutbvgKTYOyo7iKzdxFX02Zu-p6Eik8V2T1d2YRmGSiKS4B2x_3FII9W_gxF9-cCy86ZZOpkakzwoYkvuvDdpiCO4_1qBNi5MN76IbXZshltsp_SPQOg0t_nYUT6js=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWljPUT1o55AOh2wlG33-28Zyk9rDnYEaOYr3sFut9XdeHZg5u1mj3F1LSWSaeDuht7j7IXz3gD4gnwJDiIhDLUfzctt7GBZxgAkMUV1byfPeHs5qlPJkwmp90yfT6VkzXj_1PJs=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlwaCybdgStfXc5lYmb8PU1Y9S_idsRGxdccFiFpuPHmzwmvxTyfe3c0RfBvo7O_Na8rPGKgVmMASF9xd_656zkW4G8MRvj82ECgebNPNcWVD1Mo9EBScp8az4fL1uZWnzzWq6U=s1600",
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

  openingHours: "Mon–Sat: 9:30 AM – 8:00 PM · Sunday: 10:00 AM – 7:00 PM",

  instagram: "",
  facebook: "",

  seo: {
    title: "TILLY JEWELLERY | Jewellery in Chalakudy",
    description:
      "TILLY JEWELLERY is Chalakudy's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Chalakudy with timeless craftsmanship and elegant designs for every celebration.",
    keywords: [
      "TILLY JEWELLERY",
      "jewellery Chalakudy",
      "gold jewellery Chalakudy",
      "diamond jewellery Chalakudy",
      "silver jewellery Chalakudy",
      "jewellery store Kerala",
    ],
    canonical: "https://tilly-jewellery-chalakudy.vercel.app",
    ogImage:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWll5ZNrWlasy02hnd_Qk2r3vtrHu47Xk-xRwvphNClXWGhVDNkxKlYlANdviaTcoHbzRlot02z5rhhWOEs5wToe_ACymDKod553WwxJiEMxlmHodumi7f_Drhz0RUb86IrsEBy7hbs61uDm=s1600",
  },

  faq: [],

  whatsappMessage:
    "Hello TILLY JEWELLERY, I'd like to know more about your jewellery collections.",
};
