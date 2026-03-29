export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Black Swan Wheelchair Taxis",
  "image": "https://picsum.photos/seed/taxi/800/600",
  "@id": "",
  "url": "https://blackswantaxis.com.au",
  "telephone": "+61494184048",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Perth City",
    "addressLocality": "Perth",
    "addressRegion": "WA",
    "postalCode": "6000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -31.9505,
    "longitude": 115.8605
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "City",
    "name": "Perth"
  },
  "description": "Premium wheelchair taxi and NDIS transport services in Perth. Specialising in accessible airport transfers and hospital transport."
};

export const PERTH_SUBURBS = [
  "Perth CBD", "Northbridge", "Subiaco", "Leederville", "Mount Lawley",
  "Fremantle", "Cottesloe", "Scarborough", "Joondalup", "Mandurah",
  "Midland", "Armadale", "Cannington", "Victoria Park", "South Perth",
  "Burswood", "Claremont", "Nedlands", "Applecross", "Rockingham"
];

export const CONTACT_PHONE = "0494 184 048";
export const CONTACT_EMAIL = "blackswantaxiswa@gmail.com";
