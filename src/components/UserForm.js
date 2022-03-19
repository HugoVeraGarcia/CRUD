import React, { useEffect, useState } from 'react';

const UserForm = ({ userSelected, getSelected, updateUser, addUser }) => {

    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');

    useEffect(()=>{
        if(userSelected){
            setFirst_Name(userSelected.first_name);
            setLast_Name(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        } else{
            setFirst_Name('');
            setLast_Name('');
            setEmail('');
            setPassword('');
            setBirthday('');
        }
    },[userSelected])

    const submit = (e)=>{
        e.preventDefault();
//        alert('submit');
        const user = {
            first_name : first_name.trim(),
            last_name : last_name.trim(),
            email : email.toLowerCase(),
            password,
            birthday
        };

        if (userSelected){
            user.id = userSelected.id
            updateUser(user);
            blankFields();
        }else{
            addUser(user);
            blankFields();

    }

    function blankFields(){
        setFirst_Name('');
        setLast_Name('');
        setEmail('');
        setPassword('');
        setBirthday('');
    }
    }
    return (
        <div>
            <form className='form' onSubmit={submit}>
                <div className="input-container">
                    <div className="title">
                        {userSelected ? <h2>Edit User</h2> : <h2>New User</h2>}
                    </div>
                    <label htmlFor="first_name">
                        <i className="fa-solid fa-user margin_10 font_gray size2"></i>
                    </label>
                    <input 
                    type="text" 
                    className='input_name'
                    placeholder='first name'
                    id='first_name'
                    onChange={(e)=> setFirst_Name(e.target.value)}
                    value = {first_name}
                    />
                    <input 
                        type="text"
                        className='input_name'
                        placeholder='last name'
                        id='last_name'
                        onChange={(e) => setLast_Name(e.target.value)}
                        value = {last_name}
                    />

                    <label htmlFor="email">
                    <i className="fa-solid fa-envelope margin_10 font_gray size2"></i>
                    </label>
                    <input 
                        type="email" 
                        className='input_email'
                        placeholder='email'
                        id='email'
                        onChange={(e)=> setEmail(e.target.value)}
                        value = {email}
                    />

                    <label htmlFor="password">
                        <i className="fa-solid fa-key margin_10 font_gray size2"></i>
                    </label>
                    <input 
                        type="password"
                        className='inputPassword'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value = {password}
                    />

                    <label htmlFor="date">
                    <i className="fa-solid fa-cake-candles margin_10 font_gray size2"></i>
                    </label>
                    <input 
                        type="date"
                        className='inputDate'
                        id='date'
                        onChange={(e)=>setBirthday(e.target.value)}
                        value = {birthday}
                    />
                    <div className="container-button">
                        <button className='button' >upload</button>

                        {userSelected && (
                            <button 
                                className='button'
                                type='button'
                                onClick={()=>getSelected(null) } 
                                >Cancel
                            </button>
                            )}
                    </div>

                </div>
            </form>
        </div>
    );
};

export default UserForm;