"use client";

import { AiFillProject } from "react-icons/ai";
import { ParallaxSection } from "@/components/ParallaxSection";
import { LanguageDictionary } from "@/lib/dictionary";
import { Typewriter } from "nextjs-simple-typewriter";
import { FaCode } from "react-icons/fa";
import {
  Button,
  Input,
  Image,
  Divider,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Tooltip,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { PageScrollHandler } from "@/components/PageScrollHandler";
import { toast } from "sonner";

export function SlidesPortfolio({
  params: { dictionary },
}: {
  params: { dictionary: LanguageDictionary };
}) {
  const { home, about } = dictionary;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  return (
    <PageScrollHandler>
      <ParallaxSection sectionID="home">
        <div className="container">
          <main className="flex min-h-screen w-full items-center justify-center flex-col">
            <div className="flex min-w-full flex-col items-center justify-between xl:flex-row-reverse">
              <div className="">
                {/* Images or stuff here */}
                <Image
                  src={"/assets/landing/FSicon.png"}
                  width={300}
                  height={300}
                  alt="Cool blury Pat"
                  className=" shadow-2xl rounded-lgs"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold">{home.title}</h1>
                <p className="text-2xl text-gray-500 md:text-4xl">
                  I
                  <Typewriter
                    words={home.contentTexts}
                    cursor
                    cursorBlinking={true}
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    loop={-1}
                  />
                </p>
                <p className="md:w-unit-9xl text-gray-700 dark:text-slate-300">
                  {home.subtitle}
                </p>
              </div>
            </div>
            {/* Scroll down */}
            <div className="flex flex-col justify-center items-center bottom-0 absolute">
              <div className="flex flex-row justify-center items-center">
                <Button
                  className="m-2 bg-transparent text-4xl  hover:text-slate-600 animate-bounce"
                  isIconOnly
                  onClick={() => setCurrentPage(1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </ParallaxSection>
      <ParallaxSection sectionID="about">
        <div className="container ">
          <main className="flex min-h-screen w-full items-center justify-center flex-col">
            <div className="flex min-w-full flex-col items-center justify-between xl:flex-row">
              <div className="flex flex-col justify-center items-center max-w-md">
                <div className=" text-8xl">
                  <FaCode />
                </div>
                <p className="font-bold text-2xl md:text-4xl">{about.name}</p>
                <p className="text-medium text-gray-500">{about.city}</p>
                <Divider />
                <div className="flex flex-row justify-center items-center">
                  {about.links.map((link) => (
                    <Button
                      className="m-2 bg-transparent text-2xl  hover:text-slate-600"
                      key={link.name}
                      isIconOnly
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d={link.icon} />
                      </svg>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col max-w-xl justify-start ">
                <h1 className="text-xl font-bold text-left mb-2">
                  {about.background.title}
                </h1>
                <p className="text-gray-500 break-normal text-left mb-2">
                  {about.background.description}
                </p>
                <h1 className="text-xl font-bold text-left my-2">
                  {about.skills.title}
                </h1>

                <div className="flex flex-row flex-wrap justify-start">
                  <ul className="flex list-none gap-2 mb-2">
                    <li className="flex flex-col">
                      <b className="text-start">Languges</b>
                      <ul>
                        {about.skills.items.programming_languages.map(
                          (skill) => (
                            <div
                              className="flex m-2 items-center align-middle justify-start"
                              key={skill[1]}
                            >
                              <Image
                                src={`https://skillicons.dev/icons?i=${skill[0]}`}
                                className="w-6 h-6 object-contain rounded-none"
                                alt={`icon for ${skill[1]}`}
                              />
                              <p className="ml-2">{skill[1]}</p>
                            </div>
                          )
                        )}
                      </ul>
                    </li>
                    <li className="flex flex-col">
                      <b className="text-start">Frameworks</b>
                      <ul>
                        {about.skills.items.frameworks.map((skill) => (
                          <div
                            className="flex m-2 items-center align-middle justify-start"
                            key={skill[1]}
                          >
                            <Image
                              src={`https://skillicons.dev/icons?i=${skill[0]}`}
                              className="w-6 h-6 object-contain rounded-none"
                              alt={`icon for ${skill[1]}`}
                            />
                            <p className="ml-2">{skill[1]}</p>
                          </div>
                        ))}
                      </ul>
                    </li>

                    <li className="flex flex-col">
                      <b className="text-start">Tools</b>
                      <ul>
                        {about.skills.items.tools.map((skill) => (
                          <div
                            className="flex m-2 items-center align-middle justify-start"
                            key={skill[1]}
                          >
                            <Image
                              src={`https://skillicons.dev/icons?i=${skill[0]}`}
                              className="w-6 h-6 object-contain rounded-none"
                              alt={`icon for ${skill[1]}`}
                            />
                            <p className="ml-2">{skill[1]}</p>
                          </div>
                        ))}
                      </ul>

                      <b className="text-start">Intrested</b>
                      <ul>
                        {about.skills.items.todo.map((skill) => (
                          <div
                            className="flex m-2 items-center align-middle justify-start"
                            key={skill[1]}
                          >
                            <Image
                              src={`https://skillicons.dev/icons?i=${skill[0]}`}
                              className="w-6 h-6 object-contain rounded-none"
                              alt={`icon for ${skill[1]}`}
                            />
                            <p className="ml-2">{skill[1]}</p>
                          </div>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
                <h1 className="text-medium font-sans text-left my-2">
                  Design inspired by{" "}
                  <a href="https://peet.ws/" className="underline">
                    Peet
                  </a>
                </h1>
              </div>
            </div>
          </main>
        </div>
      </ParallaxSection>
      <ParallaxSection sectionID="projects">
        <div className="container">
          <main className="flex min-h-screen w-full items-center justify-center flex-col">
            <div className="flex min-w-full flex-col items-center justify-between">
              <div className="flex flex-col justify-center items-center max-w-md mb-2">
                <div className=" text-8xl">
                  <AiFillProject />
                </div>
                <p className="font-bold text-2xl md:text-4xl">
                  {about.projects.title}
                </p>
                <p className="text-medium text-gray-500">
                  {about.projects.description}
                </p>
              </div>
              <Divider />

              <div className="flex flex-col justify-start ">
                <div className="gap-2 grid grid-cols-1 md:grid-cols-3">
                  {about.projects.items.slice(0, 3).map((project) => (
                    <Card key={project.name} className="m-2 max-w-sm">
                      <CardHeader>
                        {project.image && (
                          <Image
                            src={project.image}
                            width={32}
                            height={32}
                            alt="Cool blury Pat"
                            className=" shadow-2xl rounded-lgs"
                          />
                        )}
                        <h4 className={project.image && "ml-2"}>
                          {project.name}
                        </h4>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <div className="flex flex-row justify-center items-center mb-4">
                          <p>{project.description}</p>
                        </div>
                        <div className="flex flex-row  items-center gap-2">
                          {project.tools.map((tool) => (
                            <div className="flex" key={tool[1]}>
                              <Tooltip content={tool[1]} placement="bottom">
                                <Image
                                  src={`https://skillicons.dev/icons?i=${tool[0]}`}
                                  className="w-6 h-6 object-contain rounded-none"
                                  alt={`icon for ${tool[1]}`}
                                />
                              </Tooltip>
                            </div>
                          ))}
                        </div>
                      </CardBody>
                      <CardFooter>
                        {project.links.map((link) => (
                          <Tooltip
                            content={link.name}
                            key={link.url}
                            placement="bottom"
                          >
                            <Button
                              className="bg-transparent text-xl  hover:text-slate-600"
                              key={link.name}
                              isIconOnly
                              onClick={() => window.open(link.url, "_blank")}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d={link.icon} />
                              </svg>
                            </Button>
                          </Tooltip>
                        ))}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <Button
                  className="m-2 text-medium"
                  onClick={() => void toast.warning("Coming soon")}
                >
                  Show more
                </Button>
              </div>
            </div>
          </main>
        </div>
      </ParallaxSection>
    </PageScrollHandler>
  );
}
