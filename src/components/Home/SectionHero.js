import svgSchoolBooks from "../../assets/075-schoolbooks-colour.svg";

const SectionHero = () => {
  return (
    <div className="pb-16 lg:pt-16">
      <div className="flex flex-col-reverse px-2 mx-auto max-w-6xl lg:flex-row">
        <div className="p-4 text-center lg:flex-1 lg:text-left">
          <h1 className="mb-8 font-sans text-6xl font-black leading-tight text-on-surface">
            Read. Share. Exchange. Repeat.
          </h1>
          <p className="mb-8 text-2xl leading-snug text-on-surface-variant">
            Exchange books with each other, share your thoughts, participate in
            events, all in one stop. BookStop is the final destination for every
            reader.
          </p>
          <div className="flex flex-col justify-center items-center space-y-3 space-x-2 lg:flex-row lg:justify-start lg:space-y-0">
            <a
              href="https://www.facebook.com/BookStopProject/videos/286505393290007/"
              className="px-12 h-12 btn-filled"
            >
              <span className="text-lg font-bold">Watch the video</span>
            </a>
            <a
              href={`https://m.me/BookStopProject`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 h-12 btn-outlined"
            >
              <span className="text-lg font-bold whitespace-nowrap">
                Message us
              </span>
            </a>
          </div>
        </div>
        <div className="p-2 lg:flex-1">
          <img src={svgSchoolBooks} className="mx-auto w-64 lg:w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
