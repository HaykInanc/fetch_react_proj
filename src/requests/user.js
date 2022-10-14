export const getAllUsers = (callback) => 
    fetch('https://reqres.in/api/users?delay=3')
        .then(response => response.json())
        .then(users_obj => callback(users_obj.data));


export const addUser = (body, callback) =>
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
    .then(user_data => callback(user_data));


// импортировать addUser в компонент AddUser и вызвать его при submit формы
// в качестве callback функции пока подставьте console.log