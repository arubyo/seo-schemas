const THE_NAME = "The Website Name";
const DESCRIPTION = "";
const TELEPHONE = "";
const IMAGE_URL = "";
const COUNTRY = "";
const REGION = "";
const LOCALE = "";
const POSTCODE = "";
const STREET_ADDRESS = "";
const OPENING_HOURS = "";
const GEO_LATITUDE = "";
const GEO_LONGITUDE = "";
const RATING_COUNT = "";
const RATING_VALUE = ""; 
const SOCIAL_URLS = []; 

const schema = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  name: THE_NAME as string,
  description: DESCRIPTION as string,
  telephone: TELEPHONE as string,
  image: IMAGE_URL as string,
  address: {
    "@type": "PostalAddress",
    addressCountry: COUNTRY as string,
    addressRegion: REGION as string,
    addressLocality: LOCALE as string,
    postalCode: POSTCODE as string,
    streetAddress: STREET_ADDRESS as string,
  },
  openingHours: OPENING_HOURS as string,
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO_LATITUDE as string,
    longitude: GEO_LONGITUDE as string,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING_VALUE as string,
    reviewCount: RATING_COUNT as string,
  },
  sameAs: SOCIAL_URLS as string[],
};
