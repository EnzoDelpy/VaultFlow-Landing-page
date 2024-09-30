import logoDell from "../assets/images/dell.png";
import logoLattice from "../assets/images/lattice.png";
import logoNcr from "../assets/images/ncr.png";
import logoPacificFunds from "../assets/images/pacificfunds.png";
import logoRakuten from "../assets/images/rakuten.png";
import logoTed from "../assets/images/ted.png";
import logoZenDesk from "../assets/images/zendesk.png";


function TrustedSection() {
  return (
    <section className="px-5 py-[3.75rem] flex flex-col gap-10 items-center">
      <p className="text-center">Trusted by teams at over 1,000 of the world’s leading organizations</p>
      <div className="flex gap-12 justify-center items-center flex-wrap">
            <img src={logoDell} alt="logo dell" className="h-fit"/>
            <img src={logoZenDesk} alt="logo zendesk" className="h-fit"/>
            <img src={logoRakuten} alt=" logo rakuten" className="h-fit"/>
            <img src={logoPacificFunds} alt="logo pacific funds" className="h-fit"/>
            <img src={logoNcr} alt=" logo ncr" className="h-fit"/>
            <img src={logoLattice} alt="logo lattice" className="h-fit"/>
            <img src={logoTed} alt="logo ted" className="h-fit"/>
      </div>
    </section>
  );
}

export default TrustedSection;
