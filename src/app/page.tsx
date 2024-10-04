import Image from "next/image";
import next_svg from "../../public/next.svg";
import vercel_svg from "../../public/vercel.svg";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 bg-white text-gray-900 font-sans">

      {/* Header Section with Flexbox Layout */}
      <section className="w-full max-w-3xl flex items-center mb-4 p-8">
        <div className="flex-shrink-0">
          <Image src="/images/sheki.jpg" alt="Sherkina Okwayo" width={180} height={240} className="object-cover" />
        </div>
        <div className="ml-6">
          <h1 className="text-4xl font-bold mb-2">Sheki Okwayo</h1>
          <p className="text-md font-medium mb-2">Computer Science and Economics Student | Software Developer</p>
          <p className="text-sm text-gray-600">
            Cornell University | Ithaca, NY <br /> lso24@cornell.edu | (607) 327-7938
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-base max-w-2xl mx-auto mb-4">
          I’m a sophomore at Cornell University majoring in Computer Science and Economics. I am passionate about 
          solving real-world problems through technology. My experience includes software development, data analysis, 
          and economic research.
        </p>
      </section>

      {/* Experience and Projects Section */}
      <section className="w-full max-w-3xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience & Projects</h2>

        <p className="text-base max-w-2xl mx-auto mb-4">
          One of the most impactful projects I've worked on is a web-based application to support victims of Gender-Based Violence (GBV) in Kikuyu, Kenya. 
          The app, built using Django, provides a secure platform where victims can anonymously report incidents of violence, ensuring their privacy and safety. 
          The application integrates with local support services to connect victims with counseling, legal aid, and medical resources. 
          Its design prioritized ease of use for people with varying levels of tech literacy, while ensuring data security was at the forefront. 
          This project was deeply fulfilling, as it helped create a lifeline for people in need and provided a real-world solution for a serious issue.
        </p>
        <p className="text-base max-w-2xl mx-auto mb-4">
            Additionally, I worked on a fun personal project while in my college freshman year. I developed a 2D arcade game called "Alien Invaders" 
            using Python. This game incorporated mechanics for alien movement, player controls, and collision detection. It was an exciting challenge 
            that tested my game development skills and allowed me to apply object-oriented programming principles in a creative context. I also gained experience in data analysis during my internship at the Economic Policy Research 
          Center in Kenya, where I developed predictive models and visualized fiscal reforms' impact on SMEs using Python.
        </p>
      </section>

    </main>
  );
}
