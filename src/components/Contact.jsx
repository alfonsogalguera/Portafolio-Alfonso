import { TfiLinkedin } from "react-icons/tfi";
import { FaGithubSquare } from "react-icons/fa";
import useInView from "./useInView";
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_a3tr4l7",
      "template_2yr1uz9",
      e.target,
      "user_9R29atWJXxHZnL1X59M65"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Mensaje enviado exitosamente");
      },
      (error) => {
        console.log(error.text);
        alert("Ocurrió un error al enviar el mensaje");
      }
    );

  e.target.reset();
};

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section
      ref={ref}
      id="contact"
      className={`transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      } p-4 md:p-8 mb-4`}
    >
      <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-center mb-6 font-title">
        Contáctame
      </h2>
      <div className="max-w-lg mx-auto">
        <form
          className="bg-white rounded-lg p-4 md:p-6 font-body"
          onSubmit={sendEmail}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Escribe tu mensaje..."
            />
          </div>
          <button
            type="submit"
            className="bg-green-300 text-black py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-green-500 transition-colors w-full font-bold"
          >
            Enviar Mensaje
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-700">También puedes encontrarme en:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/alfonso-galguera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TfiLinkedin size={"24px"} className="md:text-[28px]" />
            </a>
            <a
              href="https://github.com/alfonsogalguera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={"24px"} className="md:text-[28px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
