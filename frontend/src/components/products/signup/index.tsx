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
                    onChange={setSku}
                    ></Input>

                    <div className="field is-half column" >
                        <label htmlFor="inputSKU" className='label'>SKU: *</label>
                        <div className="control">
                            <input id="inputSKU" value={sku}  placeholder="Enter the SKU of Product:" type="text" className="input"
                            onChange={event => setSku(event.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="field is-half column" >
                        <label htmlFor="inputPrice" className='label'>Price: *</label>
                        <div className="control">
                            <input id="inputPrice" value={price} placeholder="Enter the Price of Product:" type="text" className="input" 
                            onChange={event => setPrice(event.target.value)} 
                            />
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="field is-full column" >
                        <label htmlFor="inputName" className='label'>Name: *</label>
                        <div className="control">
                            <input id="inputName" placeholder="Enter the Name of Product:" type="text" value={name} className="input"
                            onChange={event => setName(event.target.value)} 
                            />
                        </div>
                    </div>
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