import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-4xl">
        
        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <div className="text-2xl mb-4">📱</div>
          <h2 className="text-xl font-semibold text-gray-700">WhatsApp</h2>
          <p className="text-gray-600 mt-2">Chat with us on WhatsApp</p>
          <a
            href="https://wa.me/yourwhatsappnumber"
            className="mt-4 text-green-500 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            +123 456 7890
          </a>
        </div>

        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <div className="text-2xl mb-4">📧</div>
          <h2 className="text-xl font-semibold text-gray-700">Email</h2>
          <p className="text-gray-600 mt-2">Send us an email</p>
          <a
            href="mailto:youremail@example.com"
            className="mt-4 text-blue-500 font-medium hover:underline"
          >
            youremail@example.com
          </a>
        </div>

        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <div className="text-2xl mb-4">📞</div>
          <h2 className="text-xl font-semibold text-gray-700">Call Us</h2>
          <p className="text-gray-600 mt-2">Get in touch over the phone</p>
          <a
            href="tel:+1234567890"
            className="mt-4 text-red-500 font-medium hover:underline"
          >
            +123 456 7890
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
