import Image from "next/image";
import React from "react";
import InfoBox from "./info-box";
import Sparkles from "./sparkle";

const TechStackContent: React.FC = () => {
  return (
    <>
      <Image
        alt="profile"
        src="/tech/github-stack.svg"
        width={280}
        height={100}
        className="block lg:hidden text-white cursor-pointer mx-auto mt-2"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.1))",
        }}
      />

      <div className={`hidden lg:grid fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out w-full h-full gap-4 grid-cols-4 grid-rows-1 box-border`}>
        <InfoBox
          title="Mobile"
          description={
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Mobile Tech"
                src="/tech/mobile-stack.svg"
                width={120}
                height={120}
                className="mx-auto mt-4 floating-animation"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))",
                }}
              />
              <p className="text-white text-sm mt-6 text-center">Kotlin, Jetpack Compose, Dart, Flutter</p>
            </div>
          }
          onClick={() => {}}
          isExpanded={true}
          className="bg-[rgb(0,0,0,0.5)] border-gray-700 border-2 hover:border-white text-white flex flex-col items-center justify-center rounded-lg cursor-pointer relative p-6"
        />
        <InfoBox
          title="Frontend"
          description={
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Frontend Tech"
                src="/tech/frontend-stack.svg"
                width={120}
                height={120}
                className="mx-auto mt-4 floating-animation"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))",
                }}
              />
              <p className="text-white text-sm mt-6 text-center">ReactJS, NextJS, TailwindCSS, Vercel</p>
            </div>
          }
          onClick={() => {}}
          isExpanded={true}
          className="bg-[rgb(0,0,0,0.5)] border-gray-700 border-2 hover:border-white text-white flex flex-col items-center justify-center rounded-lg cursor-pointer relative p-6"
        />
        <InfoBox
          title="Backend"
          description={
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Backend Tech"
                src="/tech/backend-stack.svg"
                width={120}
                height={120}
                className="mx-auto mt-4 floating-animation"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))",
                }}
              />
              <p className="text-white text-sm mt-6 text-center">Go, PHP, NestJS, Laravel</p>
            </div>
          }
          onClick={() => {}}
          isExpanded={true}
          className="bg-[rgb(0,0,0,0.5)] border-gray-700 border-2 hover:border-white text-white flex flex-col items-center justify-center rounded-lg cursor-pointer relative p-6"
        />
        <InfoBox
          title="DB & Tools"
          description={
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Tools Tech"
                src="/tech/tools-stack.svg"
                width={120}
                height={120}
                className="mx-auto mt-4 floating-animation"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))",
                }}
              />
              <p className="text-white text-sm mt-6 text-center">MySQL, Postgres, Docker, Supabase</p>
            </div>
          }
          onClick={() => {}}
          isExpanded={true}
          className="bg-[rgb(0,0,0,0.5)] border-gray-700 border-2 hover:border-white text-white flex flex-col items-center justify-center rounded-lg cursor-pointer relative p-6"
        />
      </div>
    </>
  );
};

export const TechStackContentExpanded: React.FC = () => {
  return (
    <div className="">
      <div className={`grid pt-6 transform transition-all duration-700 ease-in-out w-full h-full gap-4 grid-cols-2 grid-rows-2 box-border`}>
        <InfoBox
          title="Mobile"
          showExpandedOnMobile={false}
          description={
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Mobile Tech"
                src="/tech/mobile-stack.svg"
                width={80}
                height={80}
                className="mx-auto mt-4 floating-animation"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))",
                }}
              />
              <p className="text-white text-xs mt-6 text-center">Kotlin, Jetpack Compose, Dart, Flutter</p>
            </div>
          }
          onClick={() => {}}
          isExpanded={true}
          className="border-gray-700 border-2 text-white flex flex-col items-center justify-center rounded-lg cursor-pointer relative p-2 pt-4"
        />
        <InfoBox
          title="Frontend"
          showExpandedOnMobile={false}
          description={
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Frontend Tech"
                src="/tech/frontend-stack.svg"
                width={80}
                height={80}
                className="mx-auto mt-4 floating-animation"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))",
                }}
              />
              <p className="text-white text-xs mt-6 text-center">ReactJS, NextJS, TailwindCSS, Vercel</p>
            </div>
          }
          onClick={() => {}}
          isExpanded={true}
          className="border-gray-700 border-2 text-white flex flex-col items-center justify-center rounded-lg cursor-pointer relative p-2 pt-4"
        />
        <InfoBox
          title="Backend"
          showExpandedOnMobile={false}
          description={
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Backend Tech"
                src="/tech/backend-stack.svg"
                width={80}
                height={80}
                className="mx-auto mt-4 floating-animation"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))",
                }}
              />
              <p className="text-white text-xs mt-6 text-center">Go, PHP, NestJS, Laravel</p>
            </div>
          }
          onClick={() => {}}
          isExpanded={true}
          className="border-gray-700 border-2  text-white flex flex-col items-center justify-center rounded-lg cursor-pointer relative p-2 pt-4"
        />
        <InfoBox
          title="DB & Tools"
          showExpandedOnMobile={false}
          description={
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Tools Tech"
                src="/tech/tools-stack.svg"
                width={80}
                height={80}
                className="mx-auto mt-4 floating-animation"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))",
                }}
              />
              <p className="text-white text-xs mt-6 text-center">MySQL, Postgres, Docker, Supabase</p>
            </div>
          }
          onClick={() => {}}
          isExpanded={true}
          className="border-gray-700 border-2 text-white flex flex-col items-center justify-center rounded-lg cursor-pointer relative p-2 pt-4"
        />
      </div>
    </div>
  );
};

export default TechStackContent;
