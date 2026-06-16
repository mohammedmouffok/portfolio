
import { useNavigate } from "react-router";


export default function About() {
  const navigate = useNavigate()

  return (
    <section id="About" className="py-20 px-6 bg-black  ">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-4xl bg-gradient-to-b from-white from-40% to-sky-500 bg-clip-text text-transparent  font-bold">
          About Me
        </h2>
        <div className="grid grid-cols-1 text-center ">
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div data-aos="fade-right" className="bg-[#232323] p-2 rounded-lg border-t-2 border-sky-300 ">
              <p className="text-[#5a5a5a] mb-6 leading-relaxed">
                as a junior web developer, I specialize in building scalable applications using modern technologies. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a passion for creating seamless digital
                experiences.
              </p>
            </div>

            <div data-aos="fade-left" className="bg-[#232323] p-2 rounded-lg border-t-2 border-sky-300 ">
              <p className="text-[#757575] mb-6 leading-relaxed">
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends. When I'm not coding,
                you'll find me exploring new technologies and learn new things.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap justify-center mt-1.5">
            <span data-aos="fade-right" className="px-4 py-2 bg-[#212121] text-white hover:shadow-md shadow-sky-300 outline-2 outline-offset-2 outline-[#212121] rounded-lg">
              Problem Solver
            </span>
            <span data-aos="fade-up" className="px-4 py-2 bg-[#212121] text-white hover:shadow-md shadow-sky-300 outline-2 outline-offset-2 outline-[#212121] rounded-lg">
              Team Player
            </span>
            <span data-aos="fade-left" className="px-4 py-2 bg-[#212121] text-white hover:shadow-md shadow-sky-300 outline-2 outline-offset-2 outline-[#212121] rounded-lg">
              Quick Learner
            </span>
          </div>
          <div className='flex items-center justify-center w-full h-6'>
            <button className='text-white font-bold ' onClick={() => {
              navigate("/Projects");
            }} >click me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
