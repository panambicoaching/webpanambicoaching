const validateEmail = (email, setError) => {
    if (!email) {
        setError(true);
        return false;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{3,}$/g.test(email, setError)) {
        setError(true);
        return false;
    }

    setError(false);
    return true;
};

const validateFirstName = (firstName, setError) => {
    if (!firstName) {
        setError(true);
        return false;
    }

    if (!/^[a-zA-Z]+$/g.test(firstName)) {
        setError(true);
        return false;
    }

    setError(false);
    return true;
};

const validateSubject = (subject, setError) => {
    if (!subject) {
        setError(true);
        return false;
    }

    setError(false);
    return true;
};

const validateMessage = (message, setError) => {
    if (!message) {
        setError(true);
        return false;
    }

    setError(false);
    return true;
};

const validator = {
    validateEmail,
    validateFirstName,
    validateSubject,
    validateMessage
};

export default validator;