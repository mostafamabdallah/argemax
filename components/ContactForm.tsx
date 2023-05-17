import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="text-white mt-10 font-ITCAVANTGARDESTDThin">
      <div className="relative z-0 w-full mb-6 group">
        <input
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none "
          placeholder="Company name"
          required
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Contact person"
          required
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Email address"
          required
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <textarea
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Your message or question"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white font-medium border border-white px-8 py-2 rounded-full font-ITCAVANTGARDESTDBold"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
