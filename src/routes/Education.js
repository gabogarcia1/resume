import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import './../styles/education.css'

const Education = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className='box-container mt-3 mb-0 pr-3'>
            <h2 className='seccion-title mb-5'>{language === 'en' ? 'Education' : 'Educación'}</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Facultad de Ciencias Exactas y Tecnología · UNT</h3>
                    <div className="subheading mb-2">{language === 'en' ? 'Biomedical Engineering' : 'Ingeniería Biomédica'}</div>
                    <div>{language === 'en' ? 'Advanced student 98% finished. Expected graduation: 2022' : 'Estudiante avanzado - 98% . Cursado completo. Perspectiva de graduación: 2022'}</div>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{language === 'en' ? '2015-present' : '2015-presente'}</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Facultad de Ciencias Exactas y Tecnología · UNT</h3>
                    <div className="subheading mb-2">{language === 'en' ? 'Electronic Engineering' : 'Ingeniería Electronica'}</div>
                    <div>{language === 'en' ? 'Advanced student. Expected graduation: 2023' : 'Estudiante avanzado. Cursado completo. Perspectiva de graduación: 2022'}</div>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{language === 'en' ? '2020-present' : '2020-presente'}</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Facultad de Ciencias Exactas y Tecnología · UNT</h3>
                    <div className="subheading mb-2">{language === 'en' ? 'Courses: "Prácticas basicas con microcontroladores" // "Desarrollo de sistemas microcontrolados"' : 'Cursos: "Prácticas básicas con microcontroladores" // "Desarrollo de sistemas microcontrolados"'}</div>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">2017</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Rolling Code School</h3>
                    <div className="subheading mb-3">{language === 'en' ? 'Course: "Full stack developer"' : 'Curso: "Full stack developer"'}</div>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">2020</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">DevPlace Tech Academy</h3>
                    <div className="subheading mb-3">{language === 'en' ? 'Course: "Back End: C# Course"' : 'Curso: "Back End: C# Course"'}</div>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">2021</span></div>
            </div>
        </div>
    )
}

export default Education