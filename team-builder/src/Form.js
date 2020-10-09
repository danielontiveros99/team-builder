import React from 'react'

export const Form = (props) => {

    const { values, onInputChange, onSubmit } = props;
    
    return (
        <div>
        <form className='member-form' onSubmit = {onSubmit}>
            <div className='member-info'>
                <h2> Add a Teammate </h2>
            </div>
        
            <div className='member-info'>
                <label>
                    Name:&nbsp;
                    <input
                        type='text'
                        placeholder="Name of the teammate"
                        maxLength='20'
                        name='teammate'
                        value={values.teammate}
                        onChange={onInputChange}
                    />
                </label>
                </div>
                <div className='member-info'>
                <label>
                    Email:&nbsp;
                    <input
                        type='text'
                        placeholder="Email of the teammate"
                        maxLength='20'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                </div>
                <div className='member-info'>
                <label>
                    Role:&nbsp;
                    <select 
                    name='role' 
                    value={values.role} 
                    onChange={onInputChange}>
                        <option value=''>Select a Role</option>
                        <option value='Backend'>Backend</option>
                        <option value='Frontend'>Frontend</option>
                        <option value='Designer'>Designer</option>
                        <option value='Intern'>Intern</option>
                        
                    </select>
                </label>
                </div>
                <h2> Team Info</h2>
                <button>Submit</button>
            </form>        
        </div>
    );
};

export default Form;