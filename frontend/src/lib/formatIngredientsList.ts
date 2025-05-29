import { MealDetail } from "@/src/types/recipes.types";

export const formatIngredientsList = (recipe: MealDetail): string[] => {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof MealDetail]?.trim();
    const measure = recipe[`strMeasure${i}` as keyof MealDetail]?.trim();

    if (ingredient && ingredient !== "") {
      ingredients.push(measure ? `${ingredient} - ${measure}` : ingredient);
    }
  }

  return ingredients;
};
