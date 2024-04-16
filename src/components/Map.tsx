// Importing the Place type from the specified location.
import type { Place } from "../api/Place";

// Defining props interface for Map component.
interface MapProps {
  place: Place | null; // The place to be displayed on the map, or null if no place is selected.
}

// Map component definition.
export default function Map({ place }: MapProps) {
  // Rendering the Map component.
  return <div>Map</div>; // Placeholder for the map display.
}
