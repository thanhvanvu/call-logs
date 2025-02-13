import React from "react";
import Image from "next/image";

const steps = [
  {
    text: "In your Facebook page, click the top-right icon to open the dropdown menu.",
    image: "/guide/1.jpg",
  },
  {
    text: 'Click on "Settings & Privacy".',
    image: "/guide/2.jpg",
  },
  {
    text: 'Click on "Download your information".',
    image: "/guide/3.jpg",
  },
  {
    text: "Facebook will take you to another page.",
    image: "/guide/4.jpg",
  },
  {
    text: 'Click on "Download or transfer information".',
    image: "/guide/5.jpg",
  },
  {
    text: "Choose Facebook and then Next.",
    image: "/guide/6.jpg",
  },
  {
    text: 'Click on "Specific types of information".',
    image: "/guide/7.jpg",
  },
  {
    text: 'Select only "Messages" from the list.',
    image: "/guide/8.jpg",
  },
  {
    text: "Choose where you want to save the file.",
    image: "/guide/9.jpg",
  },
  {
    text: "Important: Choose **Format: JSON** and **Media quality: Low**.",
    image: "/guide/10.jpg",
  },
  {
    text: "Wait for the download. Once extracted, your files will look like this.",
    image: "/guide/11.jpg",
  },
  {
    text: "Follow this path to find your JSON file:",
    image: "/guide/12.jpg",
    list: [
      "/your_facebook_activity",
      "/messages",
      "/inbox",
      "/messenger name (e.g., kssf_3333222060082022)",
      "/Your JSON file will be here.",
    ],
  },
];

function Guide() {
  return (
    <div className=" max-w-2xl bg-white mx-auto md:p-5  ">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Facebook Message Download Guide
      </h1>
      {steps.map((step, index) => (
        <div key={index} className="mb-6 border-b pb-4 last:border-none">
          <p className="font-medium text-lg">
            {index + 1}. {step.text}
          </p>
          {step.list && (
            <ul className="list-disc list-inside ml-4 text-gray-700 mt-2">
              {step.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          <Image
            src={step.image}
            alt={`Step ${index + 1}`}
            className="mx-auto mt-3 rounded-lg shadow"
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}

export default Guide;
