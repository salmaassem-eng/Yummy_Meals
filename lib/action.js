'use server';
// This directive indicates that this function is a server action not client-side code. It will be executed on the server when called from the client.
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";


function isInvalid(text){
    return !text || text.trim() ==='' ;
}
export async function shareMeal(prevState, formData) {
  
 const meal = {
  title: formData.get('title'),
  summary: formData.get('summary'),
  instructions: formData.get('instructions'),
  image: formData.get('image'),
  creator: formData.get('name'),
  creator_email: formData.get('email'),
 };

 //simple validation
if(
    isInvalid(meal.title)|| 
    isInvalid(meal.summary)|| 
    isInvalid(meal.instructions)|| 
    isInvalid(meal.creator)|| 
    isInvalid(meal.creator_email)|| 
    !meal.creator_email.includes('@')||
    !meal.image || meal.image.size === 0
){
    return {
        message: 'Invalid input'
    }
}
 
await saveMeal(meal);
revalidatePath('/meals', 'layout'); //tells next revalidate this path , laypout revalidate all related pages
redirect('/meals');
}