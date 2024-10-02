import React from "react";

const About = ({ data }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">About Page</h1>
            <p className="text-lg">Data fetched from server-side: {data}</p>
        </div>
    );
}

export async function getServerSideProps() {
    const data = 'Hello, this is SSR data!';
    return { props: { data } };
}

export default About;