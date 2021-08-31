import { useState } from 'react'
import { Formik } from 'formik'
import axios from 'axios'

import styles from '../styles/Form.module.css'

export default function Form() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')
    const [responseMessage, setResponseMessage] = useState('')

    const handleFormSubmit = async (values) => {
        let {success, fail} = styles
        try {
            const response = await axios.post('https://nodpractice.herokuapp.com/api/home', values)
            setResponseMessage(`Message Sent Successfully. Thanks `)
            setResponse(success)
            setTimeout(() => setResponseMessage(""), 6000);
        
        } catch (err) {

            if (err.response) {
                setResponseMessage(err.response.data.data)
                setResponse(fail)
                setTimeout(() => setResponseMessage(""), 6000);
            } else {
             setResponseMessage(`${err.message}: Kindly contact admin `)
             setResponse(fail)
             setTimeout(() => setResponseMessage(""), 6000);
            }
        }
    }

    return (
          <div className={styles.form__container}>
          <Formik
            initialValues={{name , message}}
            onSubmit={handleFormSubmit}
        >
        {({
            values,
            handleSubmit,
            touched,
            errors,
            handleChange,
            handleBlur,
        })=>(
            <form onSubmit={handleSubmit} className={styles.form__content}>
                {responseMessage.length > 0 && (<div className={response}>{responseMessage}</div>) }
                <input 
                 type="text"
                 placeholder="name"
                 required
                 onChange={handleChange}
                 value={values.name}
                 name="name"
                /> 
                <small>{errors.name}</small>
                <textarea
                    value={values.message}
                    onChange={handleChange}
                    required
                    placeholder="start typing......"
                    name="message"
                    cols="50"
                    rows="10"
                />

                <button className="page__btn" type="submit">Send</button>
            </form>
        )}
        </Formik>

          </div>
    )
}
