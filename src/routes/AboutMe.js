import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import profileImage from "./../assets/fotogabo.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./../styles/aboutMe.css";

const AboutMe = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="box-container">
      <div className="d-flex">
        <h1 className="name">
          Gabriel<span className="important">Garcia</span>
        </h1>
        <div className="image-container2">
          <img
            src={profileImage}
            className="profile-image"
            alt="profile-image"
          />
        </div>
      </div>
      <div className="contact-data">
        Munecas 674 · San Miguel de Tucumán, Tucumán CP 4000 · +549 3816476628·{" "}
        <a className="important" href="mailto:gabegarcia916@gmail.com">
          gabegarcia916@gmail.com
        </a>
      </div>
      <p className="description">
        {language === "en"
          ? "My name is Gabriel and I am a former Rotary Youth Exchange student, spent a year in Maryland, USA. Where I finished my junior year in high school and was part of the Cross Country, indoor track and outdoor track teams. When I came back Argentina I started college and became a Biomedical Engineering student. On the third year of my career I started programming PIC microcontrollers using a C lenguage, after that, I started coding in MatLab (data analysis and signal processing) and arduinos. In 2020, I started programming PLC,VHDL (for FPGA's),C++ and also started studying to become a Full Stack Developer (Front-end and Back-end),HTML, CSS, BOOTSTRAP, JAVASCRIPT and REACT. My goals are to finish my career and to improve myself professionally in the software development field. I'm active,sociable, great at public speaking,easy to adapt to groups and situations, fluent in english and spanish, ready to face any challenge that comes ahead."
          : "Me llamo Gabriel. Fui estudiante de intercambio por un año en Maryland, Estados Unidos, donde hice mi penultimo año de secundaria, fui parte del equipo de Cross Country, Indoor track y outdoor Track. Estoy terminando la carrera de Ingenieria con un promedio de 8/10 y 98% de la carrera completa. En tercer año de universidad empece a programar microcontroladores PIC donde aprendi a C, luego trabaje en proyectos usando Matlab(Analisis de datos y procesamiento digital de señales) con muy buenos resultados. En 2020, realice proyectos usando arduino y FPGA (usando lenguaje de programacion VHDL) y aprendi mas a fondo el lenguaje C/C++. Tambien empece mi carrera como Full Stack developer MERN (Front-end and Back-end). Mis metas son terminar mi carrera, perfeccionarme profesionalmente en el campo del desarrollo de software, y algún dia aplicar ambas. Activo, sociable, y de fácil adaptacion a grupos y situaciones. Fluido en ingles y listo para enfrentar los desafios que me deparen en el futuro"}
      </p>
      <div className="social-icons">
        <a
          className="social-icon"
          target="_blank"
          href="https://www.linkedin.com/in/luis-gabriel-garcia/"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="social-icon"
          target="_blank"
          href="https://github.com/gabogarcia1"
        >
          <AiFillGithub />
        </a>
        <a
          className="social-icon"
          target="_blank"
          href="https://www.facebook.com/gabegarcia916"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
