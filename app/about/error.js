// app/about/error.js
"use client";

import React from "react";

export default function AboutError({ error, reset }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h1>
            <p className="text-lg text-gray-700 mb-6">{error.message}</p>
            <button
                onClick={() => reset()}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Try Again
            </button>
        </div>
    );
}
