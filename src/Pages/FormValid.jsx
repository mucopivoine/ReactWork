import React from 'react'
import './App.css'

const FormValid = () => {
    const [ formData, setFormData] = useState({
        email:'',
        password:'',
    })
    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.userName.trim()) {
            
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email:</label>
            <input type="text"  name="" placeholder="" onChange={handleChange}></input>
        </div>

    </form>
  )
}

export default FormValid