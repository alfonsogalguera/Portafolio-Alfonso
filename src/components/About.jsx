import useInView from "./useInView";
const AboutMe = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section
      ref={ref}
      id="About"
      className={`transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      } text-gray-800 p-8 md:p-12 lg:p-16`}
    >
      {/* Sección superior: Descripción personal */}
      <div className="mb-12">
        <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-center mb-6 text-black font-title">
          Sobre mí
        </h2>
        <p className="text-lg leading-relaxed text-justify max-w-3xl mx-auto font-body">
          Soy un desarrollador frontend con dos años de experiencia profesional,
          con especialización en frameworks y librerías de JavaScript como
          React, Angular, y Next.js. Tengo un sólido dominio de CSS y Tailwind
          CSS para la creación de interfaces de usuario responsivas y
          eficientes. He gestionado el control de versiones utilizando GitHub,
          implementado funcionalidades avanzadas mediante React hooks, y
          optimizado el manejo de datos a través de integraciones con APIs
          RESTful.
        </p>
      </div>

      {/* Sección inferior: Historial académico y experiencia laboral */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Historial académico y cursos */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-black mb-4 font-title">
            Historial Académico y Cursos
          </h3>
          <ul className="space-y-4 font-body">
            <li>
              <strong>
                Licenciatura en ingeniería en tecnologías de la información
              </strong>{" "}
              - Benemérita Universidad Autónoma de Puebla (2016-2021)
            </li>
            <li>
              <strong>Curso de desarrollo frontend con react</strong> - Alura
              (2022-2022)
            </li>
          </ul>
        </div>

        {/* Experiencia laboral */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-black mb-4 font-title">
            Experiencia laboral
          </h3>
          <ul className="space-y-4 font-body">
            <li>
              <strong>Desarrollador Frontend</strong> - WhatTheCode (2023-2024)
              <p className="text-gray-600">
                Desarrollo de aplicaciones web utilizando React.js y Next.js,
                integrando APIs REST, y optimización de interfaces para
                múltiples dispositivos.
              </p>
            </li>
            <li>
              <strong>Desarrollador Frontend</strong> - DapperTechologies
              (2022-2023)
              <p className="text-gray-600">
                Desarrollo de aplicaciones web utilizando Angular, integrando
                APIs REST, realizando landings pages.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
