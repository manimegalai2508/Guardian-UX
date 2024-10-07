import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const TokenomicsSection = () => {
  return (
    <section className=" w-full bg-white pt-10">

      <div id="tokenomicsGradient" className=" md_2:pt-20">
        <h2 className=" lg:text-9xl sm:text-8xl sm_1:text-6xl text-4xl font-burga md_2:p-10 md_2:pt-10 pt-0 pb-10 sm_1:px-10 px-4 md_2:text-white text-[#FFA800]">TOKENOMICS</h2>
        <div className=" flex justify-between items-center gap-2 p-4 sm:pr-4 pr-1 md_2:pb-10 lg:pb-4">
          <div className={` md_2:w-1/2 w-[40%] flex justify-center items-center flex-col gap-7 ${mont.className} font-black lg"text-2xl sm:text-xl sm_1:text-base text-[8px]`}>
            <div className="tokenomicsCard bg-[#353535] sm:rounded-2xl rounded-xl md_2:p-5 p-2 md_2:w-1/2 w-full">
                <p>LIQUIDITY</p>
                <p className=" text-[#FFF280] lg:text-3xl sm:text-2xl sm_1:text-lg text-xs">LOCKED</p>
            </div>
            <div className="tokenomicsCard bg-[#353535] sm:rounded-2xl rounded-xl md_2:p-5 p-2 md_2:w-1/2 w-full">
                <p>CONTRACT</p>
                <p className=" text-[#FFF280] lg:text-3xl sm:text-2xl sm_1:text-lg text-xs">RENOUNCED</p>
            </div>
            <div className="tokenomicsCard bg-[#353535] sm:rounded-2xl rounded-xl md_2:p-5 p-2 md_2:w-1/2 w-full">
                <p>TAXES</p>
                <p className=" text-[#FFF280] lg:text-3xl sm:text-2xl sm_1:text-lg text-xs">0%</p>
            </div>
          </div>
          <Image
            src={"/tokenomics.png"}
            alt="dog"
            width={400}
            height={500}
            className=" md_2:w-[45%] w-[60%] object-contain object-center sm:block hidden"
          />
          <Image
            src={"/tokenomics-mobile.png"}
            alt="dog"
            width={400}
            height={500}
            className=" md_2:w-[45%] w-[60%] object-contain object-center sm:hidden block"
          />
        </div>
      </div>

    </section>
  );
};

export default TokenomicsSection;
