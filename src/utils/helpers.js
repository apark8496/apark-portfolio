const validateEmail = (email) => {
    // regex for basic email address pattern
    let regex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/;
    // returns boolean checking if email string matches regex
    return regex.test(String(email).toLowerCase());
}

export default validateEmail;