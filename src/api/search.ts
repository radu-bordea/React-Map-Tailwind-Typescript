// Importing the Place interface from the "./Place" module.
import type { Place } from "./Place";

// Defines the structure of the response received from the search API.
interface SearchResponse {
  features: {            // An array of features containing geometry and properties.
    geometry: {
      coordinates: number[];  // Array of coordinates [longitude, latitude].
    };
    properties: {
      place_id: number;       // Unique identifier for the place.
      display_name: string;   // The display name of the place.
    };
  }[];
}

// Asynchronous function to perform a search based on a term.
export const search = async (term: string) => {
  // Sending a request to the Nominatim search API.
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  );

  // Parsing the JSON response into the defined SearchResponse structure.
  const data: SearchResponse = await res.json();

  // Mapping the received features to Place objects.
  const places: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],  // Corrected the typo in latitude
    };
  });

  // Returning the array of places.
  return places;
};
