// Importing necessary modules and components.
import Map from "./components/Map"; // Importing the Map component from the specified location.
import { useState } from "react"; // Importing useState hook from React.
import LocationSearch from "./components/LocationSearch"; // Importing the LocationSearch component from the specified location.
import type { Place } from "./api/Place"; // Importing the Place type from the specified location.

// App component definition.
function App() {
  // State variable to store the selected place.
  const [place, setPlace] = useState<Place | null>(null); // State variable initialized with null.

  // Rendering the App component.
  return (
    <div className="h-screen bg-gray-700 text-blue-100  w-screen grid grid-cols-12">
      {/* Main container with 12 columns */}
      {/* Column for LocationSearch component */}
      <div className="col-span-4 p-2">
        {/* Spanning 3 columns with padding */}
        <LocationSearch onPlaceClick={(p) => setPlace(p)} /> {/* Rendering the LocationSearch component and passing a function to handle place click event */}
      </div>
      {/* Column for Map component */}
      <div className="col-span-8">
        {/* Spanning 9 columns */}
        <Map place={place} /> {/* Rendering the Map component and passing the selected place */}
      </div>
    </div>
  );
}

export default App; // Exporting the App component as the default export.
