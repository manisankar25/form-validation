import React, { use, useState, useEffect } from "react"
export default function Userform() {

    const [userData, setUserData] = useState(
        {
            name: '',
            email: '',
            age: ''
        }
    )
    const [error, setError] = useState({})

    const handleChange = (e) => {
        setUserData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const validation = () => {
        let err = {}
        if (userData && userData.name.trim('') === '') {
            err.name = 'please fill data'
        } else {
            delete err.name
        }
        if (userData && userData.email.trim('') === '') {
            err.email = 'please fill data'
        } else {
            delete err.name
        }
        if (userData && userData.age.trim('') === '') {
            err.age = 'please fill data'
        } else {
            delete err.name
        }

        return err;
    }

    useEffect(() => {
        const errorList = validation()

        setError(errorList)
    }, [userData])


    const handleSave = (e) => {
        e.preventDefault();
        console.log('ggg')
    }

    console.log('userData', userData)

    return (<form onSubmit={handleSave}>
        <div><label>name</label>
            <input onChange={handleChange} type="text" name="name"></input>
            {error && Object.keys(error).length > 0 && error.name}
        </div>
        <div><label>Email</label>
            <input onChange={handleChange} type="text" name="email"></input>
        </div>
        <div><label>Age</label>
            <input onChange={handleChange} type="number" name="age"></input>
        </div>

        <button>Submit</button>

    </form>)
}