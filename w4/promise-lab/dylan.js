const fs = require("node:fs/promises");

function object(data) {
  const meal_obj = {};
  for (let element of data) {
    const split1 = element.split(",");
    const meal_type = split1[0];
    if (!meal_obj[meal_type]) {
      meal_obj[meal_type] = [];
    }
    const pricing = parseFloat(split1[3].replace("$", ""));
    const finalPricing = parseFloat(pricing * 1.8);
    meal_obj[meal_type].push({
      price: finalPricing,
      name: split1[1],
      amount: split1[2],
    });
  }
  return meal_obj;
}

function organizeMealType(meal_obj) {
  let final_string = "";
  const meal_len = Object.keys(meal_obj);
  for (let element of meal_len) {
    final_string += `\n* ${element} Items *\n`;
    for (let full_meal of meal_obj[element]) {
      final_string += `$${full_meal.price.toFixed(2)} ${full_meal.name}, ${full_meal.amount}\n`;
    }
  }
  return final_string;
}

async function readFiles() {
  try {
    const readtheFile = await fs.readFile("menu.csv", "utf8");
    const lines = readtheFile.split("\n").slice(1);
    const meal_obj = object(lines);
    const final_string = organizeMealType(meal_obj);
    const writethetxt = await fs.writeFile("Menu.txt", final_string);
  } catch (error) {
    console.log(error);
  }
}

function main() {
  readFiles();
  console.log("DONE!!!!!!");
}

main();