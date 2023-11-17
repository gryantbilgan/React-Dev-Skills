import React, { useState } from 'react'
import './NewSkillForm.css'

export default function NewSkillForm({ addSkill }) {
    const [formData, setFormData] = useState({
        name: "",
        level: 3
    })

    function handleChange(event) {
        const newFormData = {...formData, [event.target.name]: event.target.value}
        setFormData(newFormData)
    }

    function handleAddSkill(event) {
        event.preventDefault()
        addSkill(formData)
    }

  return (
    <>
        <h2>NEW SKILL</h2>
        <form className="NewSkillForm" onSubmit={handleAddSkill}>
            <label htmlFor='skill'>SKILL</label>
            <input 
                name="name"
                value={formData.name}
                onChange={handleChange} 
            />
            <label htmlFor='level'>LEVEL</label>
            <select 
                name="level"
                value={formData.level}
                onChange={handleChange}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        
            <button>ADD SKILL</button>
        </form>
    </>
  )
}
