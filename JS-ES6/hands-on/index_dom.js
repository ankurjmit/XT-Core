function fetchUserData() {
    const urls = [
        'https://api.github.com/users/ankurjmit',
        'https://api.github.com/users/rohngonnarock',
        'https://api.github.com/users/vivek-khokhar',
        'https://api.github.com/users/SidVedi'
    ];

    var fetchArray = urls.map(url => {
        return fetch(url).then(response => response.json()).then(body => body.name);
    })

    Promise.all(fetchArray)
    .then(res => {
        let ul = document.body.appendChild(document.createElement('ul'));
        res.forEach(element => {
            let e = document.createElement('li');
            e.innerText = element;
            ul.appendChild(e);
        });
    });
}
window.onload = fetchUserData()
