function findUserData() {
    return new Promise((resolve, reject) => {
        const userData = {
            firstName: 'John',
            age: 30,
            email: 'john.doe@example.com'
        };

        const userFound = true;

        if (userFound) {
            resolve(userData);
        } else {
            reject('User data not found.');
        }
    });
}

findUserData()
    .then((data) => {
        console.log('User Data:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });