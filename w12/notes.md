# Week 12 

package.json 
    - shows packages and dependencies that the app uses 

nodejs happy -> package.json (npm init -y)
    - Tells all the develops what libraries you're using 
    - Automate build commands 
    - Make file (requirements.txt)

typescript happy -> tsconfig (tsc --init)

tsc --init 
 - TS init

 the package json 
    change "type": "commonjs"
        to use modern javascript imports (ecma script-uses import keyword)

npm install typescript
    - node ensures it gets installed, but we have it in our machines already
npm install typescript tsx 
    - add tsx to make our lives easier 

npm install adds them to dependencies
    - Add a start to scripts 
        "start": "tsx app.ts"
    - Adds instructions to the readme


npm install express ejs 
    - ejs shows content to the user 

npm install @types/express @types/ejs 
    - Installs the types to dependencies -> not good because once its hosted, the types aren't needed. Only useful for development machines 
        - to fix: run uninstall command npm uninstall @types/express @types/ejs 
    Instead run npm install -D @types...
        - D is dev, local only 
        -

A lot of programming languages the work with web servers 
    - Don't forget that a lot of the time with hosting services when you take your code and you give it to a hosting company (AWS) 
    - They start up the express server on their machine, you don't know what port they will use 
        - We said use 8083, but maybe it's taken
        - they assign a port and inject it into your app, it gets passed as an env variable 
    const PORT = process.env.port || 8083;
        - process.env.port checks if there is an empty port 

    app.listen(PORT, () =>)

- looks into view for something 

Whenever you create a server in express, there is a shield wrapping your server
    - Doesn't allow incoming data to penetrate the server 

Use a body parser - Takes incoming data from a request and attaches it to a variable that you can access it to later on
    - req.body is the variable, contains body of data
    app.use(express.urlencoded()); //req.body
        - url encoded string = form data
        - urlencoded says it's cool to accept form data

    