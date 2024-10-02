// pages/contact.js
import React from 'react';

const Contact = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Contact Page</h1>
      <p className="text-lg">Data fetched from server-side: {data}</p>
    </div>
  );
};

export async function getServerSideProps() {
  const data = 'Contact page with SSR data!';
  return { props: { data } };
}

export default Contact;
