const validation = (values) => {
    let errors = {};

    if(values.tc.length < 11){
        errors.tc="TC Number is invalid."
    }
    if(!values.name){
        errors.name = "Name is required."
    } else if(values.name.length < 2){
        errors.name = "Name is invalid."
    }
    if(!values.surname){
        errors.surname = "Surname is required."
    } else if(values.surname.length < 2){
        errors.surname = "Surname is invalid."
    }
    if(!values.email){
        errors.email = "Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid."
    }
    if(!values.password){
        errors.password = "Password is required."
    }else if(values.password.length < 6){
        errors.password = "Password must be more than six characters."
    }
    return errors;
};

export default validation;