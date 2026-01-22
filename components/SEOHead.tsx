import React from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    schema?: any;
}

export default function SEOHead(props: SEOProps) {
    // This component is deprecated in favor of Next.js Metadata API.
    // Kept to prevent import errors during migration.
    return null;
}
