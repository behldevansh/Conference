"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight, PiArrowRight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    text: "250+",
    subtext: "IEEE Members",
  },
  {
    text: "20+",
    subtext: "IEEE Awards",
  },
  {
    text: "80+",
    subtext: "IEEE Events",
  },

  {
    header: "Previous Conferences",
    subheading:
      "Wide variety of conferneces have been held in IEEE NSUT. Here are some of the previous conferences. ",

    image: "/images/hero2.jpg",
  },

  {
    header: "Our Speakers",
    subheading:
      "We have a wide variety of speakers from all around the world. Here are some of the speakers who have spoken at our events.",
    image: "/images/teacher.jpg",
  },

  {
    icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
    title: "Write, plan, share. With IEEE at your side.",
    description:
      "Welcome to 3rd International Conference on Signals, Machines and Automation (SIGMA-24)",
    images: [
      { title: "NSUT Campus", picture: "/images/campus.png" },
      {
        title: "Best Tourist Attractions",
        picture: "/images/india_gate.png",
      },
      { title: "Conference in Delhi", picture: "/images/conference.png" },
      { title: "Memborable experiences", picture: "/images/memorable_experiences.png" },
      { title: "Tech Festival", picture: "/images/techweek.png" },
    ],
  },
  {
    userName: "Neha Sharma",
    userText: (
      <div className="md:mt-6">
        The conferences are very informative and the speakers are very well known in their respective fields.
      </div>
    ),
  },
  {
    userName: "Rahul Shrivastava",
    userText: (
      <div className="md:mt-6">
        The events are very well organized and the speakers are very well known in their respective fields.
      </div>
    ),
  },
  {
    userName: "Jaspreet Singh",
    userText: (
      <div className="md:mt-6">
        The events are very well organized and the speakers are very well known in their respective fields.
      </div>
    ),
  },
];

const Venue = () => {
  const ref = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDotClick = (index: any) => {
    setActiveImageIndex(index);
  };

  return (
    <>
      <div className="pt-20  xl:pt-24 flex justify-center items-center flex-col ">
        <div className="text-3xl w-3/4 xl:text-5xl font-medium xl:w-1/2 text-center">
          Venue and Nearby attraction
        </div>
        <div className="py-4 px-10  xl:w-1/2 2xl:w-1/3 md:w-2/3 text-center">
          NSUT is a state university located in Dwarka, Delhi, India. In 2018,
          the institute was granted university status, changing its name to
          Netaji Subhas University of Technology (NSUT).
        </div>
        <div className="grid grid-cols-12 md:row-span-2 gap-4 xl:gap-6 mt-8 px-8  md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`
              col-span-12
              ${
                index <= 2
                  ? "md:col-span-6 lg:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex"
                  : index <= 4
                  ? "md:col-span-6 bg-[#f6f5f4] p-6 rounded-xl flex"
                  : index === 5
                  ? " md:col-span-6  lg:col-span-8  lg:row-span-3    bg-[#f6f5f4] p-6 rounded-xl "
                  : index > 5
                  ? "col-span-12 lg:col-span-4  md:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex-col "
                  : "l"
              }
            `}
            >
              {index <= 2 ? (
                <div className="flex flex-col">
                  <div className=" text-5xl font-medium text-sky-600">
                    {tab.text}
                  </div>
                  <div className="text-sm">{tab.subtext}</div>
                </div>
              ) : index <= 4 ? (
                <div>
                  <div className="text-2xl font-medium">{tab.header}</div>
                  <div className="text-sm mt-2">{tab.subheading}</div>
                  <div className="flex justify-center items-center flex-col">
                    <Image
                      src={tab.image || ""}
                      width={1025}
                      height={500}
                      alt="logo"
                      className="w-full  rounded-xl p-10 xl:p-20"
                    />
                  </div>
                </div>
              ) : index === 5 ? (
                <>
                  {tab.images && (
                    <div className="flex justify-center items-center flex-col ">
                      <Image
                        src={tab.images[activeImageIndex].picture}
                        alt={`${tab.images[activeImageIndex].title} Image`}
                        width={1025}
                        height={500}
                        className="w-full rounded-xl "
                      />

                      <div>
                        <div className="text-xl font-medium mt-10 md:mt-0  pb-4">
                          {tab.images[activeImageIndex].title}
                        </div>
                      </div>

                      <div className="flex space-x-2 xl:space-x-6 xl:mt-10">
                        {tab.images.map((image, index) => (
                          <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`${
                              index === activeImageIndex
                                ? "p-2 rounded-full bg-green-400 "
                                : "  p-2 rounded-full bg-blue-400"
                            }  `}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                index > 5 && (
                  <>
                    <div className="flex  flex-col">
                    </div>
                    <div className="text-xl font-normal ">{tab.userName}</div>
                    <div className="text-sm font-normal mt-10 md:mt-0  pb-4">
                      {tab.userText}
                    </div>
                  </>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Venue;
