import  logo1  from  "../assets/Images/logo1.png";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <section
      id="home"
      className="text-center py-20 pt-28 h-150 justify-center flex flex-col items-center border-bottom border-amber-50" >
      <div className="mb-4">
        <img className="w-50 h-50 rounded-full" src={logo1} alt="" />
      </div>
      <div>
        {/* <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1> */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-yellow-400 text-transparent bg-clip-text">I'm a Sahil Mansuri</span><br />
            <TypeAnimation
              sequence={[
                "Web Developer", 1000,
                "FullStack Developer", 1000,
                "Frontend Developer", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            />
          </h1>
        <p className="mt-4 text-lg">
          I'm a Full Stack Developer passionate about building web apps.
        </p>
        <span className="text-lg bg-gradient-to-r from-yellow-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          
          I'm currently open to opportunities across all roles , whether it's
          full stack, frontend, backend, or something new. Let’s build something
          great together!
        </span>
      </div>
    </section>
  );
}
