import React from 'react';

export const ICONS = {
    Leaf: React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    },
        React.createElement('path', { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }),
        React.createElement('path', { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" })
    ),
    ChevronRight: React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    },
        React.createElement('path', { d: "m9 18 6-6-6-6" })
    )
};

export const PROJECTS = [
    {
        id: 1,
        title: "NEOM",
        description: "A $500 billion mega-city powered entirely by renewable energy, featuring THE LINE - a revolutionary linear city design.",
        imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&auto=format&fit=crop",
        sustainabilityFeatures: ["100% Renewable", "Zero Carbon", "Smart City"]
    },
    {
        id: 2,
        title: "Red Sea Project",
        description: "Luxury tourism development across 90+ pristine islands, designed to be carbon neutral with 100% renewable energy.",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
        sustainabilityFeatures: ["Marine Conservation", "Solar Powered", "Eco-Tourism"]
    },
    {
        id: 3,
        title: "Green Riyadh",
        description: "Planting 7.5 million trees across the capital to reduce temperatures and improve air quality.",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
        sustainabilityFeatures: ["Urban Forestry", "Air Quality", "Climate Action"]
    }
];
