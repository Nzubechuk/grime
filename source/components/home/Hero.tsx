"use client";
import { scrollHandler } from "@/source/controllers/helpers";
import { motion } from "framer-motion";
import Link from "next/link";

const m = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
};

const Hero = () => {
  return (
    <section className="w-full pt-6 sm:pt-16 flex flex-col gap-10 items-center justify-between text-center">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col gap-4 w-full">
          <motion.h1
            initial={m.initial}
            whileInView={m.whileInView}
            transition={{
              delay: 0,
              duration: 0.5,
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance"
            style={{ lineHeight: 1.5 }}
          >
            The <span className="text-green-400 italic">$GRIME</span> of Web3
          </motion.h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center pt-2">
          <motion.img
            initial={m.initial}
            whileInView={m.whileInView}
            transition={{
              delay: 0.9,
              duration: 0.5,
            }}
            src="/fingertoad.png"
            alt="Hero"
            className="max-w-[500px] w-full"
          />
          <motion.p
            initial={m.initial}
            whileInView={m.whileInView}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="text-sm sm:text-base xl:text-lg opacity-70 mt-8"
          >
            $GRIME was built on the idea that we're all sick of being dragged
            through the filth, the muck, the GRIME of web3. We're sick of seeing
            scam/shill/PnD coins getting the attention of, and eventually
            bleeding the money out of, everyone We're made a shitcoin to battle
            the shit. We're rewarding diamond handed mother fuckers from all
            over and welcoming them with open arms. GFY
          </motion.p>
          <motion.p
            initial={m.initial}
            whileInView={m.whileInView}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="text-sm sm:text-base xl:text-lg opacity-70 mt-8 italic"
          >
            Contact Address: GJeK3GxUy13YXEp5LprbraSmXfSzDM7uAnuGMvymvCpU
          </motion.p>
          <motion.div
            initial={m.initial}
            whileInView={m.whileInView}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            className="pt-3"
          >
            <Link
              href="http://lock.grimecoin.xyz"
              target="_blank"
              className="bg-green-400 px-10 inline-flex pt-3.5 pb-[13px] rounded-full shake text-black font-semibold"
            >
              Stake
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
