import { useNavigate } from "react-router";

export default function Projects() {
  const navigate = useNavigate()
  return (
    <section id="Projects" className="bg-black w-full h-[100vh]">
      <div className="text-4xl text-amber-50">
        hello world
        <button onClick={()=> navigate('/')} >Home</button>
      </div>
    </section>
  );
}
