import imgGobarber from "../../assets/projects/gobarber.jpg";
import imgDevMaps from "../../assets/projects/devmaps.jpg";
import imgRocketshoes from "../../assets/projects/rocketshoes.jpg";
import imgRocketfy from "../../assets/projects/rocketfy.jpg";
import imgGitRepositories from "../../assets/projects/gitrepositories.jpg";
import imgTindev from "../../assets/projects/gitrepositories.jpg";

const posts = [
  {
    id: 1,
    title: "GoBarber",
    description: `The GoBarber is an application for scheduling time in barber shops.`,
    techs: "node.js - expressjs - reactjs - redux - styled-components",
    image: imgGobarber,
    code: "https://github.com/DanielNeris/GoStack-GoBarber",
    look: "https://github.com/DanielNeris/GoStack-GoBarber"
  },
  {
    id: 2,
    title: "DevsMap",
    description: `The DevMaps is an application to search for developers around you for technologies.`,
    techs: "node.js - expressjs - reactjs - redux - reactnative",
    image: imgDevMaps,
    code: "https://github.com/DanielNeris/semanaomnistack10",
    look: "https://danielneris-devsmap.netlify.com/"
  },
  {
    id: 3,
    title: "TinDev",
    description: `The TinDev is an application to search for developers for technologies and match similarly to Tindev`,
    techs: "node.js - expressjs - reactjs - redux - reactnative",
    image: imgTindev,
    code: "https://github.com/DanielNeris/tindev-frontend",
    look: "https://danielneris-tindev.netlify.com/"
  },
  {
    id: 4,
    title: "Rocketshoes",
    description: `The RocketShoes is an application that simulates an e-commerce to buy tennis shoes.`,
    techs: "reactjs - redux - styled-components - react router dom",
    image: imgRocketshoes,
    code: "https://github.com/DanielNeris/bootcamp-gostack-07",
    look: "https://danielneris-rocketshoes.netlify.com/"
  },
  {
    id: 5,
    title: "Rocketfy",
    description: `The RocketShoes is an application that copy of the Pipefy, with the aim practice the drag and drop functionality.`,
    techs: "reactjs - react-dnd - styled-components",
    image: imgRocketfy,
    code: "https://github.com/DanielNeris/Rocketfy",
    look: "https://danielneris-rocketfy.netlify.com/"
  },
  {
    id: 6,
    title: "GitRepositories",
    description: `The GitRepositories is a project to list repositories and issues for github users.`,
    techs: "reactjs - react router dom",
    image: imgGitRepositories,
    code: "https://github.com/DanielNeris/bootcamp-gostack-05",
    look: "https://danielneris-git-repositories.netlify.com/"
  }
];

export default posts;
