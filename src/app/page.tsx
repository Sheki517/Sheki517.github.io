import Image from "next/image";
import next_svg from "../../public/next.svg";
import vercel_svg from "../../public/vercel.svg";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 bg-gray-50 text-gray-900">
      
      {/* Header Section */}
      <section className="w-full max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sherkina Okwayo</h1>
        <p className="text-lg">Computer Science and Economics Student | Software Developer</p>
        <p className="text-sm mt-2">
          Cornell University | Ithaca, NY | lso24@cornell.edu | (607) 327-7938
        </p>
      </section>
      
      {/* About Me Section */}
      <section className="w-full max-w-3xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-base">
          I am a sophomore at Cornell University majoring in Computer Science and Economics.
          I am passionate about leveraging technology to create impactful solutions that address
          real-world challenges. With experience in software development, data analysis, and
          economic research, I aim to apply my skills to solve problems that matter in the world.
        </p>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-3xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <p className="text-base">
          I have strong proficiency in programming languages such as Python, HTML, CSS, Java, Ocaml,
          C, and JavaScript. Additionally, I have experience working with frameworks like Django, Flask, 
          and React, as well as tools like Docker and VBA. My expertise in data analysis extends to Python 
          libraries such as Pandas and NumPy, and statistical software like Stata and JMP.
        </p>
      </section>

      {/* Experience Section */}
      <section className="w-full max-w-3xl text-left mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Research Assistant</h3>
          <p className="italic">Novel Technologies, Kenya | Feb 2020 – Dec 2020</p>
          <ul className="list-disc list-inside text-base">
            <li>Developed a custom compression algorithm for Mbale Hospital, reducing paper usage by 40%.</li>
            <li>Digitized patient records with an automated VBA database, improving data retrieval efficiency.</li>
            <li>Conducted data analysis using JMP, optimizing hospital operations.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Economic Research & Data Science Analyst Intern</h3>
          <p className="italic">Economic Policy Research Center, Kenya | June 2024 – Aug 2024</p>
          <ul className="list-disc list-inside text-base">
            <li>Analyzed fiscal reforms' impact on SMEs using Stata, R, and Python.</li>
            <li>Built predictive models to support SME growth through tax incentives.</li>
            <li>Developed data visualizations with Tableau and Matplotlib for research insights.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-3xl text-left mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">GBV App</h3>
          <p className="italic">Kikuyu, Kenya | Apr 2021 – Sep 2021</p>
          <p className="text-base">
            Developed a web application using Django, HTML, and CSS, allowing victims of Gender-Based Violence 
            to anonymously report incidents and seek support services. Designed a secure, user-friendly interface.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Movers Transport System</h3>
          <p className="italic">Kenya | Apr 2021 – Apr 2022</p>
          <p className="text-base">
            Built a Microsoft Access database to manage real-time data on vehicle availability and scheduling. 
            Utilized Access macros for efficient data extraction, ensuring scalability in a Dockerized environment.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Alien Invaders (Game Project)</h3>
          <p className="italic">Ithaca, NY | Oct 2023 – Nov 2023</p>
          <p className="text-base">
            Developed a classic 2D arcade game in Python, featuring mechanics such as alien movement, player controls, 
            and collision detection, following established game design principles.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-base">
          Feel free to reach out via email or phone for any inquiries or collaboration opportunities:
        </p>
        <p className="text-base font-semibold">lso24@cornell.edu | (607) 327-7938</p>
      </section>
      
    </main>
  );
}
