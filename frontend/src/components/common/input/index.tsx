import React from 'react'

interface InputProps {
    onChange?: (value) => void;
    label: string;
    columnClasses?: string;
}


const Input: React.FC<InputProps> = ({
 onChange,
 label,
 columnClasses
}: InputProps) => {
    return (
        <div className={`field column  ${columnClasses}`} >
            <label htmlFor="inputSKU" className='label'>{label}</label>
            <div className="control">
                <input id="inputSKU" value={"sku"} placeholder="Enter the SKU of Product:" type="text" className="input"
                    onChange={event => {if(onChange){
                        onChange(event.target.value)
                    }}}
                />
            </div>
        </div>

    )
}

export default Input