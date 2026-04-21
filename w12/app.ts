// const PORT = ProcessingInstruction.env.PORT || 8083;

// const assignments: Array<Assignments>[] = [
//     { id: 1, title: "Flask Project" },
//     { id: 2, title: "Typescript term project" }
// ]

// /*
// const assignments: Assignments[] = [
//     { id: 1, title: "a" },
//     { id: 2, title: "b" }
// ]

// uncommented is better because no one can accidentally put in something else

// */

// const app = express();

// // ejs lets you put variables into code? 
// // By default it's html
// // app.set("view engine", "html");
// app.set("view engine", "ejs");

// app.get("/", (req,res) => {
//     res.send()
//     // something to use only if you send a string of html <h1></h1>
//     res.sendFile()
//     // for sending any type of file to the browser except html or ejs 
//     // You have a button download resume, you can link it to an endpoint and send back resume.pdf 
//     res.render()
//     // You always want to use this one, it's your ejs file 
//     res.render("index", { assignments })
//     // This this list of assignments, dump it into the ejs file and send it back?
//     // assignemnts dumped into index
// });


// app.post("/assignments", (req, res) => {
//     // Ping the endpoint to make sure the button goes here 
//     // Append whatever the user typed to 
//     console.log("This endpoint got hit!")

//     const title = req.body.title;
//     assignments.push({ 
//         id: assignments.length + 1,
//         title: title
//      });
//     /*
//         req.body wouldn't be created without app.use(express.urlencoded()); 

//         used it to look at the body? Adds it to the json? 

//     */
// });


// app.listen(PORT, () => {})


