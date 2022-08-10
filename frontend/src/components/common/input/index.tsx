import React,{ InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    onChange?: (value) => void;
    label: string;
    columnClasses?: string;
}


const Input: React.FC<InputProps> = ({
 onChange,
 label,
 columnClasses,
 id,
 ...props
}: InputProps) => {
    return (
        <div className={`field column  ${columnClasses}`} >
            <label htmlFor={id} className='label'>{label}</label>
            <div className="control">
                <input id={id} {...props} placeholder={props.placeholder} type="text" className="input"
                    onChange={event => {if(onChange){
                        onChange(event.target.value)
                    }}}
                />
            </div>
        </div>

    )
}

export default Input