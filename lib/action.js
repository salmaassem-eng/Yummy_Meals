'use server';  // This directive indicates that this function is a server action not client-side code. It will be executed on the server when called from the client.

export async function shareMeal(formData) {
  
 const meal = {
  title: formData.get('title'),
  summary: formData.get('summary'),
  instructions: formData.get('instructions'),
  image: formData.get('image'),
  creatorName: formData.get('name'),
  creatorEmail: formData.get('email'),
 };
 
 console.log(meal);
}