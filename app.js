// init GitHub
const github = new Github;

// search input
const searchUSer = document.getElementById('seachUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if(userText !== ''){
        // make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // show alert
            } else {
                // show profile
            }
        })
    } else {
        // clear the profile
    }

});