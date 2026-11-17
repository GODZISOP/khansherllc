import defaultLogo from '../images/khan-sher-logo.svg';

/**
 * =========================================================================
 * 🌟 GLOBAL SITE CONFIGURATION (CENTRAL CONTROL PANEL)
 * =========================================================================
 * KHAN SHER LLC — Central Brand, Contact & Color Settings
 * =========================================================================
 */

export const siteConfig = {

  // ─────────────────────────────────────────────
  // 🏢 COMPANY IDENTITY
  // ─────────────────────────────────────────────
  companyName:     "KHAN SHER LLC",
  shortName:       "KHAN SHER",
  legalName:       "KHAN SHER LLC",
  ownerFirstName:  "Maaz",
  ownerLastName:   "Khan",
  ownerFullName:   "Maaz Khan",
  tagline:         "Premium Wholesale, General Trading & Global Distribution",
  heroSubtitle:    "Direct manufacturer sourcing, dependable bulk supply chains, and exceptional consumer essentials curated by KHAN SHER LLC.",
  eyebrowStandard: "THE KHAN SHER STANDARD OF EXCELLENCE",

  // ─────────────────────────────────────────────
  // 📞 PHONE, WHATSAPP & EMAIL
  // ─────────────────────────────────────────────
  phonePrimary:    "+966 547900140",        // Top nav display
  phonePrimaryTel: "+966547900140",         // tel: dial link
  phoneDirect:     "+966 547900140",        // Contact page direct line
  phoneDirectTel:  "+966547900140",         // tel: dial link
  whatsappNumber:  "966547900140",          // Numbers only (no + or spaces)
  whatsappDisplay: "+966 547900140",
  email:           "info@khansherllc.com",
  emailSecondary:  "khansherllc@gmail.com",
  website:         "www.khansherllc.com",

  // ─────────────────────────────────────────────
  // 📍 ADDRESS & HUBS
  // ─────────────────────────────────────────────
  address: {
    line1:        "B 102, New Dhoraji Housing, Block 4",
    line2:        "Gulshan Iqbal, Karachi",
    full:         "B 102 New Dhoraji Housing Block 4, Gulshan Iqbal, Karachi",
    cityStateZip: "Gulshan Iqbal, Karachi",
    jurisdiction: "Commercial LLC Registered"
  },
  hubs: {
    originText:   "Dispatched via Global Logistics & Freight Hubs",
    dispatchNote: "Dispatched from our primary international distribution hubs and regional fulfillment centers."
  },

  // ─────────────────────────────────────────────
  // 📖 ABOUT US PAGE
  // ─────────────────────────────────────────────
  about: {
    // Main paragraphs
    mission:      "At KHAN SHER LLC, our mission is to deliver exceptional wholesale value, connecting premier international manufacturers with retailers, commercial distributors, and online merchants worldwide. Founded on the principles of trust, transparency, and trade excellence, we serve as a reliable bridge between global suppliers and growing businesses.",
    b2bNote:      "Whether you operate independent retail stores, supermarket chains, or e-commerce marketplaces, KHAN SHER LLC provides flexible minimums, volume price tiers, and dependable fulfillment. Our team ensures every order meets the highest quality and delivery standards you can count on.",
    sourcingNote: "We pride ourselves on thoughtful sourcing — choosing products that deliver genuine performance, high customer satisfaction, and dependable quality for retail and wholesale partners worldwide.",

    // 3 value cards shown on the About Us page
    cards: [
      {
        title:       "Integrity First",
        description: "Transparent pricing, transparent communication, and verified product authenticity."
      },
      {
        title:       "Logistics Agility",
        description: "Fast customs turnaround, reliable carrier contracts, and multi-hub fulfillment."
      },
      {
        title:       "Partner Centric",
        description: "Dedicated trade managers ready to accommodate customer requirements and custom schedules."
      }
    ],

    // CTA button text on About page
    ctaButton: "Contact Management Desk"
  },

  // ─────────────────────────────────────────────
  // 📞 CONTACT US PAGE — Labels & helper texts
  // ─────────────────────────────────────────────
  contact: {
    sectionTag:   "GET IN TOUCH",
    tagline:      "We are at your service for catalog requests, partnership discussions, or general inquiries.",
    cardTitle:    "Direct Coordinates",
    formTitle:    "Send Us a Message",
    formSuccess:  "Thank you! Your message has been received by KHAN SHER LLC. We will reply within 24 hours.",
    labels: {
      email:      "Email",
      phone:      "Phone Number",
      hub:        "Operating Trade Hub",
      whatsapp:   "WhatsApp Chat",
      management: "Management"
    }
  },

  // ─────────────────────────────────────────────
  // 🦶 FOOTER
  // ─────────────────────────────────────────────
  footer: {
    description:        "Quality products online. Sourcing and distribution dedicated to supplying top tier merchandise with transparent global logistics.",
    operationsLabel:    "Global Distribution & Wholesale Trade Hub",
    newsletterTagline:  "Receive exclusive price updates, catalog drops, and seasonal availability lists.",
    newsletterSuccess:  "✓ Thank you for subscribing to our wholesale bulletin!",
    copyrightSuffix:    "All rights reserved.",
    managedByLabel:     "Global Logistics & Distribution Hub",
    websiteUrl:         "https://www.khansherllc.com",
    domain:             "khansherllc.com",

    // Social media
    socials: [
      { label: "Facebook",  url: "https://facebook.com/" },
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "TikTok",    url: "https://tiktok.com/" }
    ],

    // Footer navigation menu
    menu: [
      { label: "Home",    tab: "home" },
      { label: "Shop",    tab: "home", scrollTo: "featured-products-section" },
      { label: "About",   tab: "about" },
      { label: "Contact", tab: "contact" }
    ]
  },

  // ─────────────────────────────────────────────
  // ⭐ TESTIMONIAL
  // ─────────────────────────────────────────────
  testimonial: {
    quote:  "Partnering with KHAN SHER LLC transformed our wholesale inventory turnover. Top-tier product authenticity, fast fulfillment, and flawless communication.",
    author: "Verified Commercial Trade Partner"
  },

  // ─────────────────────────────────────────────
  // 💰 CURRENCY SYMBOL
  // ─────────────────────────────────────────────
  currencySymbol: "$",

  // ─────────────────────────────────────────────
  // 🖼️ LOGO
  // ─────────────────────────────────────────────
  logo: defaultLogo,

  // ─────────────────────────────────────────────
  // 🎨 COLOR THEME (Luxury Gold & Deep Royal Navy)
  // ─────────────────────────────────────────────
  theme: {
    primaryNavy:   "#04201a",
    secondaryTeal: "#0b3a2e",
    accentTeal:    "#059669",
    accentHover:   "#047857",
    accentGold:    "#10b981",
    bgLight:       "#f8fafc"
  }
};
