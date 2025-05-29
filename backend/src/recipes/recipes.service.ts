import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  MealDetailResponseDto,
  MealsFilterResponseDto,
} from 'src/dtos/Recipes.dto';

const filterMap: Record<string, string> = {
  category: 'c',
  ingredient: 'i',
  country: 'a',
};

@Injectable()
export class RecipesService {
  async getRecipeById(id: string): Promise<MealDetailResponseDto> {
    try {
      const recipeById = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );

      return recipeById.data as MealDetailResponseDto;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch recipe');
    }
  }

  async getRecipes(
    filter: 'all' | 'category' | 'ingredient' | 'country',
    value: string,
  ): Promise<MealsFilterResponseDto> {
    let fetchUrl = 'https://www.themealdb.com/api/json/v1/1/';

    if (filter === 'all') {
      fetchUrl += 'search.php?s=';
    } else {
      fetchUrl += `filter.php?${filterMap[filter]}=${value}`;
    }

    try {
      const recipeByFilter = await axios.get(fetchUrl);

      return recipeByFilter.data as MealsFilterResponseDto;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch recipes');
    }
  }
}
