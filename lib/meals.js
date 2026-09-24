import sql from 'better-sqlite3';
const db = sql('meals.db');
import slugify from 'slugify';
import xss from 'xss';

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate a delay of 2 second
    // throw new Error('Failed to fetch meals data'); // simulate an error for testing error handling
    const meals = db.prepare('SELECT * FROM meals').all();  // run for using data from meals.db, all for featch data from meals table
    return meals;
}

export async function getMealBySlug(slug) {
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug); //get method is used to fetch a single row from the database that matches the provided slug. The ? is a placeholder for the slug value, which is passed as an argument to the get method. This helps prevent SQL injection attacks by ensuring that the slug value is properly escaped before being used in the query.
    return meal;
}

export function saveMeal(meal){
    meal.slug = slugify(meal.title, {lower:true});
    meal.instructions = xss(meal.instructions)
}