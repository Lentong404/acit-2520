const express = require ("express");

const app = express();
app.get("/login", () => {});


// ONLY LOGGED IN USERS
app.get("/dashboard", ()=> {
    res.send(
        <form>
            <input type="text" name="username"></input>
            <input type="tpasswordt" name="password"></input>
            <button>Login</button>
        </form>
    )
});