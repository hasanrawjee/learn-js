/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    result = []
    for (const email of emails) {
        // complete the loop
        if (isValidEmail(email)) {
            hiddenEmail = email.split('@')[0].replace(/./g, '*') + '@' + email.split('@')[1];
            const liElement = document.createElement('li');
            liElement.innerText = hiddenEmail;
            ulElement.append(liElement);
        }
    }
}

function isValidEmail(email) {
    return /^[a-zA-Z_0-9]+@(.+\.)*northeastern\.edu/.test(email)
}