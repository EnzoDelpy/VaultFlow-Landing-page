function SubHero() {
  return (
    <section className="px-5 py-[3.75rem] gap-20 flex justify-center">
      <div className="rounded-[1.25rem] p-[3.75rem] flex-1 flex shadow-[0px_0.5px_0px_0px_rgba(255,_255,_255,_0.5)_inset,_0px_-2px_40px_0px_rgba(187,_155,_255,_0.15),_0px_-2px_10px_0px_rgba(233,_223,_255,_0.3)] max-w-full xl:max-w-[75rem] justify-center">
        <div className="flex flex-col gap-6 max-w-3xl items-center">
          <h2 className="font-bold text-4xl sm:text-5xl sm:leading-[3.625rem] text-center">
            Our powerful analytics
            <br className="max-md:hidden" /> provides invaluable insights.
          </h2>
          <p className="text-center text-lg">
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly Analytics Dashboard, and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.{" "}
          </p>
          <button className="px-6 py-3 text-white border border-white rounded-[3.75rem] max-sm:text-xs hover:text-black hover:bg-white transition-all">
            Download the app
          </button>
        </div>
      </div>
    </section>
  );
}

export default SubHero;
