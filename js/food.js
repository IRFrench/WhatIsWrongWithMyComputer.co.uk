function createMealPlan() {
    weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    weekdays.forEach(day => updateWeekday(day));
}

function updateWeekday(weekday) {
    var weekdayElement = document.getElementById(weekday);
    weekdayElement.value = getRandomMeal();
}

function getRandomMeal() {
    var keys = Object.keys(meals);
    var text = keys[Math.floor(Math.random() * keys.length)];
    return text;
}

function getMealIngredients(meal) {
    if (meal in meals) {
        return meals[meal];
    }
    return ["ingredients for " + meal];
}

function createShoppingList() {
    var shoppingList = {};

    var meals = getAllMeals();

    var ingredients = getAllIngredients(meals);

    ingredients.forEach(ingredient => {
        console.log(ingredient)
        var keys = Object.keys(shoppingList);
        if (keys.includes(ingredient)) {
            shoppingList[ingredient] = shoppingList[ingredient] + 1;
        } else {
            shoppingList[ingredient] = 1;
        }
    })

    writeShoppingList(shoppingList);
}

function getAllIngredients(meals) {
    var allIngredients = [];
    meals.forEach(meal => {
        shoppingTable
        if (meal) {
            var ingredients = getMealIngredients(meal);
            ingredients.forEach(ingredient => allIngredients.push(ingredient));
        }
    })
    return allIngredients;
}

function getAllMeals() {
    var meals = [];
    var weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    weekdays.forEach(day => meals.push(getWeekdaysMeal(day)));
    return meals;
}

function getWeekdaysMeal(day) {
    var weekdayElement = document.getElementById(day);
    return weekdayElement.value;
}

function writeShoppingList(shoppingList) {
    cleanShoppingTable()
    var ingredients = Object.keys(shoppingList);
    var shoppingTable = document.getElementById("shoppingTable");

    ingredients.forEach(ingredient => {
        var row = shoppingTable.insertRow(-1);
        var quantityCell = row.insertCell(0);
        var ingredientCell = row.insertCell(1);

        var button = document.createElement('button')
        button.innerText = "X"
        button.className = "button"
        button.addEventListener('click', () => {
            shoppingTable.deleteRow(row.rowIndex)
        })
        var buttonCell = row.insertCell(2);

        ingredientCell.innerText = ingredient;
        quantityCell.innerText = shoppingList[ingredient] + "x";
        buttonCell.appendChild(button);
    })
}

function cleanShoppingTable() {
    var shoppingTable = document.getElementById("shoppingTable");
    var shoppingListLength = shoppingTable.rows.length
    for (let i = 0; i < shoppingListLength; i++) {
        shoppingTable.deleteRow(-1)
    }
}