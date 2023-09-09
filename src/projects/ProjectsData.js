import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Anime/Novel Database",
    image: projectOne,
    description: (
      <>
        <p>
         Cellphone/Computer compatible anime and novel tracker app. Pulls 
         from databases and saves to internal storage.
        </p>
      </>
    ),
    github: "https://github.com/Filippo-2002/Anime-Novel-Web-App.git",
    demo: "https://mellow-cupcake-98dba1.netlify.app",
  },
  2: {
    title: "School_Forum",
    image: projectTwo,
    description: (
      <>
        <p>
          Multi-threaded school forum coded in Java, JavaScript, HTML, CSS, and supported by MongoDB database.
        </p>
      </>
    ),
    github: "https://github.com/jennykim515/trojanchat.git",
    demo: "https://drive.google.com/file/d/1BpF1W7sBfObWG-A3gDhd9_jhmIIdRzh0/view?usp=sharing",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;