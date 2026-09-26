import sql from 'better-sqlite3';
import fs from 'node:fs'
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

function normalizeImagePath(image) {
    if (!image || image.startsWith('/') || image.startsWith('http://') || image.startsWith('https://')) {
        return image;
    }

    return `/${image}`;
}

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate a delay of 2 second
    // throw new Error('Failed to fetch meals data'); // simulate an error for testing error handling
    const meals = db.prepare('SELECT * FROM meals').all();  // run for using data from meals.db, all for featch data from meals table
    return meals.map((meal) => ({
        ...meal,
        image: normalizeImagePath(meal.image),
    }));
}

export async function getMealBySlug(slug) {
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug); //get method is used to fetch a single row from the database that matches the provided slug. The ? is a placeholder for the slug value, which is passed as an argument to the get method. This helps prevent SQL injection attacks by ensuring that the slug value is properly escaped before being used in the query.
    return meal
        ? { ...meal, image: normalizeImagePath(meal.image) }
        : meal;
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer(); //promise

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('saving image failed')
        }
    }); // accept some converted data like buffer

    meal.image = `/images/${fileName}`

    db.prepare(`
        INSERT INTO meals 
        (title,summary, instructions, creator, creator_email, image ,slug)
        VALUES(
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
         )
        `).run(meal)
}