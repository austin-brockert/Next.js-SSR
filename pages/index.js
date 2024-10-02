import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [serverlessData, setServerlessData] = useState({ message: '', time: '' });

    useEffect(() => {
        const fetchServerlessData = async () => {
            const response = await fetch('/api/data');
            const data = await response.json();
            setServerlessData(data);
        }

        fetchServerlessData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Next.js with Tailwind CSS!</h1>
            <Link href="/about" className="text-blue-500 underline mb-4">
                Go to About Page
            </Link>
            <Link href="/contact" className="text-blue-500 underline mb-4">
                Go to Contact Page
            </Link>
            <div className="bg-white p-4 rounded shadow">
            <p>Serverless Function Message: {serverlessData.message}</p>
            <p>Current Time: {serverlessData.time}</p>
            </div>
        </div>
    )
}