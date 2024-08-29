import useInView from "./useInView";
import image from '../assets/main.avif';
const Home = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section
      ref={ref}
      id="Home"
      className={`transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      } flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-white text-black lg:px-28`}
    >
      {/* Lado Izquierdo */}
      <div className="lg:w-1/2 p-8 text-center ">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center font-title">
          Alfonso Galguera Caballero
        </h1>
        <h2 className="text-2xl lg:text-4xl mb-6 text-center font-body">
          Desarrollador Frontend
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 text-justify font-body">
          Apasionado por crear interfaces web modernas y eficientes, con un
          enfoque en la experiencia del usuario y el rendimiento. Siempre en
          busca de aprender y aplicar nuevas tecnologías en el desarrollo
          frontend.
        </p>
        <button
          onClick={() =>
            window.open("/CV-ALFONSOGALGUERA.pdf", "_blank")
          }
          className="font-bold font-body py-2 px-4 rounded-lg mt-12 border-2 border-green-300 hover:border-green-800 transition duration-300"
        >
          Descargar CV
        </button>
      </div>

      {/* Lado Derecho */}
      <div className="lg:w-1/2 p-8">
        <img
          src={image}
          alt="Programación"
          className="w-auto h-auto flex justify-end animate-customTilt"
        />
      </div>
    </section>
  );
};

export default Home;
