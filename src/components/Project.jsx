import Projects from "./Projects";
import useInView from "./useInView";
import agaldent from '../assets/agaldent.png';
import rwings from '../assets/rwings.png';
import ecommerce from '../assets/ecommerce.png';
import covid from '../assets/covid.png';
import redsocial from '../assets/redsocial.png';
import pokedex from '../assets/pokedex.png';
import abogados from '../assets/juridico.png';
import ciudad from '../assets/ciudadMaderas.png';
import cotiza from '../assets/cotiza.png';
const projects = [
  {
    imageSrc: agaldent,
    title: "Agaldent",
    description:
      "Proyecto freelancer a una clinica dental, usando solamente html, css y javascript.",
    githubLink: "https://github.com/alfonsogalguera/Agaldent",
    demoLink: "https://alfonsogalguera.github.io/Agaldent/Index.html",
  },
  {
    imageSrc: rwings,
    title: "R-wings",
    description:
      "No tengo repositorio de este proyecto, ya que fue un proyecto realizado en mis practicas profesionales.",
  },
  {
    imageSrc: ecommerce,
    title: "Ecommerce",
    description: "Proyecto personal de maquetado realizado con react.",
    githubLink: "https://github.com/alfonsogalguera/ecommerce",
    demoLink: "https://ecommerce-maquetado.web.app/",
  },
  {
    imageSrc: covid,
    title: "Covid 19",
    description:
      "Proyecto realizado en practicas profesionales para la facultad de computación.",
    demoLink: "https://proyecto-covid.siycise.org/mexico.html",
  },
  {
    imageSrc: redsocial,
    title: "Red Social",
    description: "Proyecto personal de maquetado realizado con react.",
    githubLink: "https://github.com/usuario/repositorio",
    demoLink: "https://redsocial-maquetado.web.app/",
  },
  {
    imageSrc: pokedex,
    title: "Pokedex",
    description: "Proyecto personal usando api de pokemon.",
    githubLink: "https://github.com/alfonsogalguera/pokedex",
    demoLink: "https://pokedex-8b01d.web.app/pokedex",
  },
  {
    imageSrc: abogados,
    title: "Estrategias de abogados",
    description:
      "Proyecto hecho con dapperTechologies, no tengo el repositorio.",
    demoLink: "https://bufetedeabogadosej.com.mx/",
  },
  {
    imageSrc: ciudad,
    title: "Ciudad Maderas",
    description:
      "Proyecto hecho con dapperTechologies, no tengo el repositorio.",
    demoLink:
      "https://ciudadmaderas.com/?utm_source=google_ads&utm_medium=search&utm_campaign=branding&utm_content=search_b&gad_source=1&gclid=CjwKCAjwlbu2BhA3EiwA3yXyu_ihBCA-xiA2fUpZ3SXj3TGx36EHPHTH6_BdxdF1cFu-4k20vbgmtBoC-VUQAvD_BwE",
  },
  {
    imageSrc: cotiza,
    title: "Cotiza facil",
    description: "Proyecto hecho con What the code, no tengo el repositorio.",
    demoLink: "https://prod.cotiza-facil.guaodev.com/",
  },
];

const Project = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <>
      <h1
        ref={ref}
        id="Project"
        className={`transition-opacity duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        } text-center font-bold text-[36px] md:text-[48px] lg:text-[60px] my-8 font-title`}
      >
        Proyectos
      </h1>
      <div
        ref={ref}
        className={`transition-opacity duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-16 mb-8 mx-4`}
      >
        {projects.map((project, index) => (
          <Projects key={index} {...project} />
        ))}
      </div>
    </>
  );
};
export default Project;
