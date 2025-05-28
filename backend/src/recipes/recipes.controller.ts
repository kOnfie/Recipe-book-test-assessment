import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import {
  MealDetailResponseDto,
  MealsByCategoryResponseDto,
} from 'src/dtos/Recipes.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @ApiOperation({ summary: 'Get all available recipes' })
  @ApiResponse({
    status: 200,
    description: 'Recipes fetched successfully',
    type: MealDetailResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Recipes not found',
  })
  @Get('all')
  async getAllAvailableRecipes(): Promise<MealDetailResponseDto> {
    const recipes = await this.recipesService.getAllAvailableRecipes();
    if (!recipes.meals) {
      throw new NotFoundException('No recipes found');
    }

    return recipes;
  }

  @ApiOperation({ summary: 'Get recipe by id' })
  @ApiResponse({
    status: 200,
    description: 'Recipe fetched successfully',
    type: MealDetailResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Recipe not found',
  })
  @Get('all/:id')
  async getRecipeById(@Param('id') id: string): Promise<MealDetailResponseDto> {
    const recipe = await this.recipesService.getRecipeById(id);
    if (!recipe.meals) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }

    return recipe;
  }

  @ApiOperation({ summary: 'Get recipes by ingredient' })
  @ApiResponse({
    status: 200,
    description: 'Recipes fetched successfully',
    type: MealsByCategoryResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Recipes not found',
  })
  @Get('by-ingredient')
  async getRecipeByIngredient(
    @Query('ingredient') ingredient: string,
  ): Promise<MealsByCategoryResponseDto> {
    const recipes =
      await this.recipesService.getRecipesByIngredient(ingredient);
    if (!recipes.meals) {
      throw new NotFoundException(
        `Recipes with ingredient ${ingredient} not found`,
      );
    }

    return recipes;
  }

  @ApiOperation({ summary: 'Get recipes by country' })
  @ApiResponse({
    status: 200,
    description: 'Recipes fetched successfully',
    type: MealsByCategoryResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Recipes not found',
  })
  @Get('by-country')
  async getRecipesByCountry(
    @Query('country') country: string,
  ): Promise<MealsByCategoryResponseDto> {
    const recipes = await this.recipesService.getRecipesByCountry(country);
    if (!recipes.meals) {
      throw new NotFoundException(`Recipes with country ${country} not found`);
    }

    return recipes;
  }

  @ApiOperation({ summary: 'Get recipes by category' })
  @ApiResponse({
    status: 200,
    description: 'Recipes fetched successfully',
    type: MealsByCategoryResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Recipes not found',
  })
  @Get('by-category')
  async getRecipesByCategory(
    @Query('category') category: string,
  ): Promise<MealsByCategoryResponseDto> {
    const recipes = await this.recipesService.getRecipesByCategory(category);
    if (!recipes.meals) {
      throw new NotFoundException(
        `Recipes with category ${category} not found`,
      );
    }

    return recipes;
  }
}
