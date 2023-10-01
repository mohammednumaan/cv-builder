import './App.css'
import Header from './components/Header'
import { Fragment, useState } from 'react'
import Input from './components/Personal'
import { v4 as uuidv4 } from 'uuid';
import Education from './components/Education'
import CV from './components/CV'
import Experience from './components/Experience';


export default function App(){
  
  // STATE VARIABLES

  const [educations, setEducation] = useState([{'id' : uuidv4(), 'school' : '', 'degree' : '', 'starting-yr' : '', 'ending-yr' : ''}])
  const [experiences, setExperience] = useState([{'id' : uuidv4(), 'company' : '', 'job' : '', 'description' : ''}])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [active, setActive] = useState(true)
  const [currentId, setCurrentId] = useState(educations[0].id)


  // HANDLE NAME


  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  // HANDLE EMAIL


  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  // HANDLE PHONE


  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  // HANDLE EDUCATION


  const handleEducationChange = (e, id, propName) => {
    let datas = [...educations]
    datas.map(data => {

      if (data.id === id && propName === 'school'){
        data.school = e.target.value
      }
      if (data.id === id && propName === 'degree'){
        data.degree = e.target.value
      }

      if (data.id === id && propName === 'starting'){
        data.starting = e.target.value
      }
      if (data.id === id && propName === 'ending'){
        data.ending = e.target.value
      }
    })

    setEducation(datas)

  }

  // ADD NEW EDUCATION

  const addNewEducation = (e) => {
    if (educations.length <= 2){
      let object = {'id': uuidv4(), 'school' : '', 'degree' : '', 'starting' : '', 'ending' : ''}
      setEducation([...educations, object])
    }
    if (educations.length > 2){
      e.target.disabled = true;
      alert('You Can Only Add 3 Educational Experience!')
    }
  }

  // REMOVE EDUCATION

  const removeEducation = (id) => {
    let datas = [...educations]
    datas.map(data => {
      if (data.id === id){
        let index = datas.indexOf(data)
        datas.splice(index, 1)
      }
    })
    setEducation(datas)
    
  }

  // SHOW/HIDE EDUCATION

  const hideEducation = (id) => {
    setActive(!active)
    let datas = [...educations]
    
    datas.map(data => {
      if (data.id === id) {
        setCurrentId(id)
      }
    })
  }

  // BUTTON TEXT

  let buttonText = (active) ? 'Show' : 'Hide'


  // HANDLE COMPANY
  const handleCompanyChange = (e, id, propName) => {
    let datas = [...experiences]
    datas.map(data => {
      if (data.id === id && propName === 'company'){
        data.company = e.target.value
      }
    })
    setExperience(datas)
  }


  // UI RENDER

  return (
    <>

      <Header />
      <h2 className='personal-info-header'>Personal Information</h2>
      <div className='CV-Personal'>
        <Input text={'Full Name'} label={'fullNameLabel'} type={'text'} nameOfClass={'fullName'} nameOfId={'fName'} value={name} handleChange={handleNameChange} />
        <Input text={'Email'} label={'emailLabel'} type={'email'} nameOfClass={'mail'} nameOfId={'email'} value={email} handleChange={handleEmailChange} />
        <Input text={'Phone'} label={'phoneLabel'} type={'tel'} nameOfClass={'tel-phone'} nameOfId={'phone'} value={phone} handleChange={handlePhoneChange} />

      </div>

      <h2 className='education-info-header'>Education</h2>
      {educations.map((edu) => {
        return (
          <Fragment key={edu.id}>
            <div className='CV-Education'>

              <h2 className='school-header'>{edu.school}</h2>
              {(!active && currentId === edu.id) && (
                <div className='education-details'>
                  <Education text={'School'} label={'schoolLabel'} type={'text'} nameOfClass={'schoolName'} nameOfId={'school'} value={edu.school} handleChange={(event) => handleEducationChange(event, edu.id, 'school')}   />

                  <Education text={'Degree'} label={'degreeLabel'} type={'text'} nameOfClass={'degreeName'} nameOfId={'degree'} value={edu.degree} handleChange={(event) => handleEducationChange(event, edu.id, 'degree')}   />

                  <Education text={'Starting Year'} label={'startLabel'} type={'date'} nameOfClass={'startYear'} nameOfId={'sYear'} value={edu.starting} handleChange={(event) => handleEducationChange(event, edu.id, 'starting')}   />

                  <Education text={'Ending Year'} label={'endLabel'} type={'date'} nameOfClass={'endYear'} nameOfId={'eYear'} value={edu.ending} handleChange={(event) => handleEducationChange(event, edu.id, 'ending')}   />

                  <button id='remove-education-btn' onClick={() => removeEducation(edu.id)}>Remove</button>
                </div>
              )}
              <button id='hide-education-btn' onClick={() => {
                hideEducation(edu.id)
              }}>{buttonText}</button>

            </div>
          </Fragment>
        )
      })}
      <button id='add-education-btn' onClick={(event) => addNewEducation(event)}>Add New Education</button>
      
      <h2 className='experience-info-header'>Experience</h2>
      {experiences.map((exp) => {
        return (
          <Fragment key={exp.id}>

            <div className='CV-Experience'>
              <div className='experience-details'>

                <Experience text={'Company Name'} label={'companyLabel'} type={'text'} nameOfClass={'companyName'} nameOfId={'company'} value={exp.company} handleChange={(event) => handleCompanyChange(event, exp.id, 'company')} />

              </div>
            </div>

          </Fragment>
        )
      })}

      
      <CV name={name} email={email} phone={phone} educations={educations} experiences={experiences} />

    </>
  )
}