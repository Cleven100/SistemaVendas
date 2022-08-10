import React, { useState } from 'react'
import Layout from 'components/layout'
import Input from 'components/common/input'

const RegisterProduct: React.FC = () => {

    const [sku, setSku] = useState<string>('')
    const [price, setPrice] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const submit = () => {
        const product = {
            sku, price, name, description
        }
    }

    return (
        <>

            <Layout title="Product registration" >
                <div className="columns">
                    <Input label="SKU *" columnClasses='is-half'
                        onChange={setSku} value={sku} id="inputSku"
                    ></Input>

                    <Input label="Price *" columnClasses='is-half'
                        onChange={setPrice} value={price} id="inputPrice"
                    ></Input>


                   
                </div>

                <div className="columns">

                <Input label="Name *" columnClasses='is-full'
                    onChange={setName} value={name} id="inputName"
                    ></Input>


                  
                </div>

                <div className="columns">
                    <div className="field if-full column" >
                        <label htmlFor="inputDesc" className='label'>Description: *</label>
                        <div className="control">
                            <textarea id="inputDesc" placeholder="Enter the Name of 
                        Product:" value={description} onChange={event => setDescription(event.target.value)} className="textarea" />
                        </div>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button" onClick={submit}>
                            Save
                        </button>
                    </div>
                    <div className="control">
                        <button className="button">
                            Return
                        </button>
                    </div>
                </div>



            </Layout>




        </>

    )
}

export default RegisterProduct