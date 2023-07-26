import React from "react";

export default function Footer() {
  return (
    <>
      {/*footer starts from here */}
      <footer className="text-gray-600 body-font bg-neutral">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first place-items-center">
            <div className="w-[90%] h-[30%] border-solid border-2 drop-shadow-xl bg-base-100 mx-auto rounded-xl top-0 -mt-40">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                  <div className="p-4 md:w-1/4 flex flex-col ">
                    <div className="flex-grow mx-5">
                      <h3 className="text-gray-700 text-md title-font font-medium mb-3">
                        ABOUT HIMALAYAN PACKAGES
                      </h3>
                      <ul className="leading-relaxed text-sm space-x-y text-left">
                        <li>
                          <a href="/">ABOUT US</a>
                        </li>
                        <li>
                          <a href="/">WE ARE HIRING</a>
                        </li>
                        <li>
                          <a href="/">HIMALAYAN REVIEWS</a>
                        </li>
                        <li>
                          <a href="/">TERMS & CONDITIONS</a>
                        </li>
                        <li>
                          <a href="/">PRIVACY POLICIES</a>
                        </li>
                        <li>
                          <a href="/">COPYRIGHT POLICIES</a>
                        </li>
                        <li>
                          <a href="/">SUPPORT</a>
                        </li>
                        <li>
                          <a href="/">APPS</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 flex flex-col ">
                    <div className="flex-grow mx-5">
                      <h3 className="text-gray-700 text-md title-font font-medium mb-3 text-left">
                        FOR SUPPLIERS
                      </h3>
                      <ul className="leading-relaxed text-sm text-left">
                        <li>
                          <a href="/">LIST YOUR ACTIVITIES</a>
                        </li>
                      </ul>
                      <h3 className="text-gray-700 text-md title-font font-medium mb-3 pt-2 text-left">
                        FOR BRANDS
                      </h3>
                      <ul className="leading-relaxed text-sm text-left">
                        <li>
                          <a href="/">PARTNER WITH US</a>
                        </li>
                      </ul>
                      <ul className="leading-relaxed text-sm text-left">
                        <li>
                          <a href="/">DESTINATION MARKETING</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 flex flex-col ">
                    <div className="flex-grow mx-5">
                      <h3 className="text-gray-700 text-md title-font font-medium mb-3">
                        FOR TRAVELLERS
                      </h3>
                      <ul className="leading-relaxed text-sm text-left">
                        <li>
                          <a href="/">GIFT AN EXPERIENCE</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 flex flex-col ">
                    <div className="flex-grow mx-5">
                      <h3 className="text-gray-700 text-md title-font font-medium mb-3">
                        FOR TRAVELLERS
                      </h3>

                      {/* gallery */}
                      <div className="container mx-auto  py-2">
                        <div className=" flex flex-wrap">
                          <div className="flex w-1/3 flex-wrap">
                            <div className="p-0.5">
                              <div className="relative overflow-hidden ">
                                <img
                                  className="object-cover w-16 h-16"
                                  src="https://www.himalayanpackages.com/assets/images/imag/srinagar.webp"
                                  alt="Flower and sky"
                                />
                                <div className="absolute top-0 left-0 px-0.5 py-4">
                                  <p className=" font-semibold text-xs text-white">
                                    SRINAGAR
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-1/3 flex-wrap">
                            <div className="p-o.5">
                              <div className="relative overflow-hidden ">
                                <img
                                  className="object-cover w-16 h-16"
                                  src=" https://www.himalayanpackages.com/assets/images/imag/katra.webp"
                                  alt="Flower and sky"
                                />
                                <div className="absolute top-0 left-0 p-4">
                                <p className=" font-semibold text-xs text-white">
                                    KATRA
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-1/3 flex-wrap">
                            <div className="p-0.5">
                              <div className="relative overflow-hidden ">
                                <img
                                  className="object-cover w-16 h-16"
                                  src="https://www.himalayanpackages.com/assets/images/imag/srinagar.webp "
                                  alt="Flower and sky"
                                />
                                <div className="absolute top-0 left-0 px-0.5 py-4">
                                <p className=" font-semibold text-xs text-white">
                                    GULMARG
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-1/3 flex-wrap">
                            <div className="p-0.5">
                              <div className="relative overflow-hidden ">
                                <img
                                  className="object-cover w-16 h-16"
                                  src="https://www.himalayanpackages.com/assets/images/imag/sonamarg.webp "
                                  alt="Flower and sky"
                                />
                                <div className="absolute top-0 left-0 px-0.5 py-4">
                                <p className=" font-semibold text-xs text-white">
                                    SONAMARG
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-1/3 flex-wrap">
                            <div className="p-0.5">
                              <div className="relative overflow-hidden ">
                                <img
                                  className="object-cover w-16 h-16"
                                  src=" https://www.himalayanpackages.com/assets/images/imag/pahalgam.webp"
                                  alt="Flower and sky"
                                />
                                <div className="absolute top-0 left-0 px-0.5 py-4">
                                <p className=" font-semibold text-xs text-white">
                                   PAHALGAM
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-1/3 flex-wrap">
                            <div className="p-0.5">
                              <div className="relative overflow-hidden ">
                                <img
                                  className="object-cover w-16 h-16"
                                  src="https://www.himalayanpackages.com/assets/images/imag/yousmarg.webp "
                                  alt="Flower and sky"
                                />
                                <div className="absolute top-0 left-0 px-0.5 py-4">
                                <p className=" font-semibold text-xs text-white">
                                   YOUSMARG
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-1/3 flex-wrap">
                            <div className="p-0.5">
                              <div className="relative overflow-hidden ">
                                <img
                                  className="object-cover w-16 h-16"
                                  src="https://www.himalayanpackages.com/assets/images/imag/aru.webp "
                                  alt="Flower and sky"
                                />
                                <div className="absolute top-0 left-0 p-5">
                                <p className=" font-semibold text-xs text-white">
                                   ARU
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-1/3 flex-wrap">
                            <div className="p-0.5">
                              <div className="relative overflow-hidden ">
                                <img
                                  className="object-cover w-16 h-16"
                                  src="https://www.himalayanpackages.com/assets/images/imag/patnitop.webp "
                                  alt="Flower and sky"
                                />
                                <div className="absolute top-0 left-0 px-0.5 py-4">
                                <p className=" font-semibold text-xs text-white">
                                    PATNITOP
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-1/3 flex-wrap">
                            <div className="p-0.5">
                              <div className="relative overflow-hidden ">
                                <img
                                  className="object-cover w-16 h-16"
                                  src="https://www.himalayanpackages.com/assets/images/imag/patnitop.webp "
                                  alt="Flower and sky"
                                />
                                <div className="absolute top-0 left-0 px-2 py-4">
                                <p className=" font-semibold text-xs text-white">
                                    PANGOT
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* gallery */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="/assets/logo.png" className="w-20 h-auto" alt="" />
              <span className="text-gray-700 text-md title-font font-medium mb-3">
                Himalayan packages
              </span>
            </a>
            <p className="text-gray-700 text-sm title-font font-medium mb-3">
              ©2023 himalayanpackages.com All rights reserved.
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              ></a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
      {/*footer ends here */}
    </>
  );
}
