// // var signupClickCount = 0;
// // var signinClickCount = 0;

// // signupBtn.addEventListener('click', function() {
// //     signupClickCount += 1;
// //     signinClickCount = 0; // Reset signinClickCount when switching to Sign Up

// //     let signupBtn = document.getElementById("signupBtn");
// //     let signinBtn = document.getElementById("signinBtn");
// //     let nameField = document.getElementById("nameField");
// //     let title = document.getElementById("title");

// //     // Ensure the form shows sign-up fields
// //     nameField.style.maxHeight = "60px";
// //     title.innerHTML = "Sign Up";
// //     signupBtn.classList.remove("disable");
// //     signinBtn.classList.add("disable");

// //     // Get form values
// //     const name = document.getElementById('name').value;
// //     const email = document.getElementById('email').value;
// //     const password = document.getElementById('password').value;

// //     // Only proceed if this is the second click
// //     if (signupClickCount > 1) {
// //         // Check if all fields are filled
// //         if (name && email && password) {
// //             localStorage.setItem('name', name);
// //             localStorage.setItem('email', email);
// //             localStorage.setItem('password', password);
// //             alert('Sign Up Successful');
// //         } else {
// //             alert('Please fill in all fields');
// //         }
// //         // Reset click count after processing
// //         signupClickCount = 0;
// //     }
// // });

// // signinBtn.addEventListener('click', function() {
// //     signinClickCount += 1;
// //     signupClickCount = 0; // Reset signupClickCount when switching to Sign In

// //     let signupBtn = document.getElementById("signupBtn");
// //     let signinBtn = document.getElementById("signinBtn");
// //     let nameField = document.getElementById("nameField");
// //     let title = document.getElementById("title");

// //     // Ensure the form shows sign-in fields
// //     nameField.style.maxHeight = "0";
// //     title.innerHTML = "Sign In";
// //     signupBtn.classList.add("disable");
// //     signinBtn.classList.remove("disable");

// //     // Get form values
// //     const email = document.getElementById('email').value;
// //     const password = document.getElementById('password').value;

// //     const storedEmail = localStorage.getItem('email');
// //     const storedPassword = localStorage.getItem('password');

// //     // Only proceed if this is the second click
// //     if (signinClickCount > 1) {
// //         if (email === storedEmail && password === storedPassword) {
// //             alert('Sign In Successful');
// //             window.location.href = "nextpage.html";
// //         } else {
// //             alert('Invalid Email or Password');
// //         }
// //         // Reset click count after processing
// //         signinClickCount = 0;
// //     }
// // });


// var signupClickCount = 0;
// var signinClickCount = 0;

// signupBtn.addEventListener('click', function() {
//     signupClickCount += 1;
//     signinClickCount = 0; // Reset signinClickCount when switching to Sign Up

//     let signupBtn = document.getElementById("signupBtn");
//     let signinBtn = document.getElementById("signinBtn");
//     let nameField = document.getElementById("nameField");
//     let title = document.getElementById("title");

//     // Ensure the form shows sign-up fields
//     nameField.style.maxHeight = "60px";
//     title.innerHTML = "Sign Up";
//     signupBtn.classList.remove("disable");
//     signinBtn.classList.add("disable");

//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Only proceed if this is the second click
//     if (signupClickCount > 1) {
//         // Check if all fields are filled
//         if (name && email && password) {
//             localStorage.setItem('name', name);
//             localStorage.setItem('email', email);
//             localStorage.setItem('password', password);
//             alert('Sign Up Successful');
//         } else {
//             alert('Please fill in all fields');
//         }
//         // Reset click count after processing
//         signupClickCount = 0;
//     }
// });

// signinBtn.addEventListener('click', function() {
//     signinClickCount += 1;
//     signupClickCount = 0; // Reset signupClickCount when switching to Sign In

//     let signupBtn = document.getElementById("signupBtn");
//     let signinBtn = document.getElementById("signinBtn");
//     let nameField = document.getElementById("nameField");
//     let title = document.getElementById("title");

//     // Ensure the form shows sign-in fields
//     nameField.style.maxHeight = "0";
//     title.innerHTML = "Sign In";
//     signupBtn.classList.add("disable");
//     signinBtn.classList.remove("disable");

//     // Get form values
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');

//     // Only proceed if this is the second click
//     if (signinClickCount > 1) {
//         if (email === storedEmail && password === storedPassword) {
//             alert('Sign In Successful');
//             window.location.href = "nextpage.html";
//         } else {
//             alert('Invalid Email or Password');
//         }
//         // Reset click count after processing
//         signinClickCount = 0;
//     }
// });

var signupClickCount = 0;
var signinClickCount = 0;

signupBtn.addEventListener('click', function() {
    signupClickCount += 1;
    signinClickCount = 0; // Reset signinClickCount when switching to Sign Up

    let signupBtn = document.getElementById("signupBtn");
    let signinBtn = document.getElementById("signinBtn");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");

    // Ensure the form shows sign-up fields
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Only proceed if this is the second click
    if (signupClickCount > 1) {
        // Check if all fields are filled
        if (name && email && password) {
            // Get existing users from localStorage or initialize an empty array
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Check if the email already exists
            const emailExists = users.some(user => user.email === email);

            if (!emailExists) {
                // Add new user to the array
                users.push({ name, email, password });

                // Save the updated users array back to localStorage
                localStorage.setItem('users', JSON.stringify(users));
                alert('Sign Up Successful');
            } else {
                alert('Email already registered');
            }
        } else {
            alert('Please fill in all fields');
        }
        // Reset click count after processing
        signupClickCount = 0;
    }
});

signinBtn.addEventListener('click', function() {
    signinClickCount += 1;
    signupClickCount = 0; // Reset signupClickCount when switching to Sign In

    let signupBtn = document.getElementById("signupBtn");
    let signinBtn = document.getElementById("signinBtn");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");

    // Ensure the form shows sign-in fields
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get users array from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find a matching user
    const user = users.find(user => user.email === email && user.password === password);

    // Only proceed if this is the second click
    if (signinClickCount > 1) {
        if (user) {
            alert('Sign In Successful');
            window.location.href = "nextpage.html";
        } else {
            alert('Invalid Email or Password');
        }
        // Reset click count after processing
        signinClickCount = 0;
    }
});
