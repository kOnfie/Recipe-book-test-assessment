import { getRecipeById, getRecipesByFilter } from "@/src/lib/api";
import { formatIngredientsList } from "@/src/lib/formatIngredientsList";
import { MealPreview } from "@/src/types/recipes.types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function RecipePage({ params }: Props) {
  const { id } = await params;

  const recipe = await getRecipeById(id);
  const formattedIngredients = formatIngredientsList(recipe);

  const relatedRecipes = await getRecipesByFilter("category", recipe.strCategory);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl flex gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image src={recipe.strMealThumb} alt={recipe.strMeal} fill className="object-cover" priority />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.strMeal}</h1>
            <Link
              href={`/filter?filter=country&value=${recipe.strArea}`}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {recipe.strArea}
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
            <div className="prose prose-lg max-w-none">
              {recipe.strInstructions.split(".").map(
                (instruction, index) =>
                  instruction.trim() && (
                    <p key={index} className="mb-4 text-gray-600">
                      {instruction.trim()}.
                    </p>
                  )
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ingredients</h2>
            <div className="grid  gap-4">
              {formattedIngredients.map((ingredient: string) => (
                <Link
                  key={ingredient}
                  href={`/filter?filter=ingredient&value=${ingredient.split(" - ")[0]}`}
                  className="group flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 text-blue-500 mr-3 group-hover:text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700 group-hover:text-blue-700">{ingredient}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <aside className="hidden lg:block w-80 shrink-0">
        <div className="sticky top-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Recipes</h2>
          <div className="grid grid-cols-1 gap-4">
            {relatedRecipes.meals.map((recipe: MealPreview) => (
              <Link
                key={recipe.idMeal}
                href={`/recipes/${recipe.idMeal}`}
                className="group flex flex-col bg-gray-50 rounded-xl overflow-hidden hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="relative aspect-video w-full">
                  <Image src={recipe.strMealThumb} alt={recipe.strMeal} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <span className="text-gray-700 group-hover:text-blue-700 font-medium line-clamp-2">
                    {recipe.strMeal}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
