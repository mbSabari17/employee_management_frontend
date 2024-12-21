import React, { useState } from "react";
const EmployeeDelete = () => {
    const [formData, setFormData] = useState({
        id: '',
    }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/employees/${formData.id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Employee Deleted successfully')
            } else {
                alert(`server error: ${response.statusText}`);
            }
        } catch (error) {
            alert(`Network error: ${error.message}`);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit" className="delete-button">Delete</button>
        </form>
    )
}

export default EmployeeDelete