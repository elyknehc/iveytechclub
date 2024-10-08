import React from "react";
import Image from "next/image";
import background from "../assets/Square pattern.png";

const StatItem = ({
  number,
  description,
}: {
  number: string;
  description: string;
}) => (
  <div className="text-center">
    <p
      style={{ fontFamily: "RedFive Regular" }}
      className="text-5xl text-iveyGreen mb-2"
    >
      {number}
    </p>
    <p className="font-syne text-iveyGreen">{description}</p>
  </div>
);

const OurNumbers = () => {
  const stats = [
    { number: "150+", description: "Club Members" },
    { number: "67%", description: "Dual Degree Students" },
    { number: "200+", description: "Students in Mentorship Programs" },
  ];
  return (
    <div className="bg-teal-50 py-48 px-4 relative">
      {" "}
      <Image
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0" // Added object-cover and z-0
        draggable="false"
      />
      <div className="relative max-w-4xl mx-auto z-10">
        {" "}
        {/* Added relative and z-10 */}
        <h2
          style={{ fontFamily: "RedFive Regular" }}
          className="text-2xl font-redfive font-bold text-iveyGreen mb-8 text-left"
        >
          OUR NUMBERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-syne">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
