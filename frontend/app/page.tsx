import { getAllRecipes } from "@/src/lib/api";

import { ListOfRecipe } from "@/src/components/ListOfRecipe/ListOfRecipe";

export default async function Home() {
  const recipes = await getAllRecipes();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Discover Delicious Recipes</h1>

      <ListOfRecipe meals={recipes.meals} />
    </div>
  );
}
