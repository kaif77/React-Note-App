exports.validateTitle = (title) => {
    const regEx = /^[a-zA-Z0-9\s]+$/
    return regEx.test(title);
}

exports.validateName = (name) => {
    const regEx = /^[a-zA-Z\s]+$/
    return regEx.test(name);
} 


exports.validateUsername = (username) => {
    const regEx = /^[a-zA-Z0-9\s]+$/
    return regEx.test(username);
} 

exports.validateEmail = (email) => {
    const regEx = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9\.]{2,}$/
    return regEx.test(email);
} 