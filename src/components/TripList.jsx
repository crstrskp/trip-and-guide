import React, { useEffect, useState } from "react";
import "./../styling/TripList.css";

export default function TripList({ trips, onSelectTrip }) {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // Filter trips based on selected category
    const filteredTrips = selectedCategory === "all"
        ? trips
        : trips.filter(trip => trip.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className={`trip-sidebar ${isOpen ? "open" : "closed"}`}>
            <button
                onClick={toggleSidebar}
                className="toggle-button"
                title={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
                ☰
            </button>

            {isOpen && (
                <>
                    <h2 className="sidebar-title">Trips</h2>

                    {/* Category Dropdown */}
                    <select
                        className="category-select"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="all">All Categories</option>
                        <option value="beach">Beach</option>
                        <option value="city">City</option>
                        <option value="forest">Forest</option>
                        <option value="lake">Lake</option>
                        <option value="sea">Sea</option>
                        <option value="snow">Snow</option>
                    </select>

                    <ul className="trip-list">
                        {filteredTrips.map((trip) => (
                            <li
                                key={trip.id}
                                onClick={() => onSelectTrip(trip)}
                                className="trip-item"
                            >
                                <strong>{trip.name}</strong><br />
                                <small>{trip.category}</small><br />
                                <small>{new Date(trip.starttime).toLocaleDateString()}</small>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
