import React, { useEffect, useState } from "react";

export default function TripDetails({ selectedTrip }) {
    if (!selectedTrip) {
        return (
            // <div style={{ flex: 1, padding: "2rem" }}>
            //     <h2>Select a trip to see more details</h2>
            // </div>
            <></>
        );
    }
    const [tripDetails, setTripDetails] = useState(null);

    useEffect(() => {
        const fetchTripDetails = async () => {
            try {
                const response = await fetch(`https://tripapi.cphbusinessapps.dk/api/trips/${selectedTrip.id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch trip details");
                }
                const data = await response.json();
                setTripDetails(data);
            } catch (error) {
                console.error("Error fetching trip details:", error);
            }
        };

        fetchTripDetails();
    }, [selectedTrip]);


    return (
        <div>{tripDetails}</div>
    );
}
