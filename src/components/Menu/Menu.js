import {useState, useContext} from 'react'
import './Menu.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom'
import profileImage from './../../assets/fotogabo.jpg'
import {LanguageContext} from '../../context/LanguageContext'

const Menu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {language, setLanguage}= useContext(LanguageContext)
    const handleClickEN = () =>{
        setLanguage('en')
    }
    const handleClickES = () =>{
        setLanguage('es')
    }
    let activeEN
    let activeES
    if(language==='en'){
        activeEN='active';
        activeES='';
    }else{
        activeEN='';
        activeES='active';
    }
    return (
        <Navbar className='menu' expand='lg' variant='dark'>
            <Navbar.Toggle aria-controls='menu'/>
            <Navbar.Collapse id='menu'>
            <Nav className='flex-column'>
            <div className='image-container'>
                <img src={profileImage} onClick={handleShow} className='profile-image' alt='profile-image'/>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton/>
                <Modal.Body>
                <img src={profileImage} className='profile-image-big' alt='profile-image'/>
                </Modal.Body>
            </Modal>
            <div className='menu-items'>
                {language==='en'?
                <>
                    <Link to='/' className='item'>About me</Link>
                    <Link to='/education' className='item'>Education</Link>
                    <Link to='/experience' className='item'>Experience</Link>
                    <Link to='/skills' className='item'>Skills</Link>
                    <a href='https://drive.google.com/file/d/1dCJ7WyhereiwH0dPAWRpcBvSdgfU0ROm/view?usp=sharing' className='item' target='_blank'>PDF version</a>
                </>
                :
                <>
                    <Link to='/' className='item'>Sobre mí</Link>
                    <Link to='/education' className='item'>Educación</Link>
                    <Link to='/experience' className='item'>Experiencia</Link>
                    <Link to='/skills' className='item'>Habilidades</Link>
                    <a href='https://drive.google.com/file/d/1fyujX_Zy2EU3BPdBK9fARA-OVZywZW1o/view?usp=sharing' className='item' target='_blank'>Versión en PDF</a>
                </>
                }
                <div className='d-inline'>
                    <button onClick={handleClickEN} className={`item button-menu mr-3 ${activeEN}`}>EN</button>
                    <button onClick={handleClickES} className={`item button-menu ${activeES}`}>ES</button>
                </div>
            </div>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu