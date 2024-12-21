import React, { useEffect, useState } from 'react';
import './EmployeeCreate.css';


const EmployeeCreate = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        position: '',
        department: '',
        phone: '',
        email: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Employee Created successfully');
            } else {
                alert(`Server error: ${response.statusText}`);
            }
        } catch (error) {
            alert(`Network error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Position:
                <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Department:
                <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Phone:
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit" className='create-button'>Create</button>
        </form>
    );
};

export default EmployeeCreate;
