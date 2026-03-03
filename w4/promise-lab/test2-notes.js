/*
Step 1: Read the file
    javascriptreadFile('menu.csv', 'utf8')

    Reads the entire CSV file
    Returns a Promise that resolves with the file contents as one big string

Step 2: First .then() - Process the data
    javascript.then(csvData => {
    ```
    - `csvData` is the entire file as a string:
    ```
    "lunch,bento box b - sashimi,box combo,$9.59
    dinner,vegetable sushi,6 rolls,$3.50
    dinner,tuna roll,3 rolls,$4.50"

Step 3: Split into lines
    javascriptconst lines = csvData.split('\n').filter(line => line.trim() !== '');
    split('\n') → breaks at newlines into array of strings
    .filter(...) → removes any empty lines
    Result: ['lunch,bento box...', 'dinner,vegetable...', 'dinner,tuna...']

Step 4: Parse each line
    javascriptconst items = lines.map(parseLine);

    .map(parseLine) calls parseLine() on EACH line
    Turns each CSV string into an object
    Result: Array of objects [{mealType: 'lunch', ...}, {mealType: 'dinner', ...}, ...]

Step 5: Group by meal type
    javascriptconst grouped = groupByMealType(items);

    Takes the array of items
    Organizes them into an object grouped by type
    Result: {lunch: [...], dinner: [...]}

Step 6: Format the output
    javascriptconst output = formatOutput(grouped);

    Takes the grouped object
    Builds the final formatted text string
    Result: Complete formatted string ready to write!

Step 7: Write to file
    javascriptreturn writeFile('menu.txt', output);

    Writes the formatted string to menu.txt
    IMPORTANT: We return this Promise so the next .then() waits for it!

Step 8: Second .then() - Success message
    javascript.then(() => {
        console.log("Program is finished");
    })

    This runs ONLY after writeFile completes successfully
    Prints the completion message

Step 9: Error handling
    javascript.catch(err => console.error(err));
    ```
    - If ANY step fails (readFile, writeFile, or any error in between)
    - This catches it and logs the error
    - Prevents the program from crashing

    ---

## THE COMPLETE DATA FLOW:
    ```
    CSV file
        ↓ (readFile)
    Raw string: "lunch,bento,$9.59\ndinner,sushi,$3.50"
        ↓ (.split('\n'))
    Array of lines: ["lunch,bento,$9.59", "dinner,sushi,$3.50"]
        ↓ (.map(parseLine))
    Array of objects: [{mealType:'lunch',...}, {mealType:'dinner',...}]
        ↓ (groupByMealType)
    Grouped object: {lunch: [...], dinner: [...]}
        ↓ (formatOutput)
    Formatted string: "* Lunch Items *\n$17.26 bento...\n\n* Dinner Items *..."
        ↓ (writeFile)
    menu.txt file created!
        ↓
    "Program is finished"


KEY CONCEPTS RECAP:

    Promisify = Converts callback functions to Promise functions
    Helper functions = Small functions that do ONE thing (single responsibility)
    Promise chaining = .then() after .then() to run steps in order
    Data transformation = Each step transforms data into a new shape
    Error handling = .catch() at the end catches ALL errors

*/