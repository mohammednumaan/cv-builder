import '../styles/Experience.css'

export default function Experience({text, label, type, nameOfClass, nameOfId, value, handleChange}){
    return (
        <>
            <div className={nameOfClass}>
                <label className={label}>{text}</label>
                <input value={value} type={type} id={nameOfId} onChange={handleChange} />
            </div>
        </>
    )
}

export function Description({text, label, nameOfClass, nameOfId, value, handleChange}){
    return (
        <>
            <div className={nameOfClass}>
                <label className={label}>{text}</label>
                <textarea value={value} id={nameOfId} onChange={handleChange} />
            </div>
        </>
    )
}