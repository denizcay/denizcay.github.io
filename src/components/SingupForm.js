import React, {useEffect, useState} from 'react';
import useForm from './useForm';

const SignupForm = ({submitForm}) => {

    const {handleChange, handleFormSubmit, values, errors} = useForm(submitForm);
    return(
        <div className='container'>
            <div className='screen'>
                <div className='screen_content'>
                    <h2>Create Account</h2>
                <form className='signup'>
                    <div className='signup_field'>
                        <input className='signup_input' type='number' placeholder='TC Number' name='tc' value={values.tc} onChange={handleChange}/>
                        {errors.tc && <p className='error'>{errors.tc}</p>}
                    </div>
                    <div className='signup_field'>
                            <input className='signup_input' type='text' placeholder='Name' name='name' value={values.name} onChange={handleChange}/>
                            {errors.name && <p className='error'>{errors.name}</p>}
                    </div>
                    <div className='signup_field'>
                            <input className='signup_input' type='text' placeholder='Surname' name='surname' value={values.surname} onChange={handleChange}/>
                            {errors.surname && <p className='error'>{errors.surname}</p>}
                    </div>
                    <div className='signup_field'>
                            <input className='signup_input' type='text' placeholder='Email' name='email' value={values.email} onChange={handleChange}/>
                            {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className='signup_field'>
                            <input className='signup_input' type='password' placeholder='Password' name='password' value={values.password} onChange={handleChange}/>
                            {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <button className='button signup_submit' onClick={handleFormSubmit}>
                        <span className='button_text'>Sign Up</span>
                    </button>
                </form>
                </div>
                <div className="screen_background">
                    <span className="screen_background_shape screen_background_shape4"></span>
                    <span className="screen_background_shape screen_background_shape3"></span>		
                    <span className="screen_background_shape screen_background_shape2"></span>
                    <span className="screen_background_shape screen_background_shape1"></span>
		        </div>		
            </div>
        </div>
    );
};

export default SignupForm;