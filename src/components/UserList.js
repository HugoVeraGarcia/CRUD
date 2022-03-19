import React from 'react';

const UserList = ({ users, deleteUser, getSelected }) => {
    return (
        <ul>
            {   users.map((user) => (
                <section className='card' key={user.id}>
                    <div>
                        <div className='data-container'>
                            <i className="fa-solid fa-user margin_10 font_gray"></i>
                            <p className="margin_5">{user.first_name}</p>
                            <p>{user.last_name}</p>
                        </div>
                        <div className='data-container'>
                            <i className="fa-solid fa-cake-candles margin_10 font_gray"></i>
                            <p>{user.birthday}</p>
                        </div>
                        <div className='data-container'>
                            <i className="fa-solid fa-envelope margin_10 font_gray"></i>
                            <p>{user.email}</p>
                        </div>
                        <div className='data-container'>
                            <i className="fa-solid fa-key margin_10 font_gray"></i>
                            <p>{user.password}</p>
                        </div>
                    </div>
                    <div className='icons'>
                        <i onClick={() => deleteUser(user.id)} className="fa-solid fa-trash-can font_red size_1rem"></i>
                        <i onClick={() => getSelected(user)} className="fa-solid fa-pencil size_1rem font_yellow"></i>
                    </div>
                </section>


            ))



                
            }

        </ul>
    );
};

export default UserList;