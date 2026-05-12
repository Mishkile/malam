function MALAM_formatDate(date) {
    return new Date(date).toLocaleDateString();
}

function MALAM_capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function MALAM_isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = { MALAM_formatDate, MALAM_capitalize, MALAM_isValidEmail };
