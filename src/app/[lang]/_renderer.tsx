"use client";

import { AiFillProject } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { LanguageDictionary } from "@/lib/dictionary";
import { PageScrollHandler } from "@/components/PageScrollHandler";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Separator } from "@/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typewriter } from "nextjs-simple-typewriter";
import Autoplay from "embla-carousel-autoplay";

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
			{/* <ParallaxSection sectionID="home">
        <div className="container">
          <main className="flex min-h-screen w-full items-center justify-center flex-col">
            <div className="flex min-w-full flex-col items-center justify-between xl:flex-row-reverse">
              <div className="">
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
                <p className="md:w-unit-9xl text-gray-700 dark:text-slate-300 max-w-2xl">
                  {home.subtitle}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bottom-0 absolute dark:fill-white">
              <div className="flex flex-row justify-center items-center">
                <Button
                  className="m-2 bg-transparent text-4xl  hover:text-slate-600 animate-bounce"
                  // isIconOnly
                  aria-label="scroll down"
                  onClick={() => setCurrentPage(1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-10 h-10"
                  >
                    <path d="M7 10l5 5 5-5z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </ParallaxSection> */}
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
								<Separator />
								<div className="flex flex-row justify-center items-center">
									{about.links.map((link) => (
										<Button
											className="m-2 bg-transparent text-2xl hover:bg-transparent  hover:fill-slate-700 fill-white"
											key={link.name}
											// isIconOnly
											onClick={() => window.open(link.url, "_blank")}
											aria-label={link.name + " button"}
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
																width={1}
																height={1}
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
															width={1}
															height={1}
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
															width={1}
															height={1}
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
															width={1}
															height={1}
														/>
														<p className="ml-2">{skill[1]}</p>
													</div>
												))}
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</main>
				</div>
			</ParallaxSection>
			{/* <ParallaxSection sectionID="projects">
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
              <Separator />

              <div className="flex flex-col justify-center ">
                <Carousel
                  className="w-full px-10 mt-2"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[Autoplay()]}
                >
                  <CarouselContent>
                    {about.projects.items.slice(0, 3).map((project) => (
                      <CarouselItem
                        key={project.name}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <Card className="max-w-md dark:bg-[#18181B] border-none">
                          <CardHeader className="flex justify-start flex-row p-4">
                            {project.image && (
                              <Image
                                src={project.image}
                                width={32}
                                height={32}
                                alt="Project icon"
                                className=" shadow-2xl rounded-lg"
                              />
                            )}
                            <p className={project.image && "ml-2 text-center"}>
                              {project.name}
                            </p>
                          </CardHeader>
                          <Separator />
                          <CardContent className="flex flex-col justify-start align-middle p-4">
                            <div className="flex flex-row justify-center items-center mb-4">
                              <p>{project.description}</p>
                            </div>
                            <div className="flex flex-row  items-center gap-2">
                              {project.tools.map((tool) => (
                                <div className="flex" key={tool[1]}>
                                  <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                      <TooltipContent>
                                        <p>{tool[1]}</p>
                                      </TooltipContent>
                                      <TooltipTrigger>
                                        <Image
                                          src={`https://skillicons.dev/icons?i=${tool[0]}`}
                                          className="w-6 h-6 object-contain rounded-none"
                                          alt={`icon for ${tool[1]}`}
                                          width={1}
                                          height={1}
                                        />
                                      </TooltipTrigger>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                          <Separator />
                          <CardFooter className="p-2">
                            {project.links.map((link) => (
                              <TooltipProvider
                                key={link.url}
                                delayDuration={100}
                              >
                                <Tooltip
                                // content={link.name}
                                // placement="bottom"
                                >
                                  <TooltipContent>
                                    <p>{link.name}</p>
                                  </TooltipContent>
                                  <TooltipTrigger asChild>
                                    <Button
                                      className="bg-transparent  hover:bg-transparent fill-white hover:fill-slate-700 "
                                      key={link.name}
                                      size="sm"
                                      aria-label={link.name + " Clickable Icon"}
                                      // isIconOnly
                                      onClick={() =>
                                        window.open(link.url, "_blank")
                                      }
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5"
                                      >
                                        <path d={link.icon} />
                                      </svg>
                                    </Button>
                                  </TooltipTrigger>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden lg:block">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>
            </div>
          </main>
        </div>
      </ParallaxSection> */}
		</PageScrollHandler>
	);
}
