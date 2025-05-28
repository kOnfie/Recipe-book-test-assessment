import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  MealDetailResponseDto,
  MealsByCategoryResponseDto,
} from 'src/dtos/Recipes.dto';

@Injectable()
export class RecipesService {
  async getAllAvailableRecipes(): Promise<MealDetailResponseDto> {
    try {
      const allAvailableRecipes = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      );

      return allAvailableRecipes.data as MealDetailResponseDto;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch recipes');
    }
  }

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

  async getRecipesByIngredient(
    ingredient: string,
  ): Promise<MealsByCategoryResponseDto> {
    try {
      console.log(ingredient);
      const recipeByIngredient = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
      );

      return recipeByIngredient.data as MealsByCategoryResponseDto;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch recipes');
    }
  }

  async getRecipesByCountry(
    country: string,
  ): Promise<MealsByCategoryResponseDto> {
    try {
      const recipeByCountry = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`,
      );

      return recipeByCountry.data as MealsByCategoryResponseDto;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch recipes');
    }
  }

  async getRecipesByCategory(
    category: string,
  ): Promise<MealsByCategoryResponseDto> {
    try {
      const recipeByCategory = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );

      return recipeByCategory.data as MealsByCategoryResponseDto;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch recipes');
    }
  }
}
