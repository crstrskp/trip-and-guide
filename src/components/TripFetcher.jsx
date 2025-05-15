import React from "react";

export default function TripFetcher({ selectedTrip }) {
    if (!selectedTrip) {
        return (
            <div style={{ flex: 1, padding: "2rem" }}>
                <h2>Select a trip to see more details</h2>
            </div>
        );
    }

    return (
        <div style={{ flex: 1, padding: "2rem" }}>
            <h2>{selectedTrip.name}</h2>
            <p><strong>Category:</strong> {selectedTrip.category}</p>
            <p><strong>Price:</strong> ${selectedTrip.price}</p>
            <p><strong>Start:</strong> {new Date(selectedTrip.starttime).toLocaleString()}</p>
            <p><strong>End:</strong> {new Date(selectedTrip.endtime).toLocaleString()}</p>
            <p><strong>Location:</strong> {selectedTrip.latitude}, {selectedTrip.longitude}</p>
            <h3>Guide Info</h3>
            <p>{selectedTrip.guide.firstname} {selectedTrip.guide.lastname}</p>
            <p>Email: {selectedTrip.guide.email}</p>
            <p>Phone: {selectedTrip.guide.phone}</p>
            <p>Experience: {selectedTrip.guide.yearsOfExperience} years</p>
        </div>
    );
}
