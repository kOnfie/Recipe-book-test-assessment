import { MealPreview } from "@/src/types/recipes.types";
import Link from "next/link";
import Image from "next/image";

interface Props extends MealPreview {}

export const RecipeCard: React.FC<Props> = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <Link
      key={idMeal}
      href={`/recipes/${idMeal}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-48 w-full">
        <Image
          src={strMealThumb}
          alt={strMeal}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-xl font-bold text-white">{strMeal}</h2>
        </div>
      </div>
      <div className="p-4">
        <div className="mt-4 flex items-center text-sm text-blue-600 group-hover:text-blue-700">
          View Recipe
          <svg
            className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
