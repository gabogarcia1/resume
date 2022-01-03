import { useContext } from "react";
import { LanguageContext } from "./../context/LanguageContext";
import "./../styles/experience.css";

const Experience = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="box-container mt-3 mb-0 pr-3">
      <h2 className="seccion-title mb-5">
        {language === "en" ? "Experience" : "Experiencia"}
      </h2>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">
            {language === "en" ? "QA Engineer" : "QA Engineer"}
          </h3>
          <div className="subheading mb-2">SOVOS</div>
          <div>
            {language === "en"
              ? "Funtional Testing – Azure Test plans – JIRA - SQL Server, SOAP UI & POSTMAN "
              : " Funtional Testing – Azure Test plans – JIRA - SQL Server, SOAP UI & POSTMAN"}
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">
            Jul' 2021 - {language === "en" ? "present" : "presente"}
          </span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">
            {language === "en" ? "Digital Signal Processing" : "Procesamiento digital de señales"}
          </h3>
          <div className="subheading mb-2">{language === "en"
              ? "EVC-CIN Scholarship - FACET - UNT"
              : "Beca EVC-CIN - FACET - UNT"}</div>
          <div>
            {language === "en"
              ? "Electrochemical properties and bioimpedance of a new component - Using Matlab and Microcap XII"
              : "Estudio de las características de un nuevo componente de impedancia electroquímico, usando MATLAB y Microcap XII"}
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">
            Jul' 2020 - Jul' 2021
          </span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">
            {language === "en" ? "Data Analysis using MatLab" : "Analisis de datos usando MatLab"}
          </h3>
          <div className="subheading mb-2">{language === "en"
              ? "SI.PRO.SA – Research Project"
              : "SI.PRO.SA - Proyecto de investigacion"}</div>
          <div>
            {language === "en"
              ? "Early detection of respiratory failure using continuous monitoring of O2 saturation in patients affected by COVID-19¨"
              : "DETECCIÓN TEMPRANA DE FALLA RESPIRATORIA UTILIZANDO MONITOREO TELEMÉTRICO CONTINUO DE LA SATURACIÓN DE 02 EN PACIENTES AFECTADOS DE COVID"}
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">
            Jul' 2020 - Jul' 2021
          </span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">
            {language === "en" ? "Assistant professor" : "Ayudante estudiantil"}
          </h3>
          <div className="subheading mb-2">
            Facultad de Ciencias Exactas y Tecnología · UNT ·{" "}
            {language === "en"
              ? 'Department: "Electrónica I"'
              : ' Cátedra: "Electrónica I"'}
          </div>
          <div>
            {language === "en"
              ? "In charge of taking care the electronics laboratory, teaching about how to use the equipment, desing circuits and make them work "
              : " A cargo del dictado de clases en el laboratorio de electrónica, donde se enseña la aplicación práctica de la materia."}
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Jul' 2019 - Aug' 2021</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">
            {language === "en" ? "Student intern" : "Pasantía estudiantil"}
          </h3>
          <div className="subheading mb-2">
            {" "}
            {language === "en"
              ? 'Department of Engineering in "Sanatorio 9 de Julio" Hospital '
              : "Departamento de Ingenieria en Sanatorio 9 de Julio"}
          </div>
          <div>
            {language === "en"
              ? "Management of the institution's health technologies. Preventive and corrective maintenance of medical devices"
              : "Gestión de las tecnologías sanitarias de la institución. Mantenimiento preventivo y correctivo de dispositivos médicos"}
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Mar' 2021 - Jun' 2021 </span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">
            {language === "en" ? "Student body representative" : "Representante estudiantil"}
          </h3>
          <div className="subheading mb-2">
            {" "}
            {language === "en"
              ? 'Biomedical Engineering Career'
              : "Carrera ingenieria biomedica"}
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Jul' 2019 - Nov' 2021</span>
        </div>
      </div>
      {/* <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">
            {language === "en" ? "Small projects" : "Proyectos pequeños"}
          </h3>
          <a href="#" target="_blank" className="subheading mb-3 portfolio">
            {language === "en"
              ? "Personal Portfolio in progress"
              : "Portafolio personal en desarrollo"}
          </a>
          <div className="d-lg-flex">
            <div className="mr-4">
              <div>
                ·{" "}
                {language === "en"
                  ? "Calculator (React)"
                  : "Calculadora (React)"}
              </div>
              <div>
                ·{" "}
                {language === "en"
                  ? "Nutrition web app (MERN stack)"
                  : "Aplicación web de nutrición (MERN stack)"}
              </div>
              <div>· Simpson's API (Node JS)</div>
              <div>· {language === "en" ? "This resume" : "Este resumén"}</div>
            </div>
            <div>
              <div>
                ·{" "}
                {language === "en"
                  ? "Friends party (React)"
                  : "Juntada de amigos (React)"}
              </div>
              <div>· {language === "en" ? "Others" : "Otros"}</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Experience;
