import React from 'react'


import Navbar from '../Navbar'
import Headerfile from '../Headerfile'


import Footer from '../Footer'
import SliderComponent from '../SliderComponent'



export default function Home() {
  return (
    <div>
      
      <section className="bg-[url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] w-full h-screen bg-cover bg-center bg-no-repeat mb-8 md:h-screen ">
        <div className="w-full h-full  backdrop-brightness-75">

          <Navbar />

          <Headerfile />

      {/*section one starts from here */}
          <div className="text-gray-600 body-font">
        <div className="container px-8 py-7 mx-auto">
          <div className="flex flex-wrap mx-4 -mb-10 text-center items-center">
            <div className="sm:w-1/4 mb-10 px-4">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Weaving Way to Perfect Gateway
                </h2>
                <div className="w-14 h-1 bg-primary rounded mt-1 mb-1"></div>
                <p className="text-base">Memories for Life Time</p>
              </div>
            </div>
            <div className="sm:w-3/4 mb-10">
              <div className="carousel ">
                  <div className="carousel-item m-2" >
                    <img
                      src=""
                      className=" w-48 h-full rounded-lg"
                      alt="Burger"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*section one ends here */}

      {/*section two starts from here */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-7 py-16 mx-auto md:px-4 ">
          <div className="flex flex-wrap -m-12 ">
            <div className="p-3 md:w-1/2 flex flex-col items-start ">
              <div className="pt-2 grid grid-rows-3 grid-flow-col gap-4 pl-20 ">
                <div className="col-span-2 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/explore-himalayan-ranges.webp"
                    alt=""
                    className="w-full h-44 rounded-xl"
                  />
                </div>
                <div className="row-span-2 col-span-2">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/rohtang-pass.webp"
                    alt=""
                    className="w-full h-88 rounded-xl"
                  />
                </div>
              </div>
            </div> 
            <div className="p-3 md:w-1/2 flex flex-col items-start pt-5 ">
              <div className="grid grid-rows-3 grid-flow-col gap-8 mb-3 pl-3">
                <div className="row-start-1 row-end-4">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/tibetan-culture.webp"
                    alt=""
                    className="rounded-xl w-40 h-52"
                  />
                </div>
                <div className="row-start-1 row-end-4">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/atal-tunnel.webp"
                    alt=""
                    className="rounded-xl w-40 h-36"
                  />
                </div>
                <div className="row-start-1 row-end-4">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/jim-corbett-national-park.webp"
                    alt=""
                    className="rounded-xl w-40 h-52"
                  />
                </div>
              </div>
              <div className="grid grid-rows-3 grid-flow-col gap-8 py-4 mb-3 pl-3">
                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/mcleod-ganj.webp"
                    alt=""
                    className="rounded-xl w-40 h-36"
                  />
                </div>
                <div className="row-start-1 row-end-4 -mt-[65px] ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/bhimtal-lake.webp"
                    alt=""
                    className="rounded-xl w-40 h-52"
                  />
                </div>
                <div className="row-start-1 row-end-4  ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/vaishno-devi-temple.webp"
                    alt=""
                    className="rounded-xl w-40 h-36"
                  />
                </div>
              </div>
              <div className="grid grid-rows-3 grid-flow-col gap-8 mb-2 pl-3">
                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/solang-valley.webp"
                    alt=""
                    className="rounded-xl w-40 h-36"
                  />
                </div>
                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/naina-devi-temple.webp"
                    alt=""
                    className="rounded-xl w-40 h-36"
                  />
                </div>
                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/srinagar.webp"
                    alt=""
                    className="rounded-xl w-40 h-36"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/*section two ends here */}

          <SliderComponent />

          <Footer />

        </div>       
      </section>
    </div>
  )
}
