import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '', email: '', age: '', course: '', gender: '', skills: [], address: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleCheckbox = (e) => {
    const { value, checked } = e.target
    let skills = [...form.skills]

    if (checked) skills.push(value)
    else skills = skills.filter(s => s !== value)

    setForm({ ...form, skills })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/success')
  }

  return (
    <div className="container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Student Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} required />

        <select name="course" onChange={handleChange} required>
          <option value="">Select Course</option>
          <option>CSE</option>
          <option>ECE</option>
          <option>EEE</option>
          <option>MECH</option>
        </select>

        <div>
          <label><input type="radio" name="gender" value="Male" onChange={handleChange}/> Male</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange}/> Female</label>
        </div>

        <div>
          <label><input type="checkbox" value="Java" onChange={handleCheckbox}/> Java</label>
          <label><input type="checkbox" value="Python" onChange={handleCheckbox}/> Python</label>
          <label><input type="checkbox" value="React" onChange={handleCheckbox}/> React</label>
        </div>

        <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
