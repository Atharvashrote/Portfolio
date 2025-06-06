import React from "react";

function About() {
  return (
    <div
    name="About"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <h1 className="text-3xl font-bold">About</h1>
      <p>
        Hello I am Atharva , a passionate Web Developer with a keen eye for MERN
        Stack. With Background in IT , I strive to craete impactful and visually
        stunning Software solutions that leave a losting impression.
      </p>
      <br />
      <h1 className="text-green-500 font-semibold text-xl">
        Eductaion and Training
      </h1>
       <ul>
        <li>
          B.Tech in Information Technology – K.D.K. College of Engineering,
          Nagpur June 2022 – May 2025 | 71%
        </li>

        <li>
          Higher Secondary Certificate (HSC) – Shirdi Sai Junior College, Mouda
          Jun 2021 – Mar 2022 | 80%
        </li>

        <li>
          Secondary School Certificate (SSC) – Shirdi Sai High School, Mouda Jun
          2018 – Apr 2019 | 78.20%
        </li>
      </ul>
      <h1 className="text-green-500 font-semibold text-xl">
        Skills
      </h1>
      <ul>
        <li>Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB, Mongoose, MongoDB Compass</li>
        <li>Version Control & Deployment: Git, GitHub, Vercel, Netlify</li>
        <li>Design & UI: Responsive Web Design, DaisyUI</li>
        <li>
          Authentication & API Tools: JWT, Firebase Auth, Postman, RESTful APIs
        </li>
        <li>State Management: Redux, React Context API</li>
      </ul>
      <br />
      <h1 className="text-green-500 font-semibold text-xl">
       Professional Experience
      </h1>
      <ul>
        <li>
          Frontend Developer Intern – CodeAlpha Oct 2024
          <li> ▸ Built UI components using React.js & Tailwind CSS </li>
          <li>▸ Enhanced load speed by 30% </li>
          <li>▸ Used Redux for effective state management</li>
        </li>
        <li>
          Software Developer Intern – Crescentweb Technology Aug 2022 – Nov 2022
          <li>▸ Developed C/C++-based file management app</li>
          <li> ▸ Reduced backend runtime errors significantly</li>
        </li>
        <li>
          Web Development Intern – Internshala Dec 2023 – Feb 2024
          <li>▸ Built a React.js project with dynamic API handling</li>
          <li>▸ Integrated JWT for secure authentication</li>
        </li>
      </ul>
      <br />
      <h1 className="text-green-500 font-semibold text-xl">
       Achivements And Award
      </h1>
     <ul>
        <li>
          Research Paper Publication – SPARK 2024 Conference<br />
           ▸ Topic: “QuickFind – API Integrated Search Engine”
        </li>
        <li>
          Certifications:
          <li> ▸ Full Stack Web Development – Internshala, 2024 </li>
          <li> ▸Salesforce Admin Fundamentals – Salesforce, 2023</li>
        </li>
      </ul>
      <br />
      <h1 className="text-green-500 font-semibold text-xl">
       Mission Statement
      </h1>
      <span>
To harness the power of full-stack development and innovative design to
        solve real-world problems through efficient, scalable, and intuitive web
        solutions. I aim to continuously grow as a developer while contributing
        meaningfully to the tech ecosystem.
      </span>
      <br />
    </div>
  );
}

export default About;
