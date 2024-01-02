document.getElementById("myForm").addEventListener('submit', function (event) {
    console.log('Form submitted');
    var name = document.getElementById('name').value.trim();
    console.log('Name:', name);
    var email = document.getElementById('email').value.trim();
    console.log('Email:', email);
    var education = document.getElementById('education').value.trim();
    console.log('Education:', education);
    var address = document.getElementById('address').value.trim();
    console.log('Address:', address);


    if (name === '' || email === '' || address === '' || education === '') {
        event.preventDefault(); // stop the form from submitting

        console.log('Empty fields detected');

        // Display the error message
        document.getElementById('error-message').style.display = 'block';
    }
});

console.log('Email:', email);