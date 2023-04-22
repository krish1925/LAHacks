import React from "react";
import Nav from "../components/Nav";

function Itinenary() {
    return (
      <div >
          <Nav />
          <body style={{ margin: '0.5% 35%' }}>
    <h1>Sample Itinerary</h1>
    <ul>
        <li><strong>Day 1:</strong> Arrival in City</li>
        <ul>
            <li>Check-in to hotel</li>
            <li>Explore the city</li>
            <li>Dinner at local restaurant</li>
        </ul>
        <li><strong>Day 2:</strong> City Tour</li>
        <ul>
            <li>Breakfast at hotel</li>
            <li>Visit local museum</li>
            <li>Shopping at the markets</li>
            <li>Lunch at famous local restaurant</li>
            <li>City walking tour</li>
            <li>Dinner at rooftop restaurant with city view</li>
        </ul>
        <li><strong>Day 3:</strong> Outdoor Adventure</li>
        <ul>
            <li>Breakfast at hotel</li>
            <li>Hiking to scenic viewpoint</li>
            <li>Lunch at mountain top restaurant</li>
            <li>Paragliding adventure</li>
            <li>Dinner at hotel</li>
        </ul>
        <li><strong>Day 4:</strong> Departure</li>
        <ul>
            <li>Check-out from hotel</li>
            <li>Transfer to airport</li>
            <li>Departure flight</li>
        </ul>
    </ul>
</body>
        
      </div>
    );
  }
  
  
export default Itinenary;