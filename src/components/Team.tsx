import React from "react";
import Avatar from "./Avatar";
import ray from "../assets/ray.jpg";
import vivek from "../assets/vivek.jpg";
import jarry from "../assets/jarry.jpg";
import bonnie from "../assets/bonnie.jpg";
import charlotte from "../assets/charlotte.jpg";
import kyle from "../assets/kyle.jpg";
import noah from "../assets/noah.jpg";
import daniel from "../assets/daniel.jpg";
import erin from "../assets/erin.jpg";
import belinda from "../assets/belinda.jpg";
import mayo from "../assets/mayo.jpg";
import bruce from "../assets/bruce.jpg";
import sophia from "../assets/sophia.jpg";
import izzie from "../assets/izzie.jpg";
import bianca from "../assets/bianca.jpg";
import joy from "../assets/joy.jpg";
import grace from "../assets/grace.jpg";
import ana from "../assets/ana.jpg";
import sarah from "../assets/sarah.jpg";
import dennis from "../assets/dennis.jpg";
import { AiOutlineContacts } from "react-icons/ai";
// import { CiGlobe } from "react-icons/ci";

const members = [
  {
    name: "Ray Wang",
    title: "President",
    image: ray,
  },
  {
    name: "Vivek Jariwala",
    title: "President",
    image: vivek,
  },
  {
    name: "Jarry Wu",
    title: "Design & Community",
    image: jarry,
  },
  {
    name: "Bonnie Qiu",
    title: "Design & Community",
    image: bonnie,
  },
  {
    name: "Charlotte Lemon",
    title: "Design & Community",
    image: charlotte,
  },
  {
    name: "Kyle Chen",
    title: "Development",
    image: kyle,
  },
  {
    name: "Noah Xu",
    title: "Development",
    image: noah,
  },
  {
    name: "Daniel Pang",
    title: "Events",
    image: daniel,
  },
  {
    name: "Erin Hu",
    title: "Expedition",
    image: erin,
  },
  {
    name: "Belinda Zhao",
    title: "Expedition",
    image: belinda,
  },
  {
    name: "Mayo Olusanya",
    title: "Events",
    image: mayo,
  },
  {
    name: "Bruce Liu",
    title: "Events",
    image: bruce,
  },
  {
    name: "Sophia Ma",
    title: "Events",
    image: sophia,
  },
  {
    name: "Izzie Pewarchuk",
    title: "Flagship",
    image: izzie,
  },
  {
    name: "Bianca Bhardwaj",
    title: "Flagship",
    image: bianca,
  },
  {
    name: "Joy Zheng",
    title: "Mentorship",
    image: joy,
  },
  {
    name: "Grace Zhou",
    title: "Mentorship",
    image: grace,
  },
  {
    name: "Ana Balteanu",
    title: "Mentorship",
    image: ana,
  },
  {
    name: "Sarah Huang",
    title: "Social",
    image: sarah,
  },
  {
    name: "Dennis Zhang",
    title: "Social",
    image: dennis,
  },
];
const Team = () => {
  return (
    <div
      id="team"
      className="bg-[#E9F2EB] min-h-screen flex flex-col items-center justify-center"
    >
      <p
        style={{ fontFamily: "RedFive Regular" }}
        className="mb-8 text-2xl text-iveyGreen text-left w-full max-w-3xl pl-4"
      >
        2024-2025 Exec Team
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-2">
        {members.map((member, index) => (
          <Avatar
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </div>
      <br></br>

      <div className="flex items-center space-x-2 mt-4">
        <a
          href="https://wheatsnackbread.github.io/iveytechclub.ca/alumni"
          rel="noreferrer"
          target="_blank"
          className="flex items-center space-x-2 border border-iveyGreen rounded-md px-4"
        >
          <AiOutlineContacts
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-iveyGreen"
            size={50}
          />
          <span className="text-iveyGreen">Connect with Alumni {""}</span>
        </a>
      </div>
    </div>
  );
};

export default Team;
