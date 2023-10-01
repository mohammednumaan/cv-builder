import './App.css'
import Header from './components/Header'
import { Fragment, useState } from 'react'
import Input from './components/Personal'
import { v4 as uuidv4 } from 'uuid';
import Education from './components/Education'
import CV from './components/CV'


export default function App(){

  // HANDLE ACTIVE FORM

  const [hide, setHide] = useState(false)
  const buttonText = (hide) ? 'Show' : 'Hide'

  // HANDLE NAME

  const [name, setName] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  // HANDLE EMAIL

  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  // HANDLE PHONE

  const [phone, setPhone] = useState('')

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  // HANDLE EDUCATION

  const [educations, setEducation] = useState([{'id' : uuidv4(), 'school' : '', 'degree' : '', 'starting-yr' : '', 'ending-yr' : ''}])

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

  const addNewEducation = () => {
    let object = {'id': uuidv4(), 'school' : '', 'degree' : '', 'starting' : '', 'ending' : ''}
    setEducation([...educations, object])

  }

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

  const hideEducation = (id) => {
    let datas = [...educations]
    
    datas.map(data => {
      if (data.id === id) {
        console.log(id)
        setHide(!hide)
      }
    })
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
              
              
              {!hide && (
                <div className='education-details'>
                  <Education text={'School'} label={'schoolLabel'} type={'text'} nameOfClass={'schoolName'} nameOfId={'school'} value={edu.school} handleChange={(event) => handleEducationChange(event, edu.id, 'school')}   />

                  <Education text={'Degree'} label={'degreeLabel'} type={'text'} nameOfClass={'degreeName'} nameOfId={'degree'} value={edu.degree} handleChange={(event) => handleEducationChange(event, edu.id, 'degree')}   />

                  <Education text={'Starting Year'} label={'startLabel'} type={'date'} nameOfClass={'startYear'} nameOfId={'sYear'} value={edu.starting} handleChange={(event) => handleEducationChange(event, edu.id, 'starting')}   />

                  <Education text={'Ending Year'} label={'endLabel'} type={'date'} nameOfClass={'endYear'} nameOfId={'eYear'} value={edu.ending} handleChange={(event) => handleEducationChange(event, edu.id, 'ending')}   />

                  <button id='remove-education-btn' onClick={() => removeEducation(edu.id)}>Remove</button>
                </div>
              )}
              <button id='hide-education-btn' onClick={() => hideEducation(edu.id)}>{buttonText}</button>




            </div>
          </Fragment>
        )
      })}

      <button id='add-education-btn' onClick={addNewEducation}>Add New Education</button>
      <CV name={name} email={email} phone={phone} educations={educations} />

      
    </>
  )
}