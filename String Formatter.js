function cleanText(text) {
    return text.trim();
}

function capitalize(text) {
    // take the first text and make it UpperCase
    const inisial = text.charAt(0).toUpperCase();
    // combining the text with inisial
    text = inisial + text.slice(1);
    // returning the value
    return text;
}

function formatDisplayName(firstName, lastName) {
    // cleaning text
    firstName = cleanText(firstName);
    lastName = cleanText(lastName);
    // lowering text
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    // capitalize text
    firstName = capitalize(firstName);
    lastName = capitalize(lastName);
    // returning the value
    return `${firstName} ${lastName}`;
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));