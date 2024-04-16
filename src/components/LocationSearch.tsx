// Importing necessary modules and types from React and other files.
import { Fragment, useState } from "react";
import type { Place } from "../api/Place"; // Importing the Place type from the specified location.
import { search } from "../api/search"; // Importing the search function from the specified location.

// Defining props interface for LocationSearch component.
interface LocationSearchProps {
  onPlaceClick: (place: Place) => void; // Function to handle place click event.
}

// LocationSearch component definition.
export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  // State variables for storing search term and search results.
  const [term, setTerm] = useState(""); // State variable for search term.
  const [places, setPlaces] = useState<Place[]>([]); // State variable for search results.

  // Function to handle form submission.
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Preventing default form submission behavior.

    // Performing search using the entered term and updating the state with the results.
    const results = await search(term);
    setPlaces(results);
  };

  // Rendering the LocationSearch component.
  return (
    <div>
      {/* Search form */}
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      {/* Displaying found locations */}
      <h1 className="font-bold mt-6">Found Locations</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              {/* Displaying place name */}
              <p className="text-sm">{place.name}</p>
              {/* Button to select the place */}
              <button
                className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
                onClick={() => onPlaceClick(place)}
              >
                Go
              </button>
              {/* Divider */}
              <div className="border-b w-full col-span-2" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
