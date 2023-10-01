
import '../styles/Personal.css'

export default function Input({text, label, type, nameOfClass, nameOfId, value, handleChange}){

    return (
        <>
            <div className={nameOfClass}>
                <label className={label}>{text}</label>
                <input value={value} type={type} id={nameOfId} onChange={handleChange} />
            </div>
        </>
    )
}

