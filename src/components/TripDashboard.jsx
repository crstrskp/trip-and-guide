import React, { useEffect, useState } from "react";
import TripList from "./TripList";
import TripFetcher from "./TripFetcher";
import TripDetails from "./TripDetails";

export default function TripDashboard() {
    const [trips, setTrips] = useState([]);
    const [selectedTrip, setSelectedTrip] = useState(null);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const response = await fetch("https://tripapi.cphbusinessapps.dk/api/trips");
                if (!response.ok) {
                    throw new Error("Failed to fetch trips");
                }
                const data = await response.json();
                setTrips(data);
            } catch (error) {
                console.error("Error fetching trips:", error);
            }
        };

        fetchTripData();
    }, []);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <TripList trips={trips} onSelectTrip={setSelectedTrip} />
            <TripFetcher selectedTrip={selectedTrip}  />
            <TripDetails selectedTrip={selectedTrip}/>
        </div>
    );
}
