import logoDell from "../assets/images/dell.png";
import logoLattice from "../assets/images/lattice.png";
import logoNcr from "../assets/images/ncr.png";
import logoPacificFunds from "../assets/images/pacificfunds.png";
import logoRakuten from "../assets/images/rakuten.png";
import logoTed from "../assets/images/ted.png";
import logoZenDesk from "../assets/images/zendesk.png";
import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function TrustedSection() {
  const xTranslation = useMotionValue(0);

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.scrollWidth);
    }

    let controls;
    let finalPosition = -width / 2 - 24;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <section className="px-5 py-[3.75rem] flex flex-col gap-10 items-center">
      <p className="text-center">
        Trusted by teams at over 1,000 of the world’s leading organizations
      </p>
      <div className="max-w-4xl overflow-hidden w-full [mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex gap-12 justify-start items-center"
          ref={elementRef}
          style={{ x: xTranslation }}
        >
          <img src={logoDell} alt="logo dell" className="h-fit" />
          <img src={logoZenDesk} alt="logo zendesk" className="h-fit" />
          <img src={logoRakuten} alt=" logo rakuten" className="h-fit" />
          <img
            src={logoPacificFunds}
            alt="logo pacific funds"
            className="h-fit"
          />
          <img src={logoNcr} alt=" logo ncr" className="h-fit" />
          <img src={logoLattice} alt="logo lattice" className="h-fit" />
          <img src={logoTed} alt="logo ted" className="h-fit" />
          <img src={logoDell} alt="logo dell" className="h-fit" />
          <img src={logoZenDesk} alt="logo zendesk" className="h-fit" />
          <img src={logoRakuten} alt=" logo rakuten" className="h-fit" />
          <img
            src={logoPacificFunds}
            alt="logo pacific funds"
            className="h-fit"
          />
          <img src={logoNcr} alt=" logo ncr" className="h-fit" />
          <img src={logoLattice} alt="logo lattice" className="h-fit" />
          <img src={logoTed} alt="logo ted" className="h-fit" />
        </motion.div>
      </div>
    </section>
  );
}

export default TrustedSection;
