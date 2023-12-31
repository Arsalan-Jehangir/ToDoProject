import inquirer from 'inquirer';
let todos = ["Arsalan", "Jehangir"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select An Operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete"]
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item...",
                name: "todo"
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Select Item For Updation",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item...",
                name: "todo"
            });
            let newTodos = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log(todos);
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select Item For Updation",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
