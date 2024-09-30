interface Props {
  title: string;
  paragraph: string;
  clickLabel: string;
  icon: JSX.Element;
  image?: JSX.Element;
}

function FeaturesCard({
  title,
  paragraph,
  clickLabel,
  icon,
  image
}: Props) {
  var defaultCard: JSX.Element = (
    <>
      {icon}
      <div className="flex flex-col gap-[0.625rem]">
        <h3 className="text-[2rem] font-medium">{title}</h3>
        <p className="text-sm">{paragraph}</p>
        <a
          href=""
          className="font-medium underline text-[rgba(255,_255,_255,_1)] hover:font-bold"
        >
          {clickLabel}
        </a>
      </div>
    </>
  );

  return (
    <>
      {image ? (
        <div className="rounded-[1.25rem] p-[3.75rem] flex-1 shadow-[0px_0.5px_0px_0px_rgba(255,_255,_255,_0.5)_inset,_0px_-2px_40px_0px_rgba(187,_155,_255,_0.15),_0px_-2px_10px_0px_rgba(233,_223,_255,_0.3)] flex gap-4 justify-between items-center max-lg:flex-col"><div className="flex flex-col gap-4 max-w-[28.75rem] flex-1">{defaultCard}</div><div className="max-w-[28.75rem] flex-1 h-min">{image}</div></div>
      ) : (
        <div className="rounded-[1.25rem] p-[3.75rem] flex flex-col gap-4 flex-1 shadow-[0px_0.5px_0px_0px_rgba(255,_255,_255,_0.5)_inset,_0px_-2px_40px_0px_rgba(187,_155,_255,_0.15),_0px_-2px_10px_0px_rgba(233,_223,_255,_0.3)]">
          {defaultCard}
        </div>
      )}
    </>
  );
}

export default FeaturesCard;
