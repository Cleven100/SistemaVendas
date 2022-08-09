import React from 'react'
import Layout from 'components/layout'

const RegisterProduct: React.FC = () => {
    return (
        <>

            <Layout title="Product registration" >
                <div className="columns">


                    <div className="field is-half column" >
                        <label htmlFor="inputSKU" className='label'>SKU: *</label>
                        <div className="control">
                            <input id="inputSKU" placeholder="Enter the SKU of Product:" type="text" className="input" />
                        </div>
                    </div>

                    <div className="field is-half column" >
                        <label htmlFor="inputPrice" className='label'>Price: *</label>
                        <div className="control">
                            <input id="inputPrice" placeholder="Enter the Price of Product:" type="text" className="input" />
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="field is-full column" >
                        <label htmlFor="inputName" className='label'>Name: *</label>
                        <div className="control">
                            <input id="inputName" placeholder="Enter the Name of Product:" type="text" className="input" />
                        </div>
                    </div>
                    </div>

                <div className="columns">
                <div className="field if-full column" >
                    <label htmlFor="inputDesc" className='label'>Description: *</label>
                    <div className="control">
                        <textarea id="inputDesc" placeholder="Enter the Name of Product:" className="textarea" />
                    </div>
                </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button">
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