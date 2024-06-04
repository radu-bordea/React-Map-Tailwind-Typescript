// Importing necessary modules and components.
import Map from "./components/Map"; // Importing the Map component from the specified location.
import { useState } from "react"; // Importing useState hook from React.
import LocationSearch from "./components/LocationSearch"; // Importing the LocationSearch component from the specified location.
import type { Place } from "./api/Place"; // Importing the Place type from the specified location.

// App component definition.
function App() {
  // State variable to store the selected place.
  const [place, setPlace] = useState<Place | null>(null); // State variable initialized with null.

  return (
    <div className="h-screen bg-gray-700 text-blue-100 w-screen grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
      {/* Main container with 12 columns */}
      <div className="flex flex-col h-full md:col-span-3 overflow-y-auto md:block">
        {/* Flexbox layout on mobile */}
        <div className="h-1/2 w-full md:h-auto md:w-full p-2 overflow-y-auto">
          {/* Child div with 50% height on mobile and auto height on larger screens */}
          <LocationSearch onPlaceClick={(p) => setPlace(p)} />
        </div>
        <div className="h-1/2 w-full md:h-auto md:w-full">
          {/* Child div with 50% height on mobile and auto height on larger screens */}
          <Map place={place} />
        </div>
      </div>
      <div className="hidden md:block md:col-span-9">
        {/* This div will only be visible on medium and larger screens */}
        <Map place={place} />
      </div>
    </div>
  );
  
  
}

export default App; // Exporting the App component as the default export.
