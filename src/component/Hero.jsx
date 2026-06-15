// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
import Social from "./Social";

export default function Hero() {
  return (
    <section
      id="Home"
      className="flex bg-linear-to-b from-[#004D61] to-black min-h-screen 
      items-center justify-center  "
    >
      <div className=" flex items-center justify-center flex-col w-[90vw]">
        <div className="flex items-center flex-col m-[50px] p-[10px]  ">
          <h1 className=" mb-[25px] bg-gradient-to-b from-white to-[#93f7fa] bg-clip-text text-transparent  font-bold text-7xl z-50">
            MOUFFOK Mohammed
          </h1>

          <p className="z-50 text-md text-center w-lg flex-wrap bg-gradient-to-b from-white to-[#A8DADC] bg-clip-text text-transparent ">
            junior web developer and ict student at{" "}
            <a href="https://www.ensttic.dz" target="_blank" className="font-bold text-indigo-400 hover:underline underline-offset-2">
              ENSTTIC
            </a>{" "}
            passonate about building scalable website.My key skills include Web Development and Datacom, where I focus on creating reliable and high-performing systems.


            
          </p>
        </div>
        <div>
          <Social />
        </div>
      </div>
    </section>
  );
}
