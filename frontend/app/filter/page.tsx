import { ListOfRecipe } from "@/src/components/ListOfRecipe/ListOfRecipe";
import { getRecipesByFilter } from "@/src/lib/api";

type Props = {
  searchParams: {
    filter: string;
    value: string;
  };
};

export default async function RecipesFilterPage({ searchParams }: Props) {
  const { filter, value } = searchParams;

  const { meals } = await getRecipesByFilter(filter as "all" | "category" | "ingredient" | "country", value);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        By {filter} {value}
      </h1>
      <ListOfRecipe meals={meals} />
    </div>
  );
}
