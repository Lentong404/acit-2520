assignments = [{id: 1, title: "a"}], [{id: 2, title: "b"}]
Create a web server
- Get / 
    -> send back an ejs page
        - display a form to create a new assignment 
        - list out one-by-one each assignment 
        You have a form and you have a list
        <form>
            <ul>
                <li>a</li>
            </ul>
        </form>
- Post /assignments
    -> submit a form that appends to the db your assignment


1. Can you send a file through? 