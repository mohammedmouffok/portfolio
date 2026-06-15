export default function About() {
  return (
    <section id="About" className="py-20 px-6 bg-black ">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-4xl bg-gradient-to-b from-white from-40% to-sky-500 bg-clip-text text-transparent  font-bold">
          About Me
        </h2>
        <div className="grid grid-cols-1 text-center ">
          <div className="grid grid-cols-2 gap-2 mb-12">
            <div className="bg-[#232323] p-2 rounded-lg border-t-0 border-sky-300 hover:border-t-2 transition-all duration-75">
              <p className="text-[#5a5a5a] mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize
                in building scalable applications using modern technologies. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a passion for creating seamless digital
                experiences.
              </p>
            </div>

            <div>
              <p className="text-[#757575] mb-6 leading-relaxed">
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends. When I'm not coding,
                you'll find me exploring new technologies, contributing to open
                source.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap justify-center mt-1.5">
            <span className="px-4 py-2 text-[#353535] bg-[#e0e0e0]  hover:bg-[#212121] hover:text-white transition duration-400  rounded-lg">
              Problem Solver
            </span>
            <span className="px-4 py-2 text-[#353535] bg-[#e0e0e0]  hover:bg-[#212121] hover:text-white transition duration-400  rounded-lg">
              Team Player
            </span>
            <span className="px-4 py-2 text-[#353535] bg-[#e0e0e0]  hover:bg-[#212121] hover:text-white transition duration-400 rounded-lg">
              Quick Learner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
