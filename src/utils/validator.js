const validateEmail = (email, setError) => {
    if (!email) {
        setError(true);
        return false;
    }

    if (!/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/.test(email, setError)) {
        setError(true);
        return false;
    }

    setError(false);
    return true;
};

const validateFirstName = (firstName, setError) => {
    firstName = firstName.trim();

    if (!firstName) {
        setError(true);
        return false;
    }

    if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(firstName)) {
        setError(true);
        return false;
    }

    setError(false);
    return true;
};

const validateSubject = (subject, setError) => {
    subject = subject.trim();

    if (!subject) {
        setError(true);
        return false;
    }

    setError(false);
    return true;
};

const validateMessage = (message, setError) => {
    message = message.trim();

    if (!message) {
        setError(true);
        return false;
    }

    if (!/^.{1,255}$/.test(message)) {
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