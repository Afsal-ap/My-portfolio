import { OrbitingCircles } from "../components/OrbittingCircles";

export function FrameWorks() { 
    const skills = [
        "css3",
        "docker",
        "git",
        "github",
        "html5",
        "javascript",
        "nodejs",
        "react",
        "tailwindcss",
        "vitejs",
        "kubernetes",
        "aws",
        "redux",
        "stripe",
        "mongodb",
        "typescript"
        
        
    ]
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={25}>
       {skills.map((skill, index)=>(
        <Icon key={index} src={`assets/logos/${skill}.svg`} />
       ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
      {skills.reverse().map((skill, index)=>(
        <Icon key={index} src={`assets/logos/${skill}.svg`} />
       ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);