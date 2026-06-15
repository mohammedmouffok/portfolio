import MatrialCards from "./MatrialCards";

export default function Skills() {
  return (
    <section id="Skills" className="bg-black  h-[80vh]">
      <div className="flex items-center flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-4 text-center text-4xl bg-gradient-to-b from-white from-40% to-sky-500 bg-clip-text text-transparent font-bold">
            Skills & Technologies
          </h2>
          <p className="text-center text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
            I'm currently looking to join a{" "}
            <span className="text-sky-300 font-bold underline ">
              {" "}
              cross-functional team{" "}
            </span>
            that values improving people's lives through accessible design
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 w-[60vw] h-[20vh]">
          <MatrialCards />
        </div>
      </div>
    </section>
  );
}
