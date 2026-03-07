const database = [
    {id: 1, username: "john", password:"123"},
    {id:2, username: "sandra", password: "123"}
];

module.exports = {}

const finderUser = (username, password) =>{
    return database.find(
        (user) => user.username === username && user.password === password
    )
}