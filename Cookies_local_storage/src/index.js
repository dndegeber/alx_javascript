function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    const cookies = document.cookie.split('; ');

    const p = document.createElement('p');
    p.innerHTML = 'Cookies: ';

    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        p.innerHTML += `${name}=${value}; `;
    });

    document.body.appendChild(p);
}
