import '../styles/Form.css'

export default function Form(){
    return (
        <>
            <form className="form">

                <div className="firstName">
                    <label className="firstNameLabel">First Name</label>
                    <input type="text" id="fName" />
                </div>

                <div className="lastName">
                    <label className="lastNameLabel">Last Name</label>
                    <input type="text" id="lName" />
                </div>

                
                <div className="mail">
                    <label className="emailLabel">Email</label>
                    <input type="email" id="email" />
                </div>


            </form>
        </>
    )
}