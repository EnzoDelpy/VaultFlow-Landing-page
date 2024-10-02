import FeaturesCard from "./FeaturesCard.tsx";
import features_icon1 from "../assets/images/features_icon1.png";
import features_icon2 from "../assets/images/features_icon2.png";
import features_icon3 from "../assets/images/features_icon3.png";
import digit_screen from "../assets/images/digit_token_screen.png";
function FeaturesSection() {
  return (
    <section className="px-5 flex flex-col gap-20 items-center">
      <div className="max-w-[29.5rem] flex flex-col items-center gap-6 py-6 text-center bg-[url('/assets/images/light.png')] bg-cover bg-center">
        <h2 className="font-medium text-5xl leading-[3.625rem]">
          Features that
          <br className="max-sm:hidden" /> work for your
          <br className="max-sm:hidden" /> future.
        </h2>
        <p className="text-lg">
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </p>
      </div>
      <div className="flex flex-col p-[0.625rem] gap-20 max-w-full xl:max-w-[75rem]">
        <div className="flex gap-6 flex-wrap">
          <FeaturesCard
            title="Analytics Dashboard"
            paragraph="Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
            clickLabel="View dashboard"
            icon={
              <img
                src={features_icon1}
                alt="Icon Analytics dashboard"
                className="h-[3.125rem] w-[3.125rem] shadow-[0px_0px_36.45px_0px_rgba(89,_29,_221,_0.75)] rounded-lg"
              />
            }
          ></FeaturesCard>
          <FeaturesCard
            title="Digital Credit Tokens"
            paragraph="Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."
            clickLabel="View tokens"
            icon={
              <img
                src={features_icon2}
                alt="Icon Digital credit token"
                className="h-[3.125rem] w-[3.125rem] shadow-[0px_0px_36.45px_0px_rgba(149,_37,_201,_0.75);] rounded-lg"
              />
            }
          ></FeaturesCard>
        </div>
        <FeaturesCard
          title="Code collaboration"
          paragraph="Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable."
          clickLabel="View code collaboration"
          icon={
            <img
              src={features_icon3}
              alt="Icon Digital credit token"
              className="h-[3.125rem] w-[3.125rem] shadow-[0px_0px_36.45px_0px_rgba(201,_37,_171,_0.75)] rounded-lg"
            />
          }
          image={
            <img
              src={digit_screen}
              alt="Digit token screen code"
              className="rounded-[1.25rem] shadow-[0px_0px_0px_1.17px_rgba(255,_255,_255,_0.1),0px_0px_0px_2.33px_rgba(0,_0,_0,_0.05),0px_-2px_40px_0px_rgba(187,_155,_255,_0.15),0px_-2px_10px_0px_rgba(233,_223,_255,_0.3),_0px_0.58px_0px_0px_rgba(255,_255,_255,_0.5)_inset,_0px_0.5px_0px_0px_rgba(255,_255,_255,_0.5)_inset]"
            />
          }
        ></FeaturesCard>
      </div>
    </section>
  );
}

export default FeaturesSection;
