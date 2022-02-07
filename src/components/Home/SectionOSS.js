const SectionOSS = () => {
  return (
    <div className="py-16 my-8">
      <div className="px-2 mx-auto max-w-6xl">
        <h2 className="mb-2 text-5xl font-medium text-center">
          An Open-Ended Book
        </h2>
        <p className="mb-8 text-2xl text-center text-on-surface-variant">
          Build your own community upon the open-source platform
        </p>
        <div className="mx-auto space-y-2 max-w-4xl text-lg text-center text-on-surface-variant/75">
          <p>
            We believe that the way to achieve our mission of bringing books to
            everyone is to <b>empower</b> others to do the same in their
            communities, and we do so by making the{" "}
            <span className="text-secondary">Source Code</span> of BookStop{" "}
            <span className="text-primary">open and free</span>.
          </p>
          <p>
            Anyone can start a book exchange corner for their school, their
            neighborhood, or their hometown.{" "}
            <i className="text-[#735133]">
              We can also help you manage the application so you can focus on
              the main task!
            </i>
          </p>
        </div>
        <div className="flex justify-center items-center mt-8 space-x-2">
          <a
            className="py-2 px-4 btn-tonal"
            href="https://github.com/BookStopProject"
          >
            Check out on GitHub
          </a>
          <a
            className="py-2 px-4 btn-filled"
            href="https://github.com/BookStopProject/bookstop-front#managed-service"
          >
            Managed BookStop
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionOSS;
