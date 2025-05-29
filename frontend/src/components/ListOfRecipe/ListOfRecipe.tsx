import { MealDetail, MealPreview } from "@/src/types/recipes.types";

import { RecipeCard } from "../RecipeCard/RecipeCard";

interface Props {
  meals: MealDetail[] | MealPreview[];
}

export const ListOfRecipe: React.FC<Props> = ({ meals }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((recipe: MealDetail | MealPreview) => (
        <RecipeCard key={recipe.idMeal} {...recipe} />
      ))}
    </div>
  );
};
