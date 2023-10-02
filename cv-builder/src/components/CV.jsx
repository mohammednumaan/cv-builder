import { Fragment } from 'react'
import '../styles/CV.css'

export default function CV({name, email, phone, educations, experiences}){
    return (

        <div className='cv'>
            <div className='cv-container'>
                <div className="cv-info">
                    <div className='cv-name'>
                        <h3 className='name'>{name}</h3>
                    </div>

                    <div className='cv-email-tel'>
                        <h3 className='email'>Email : {email}</h3>
                        <h3 className='phone'>Phone : {phone}</h3>
                    </div>

                    <h1 className='cv-education-header'>Education</h1>
                    <div className='cv-education'>
                        {educations.map(edu => {
                            return (
                                <Fragment key={edu.id}>
                                    <div className='education-info'>

                                        <div className='school-info'>
                                            <h3 className='school-name'>School : {edu.school}</h3>
                                            <h3 className='degree-name'>Degree : {edu.degree}</h3>
                                        </div>
                                            
                                        <div className='year-info'>
                                            <h5 className='start-year'>Start Year : {edu.starting}</h5>
                                            <h5 className='end-year'>End Year : {edu.ending}</h5>
                                        </div>
                                    </div>
                                    <hr className='line-education' />
                                </Fragment>
                            )
                        })}
                    </div>

                    <h1 className='cv-experience-header'>Experience</h1>
                    <div className='cv-experience'>
                        {experiences.map(exp => {
                            return (
                                <Fragment key={exp.id}>
                                    <div className='experience-info'>

                                        <div className='company-info'>
                                            <h3 className='company-name'>Company : {exp.company}</h3>
                                            <h3 className='job-title'>Job Title : {exp.job}</h3>
                                            <h3 className='duration'>Duration : {exp.duration}</h3>
                                        </div>

                                        <div className='description'>
                                            <h2>Experience Description</h2>
                                        </div>

                                        <div className='content'>
                                            <p>{exp.description}</p>
                                        </div>

                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className='cv-footer'>A Mohammed Numaan Build.</div>
                </div>
                
            </div>
        </div>
    )
}