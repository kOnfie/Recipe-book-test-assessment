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
  MealsFilterResponseDto,
} from 'src/dtos/Recipes.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

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
  @Get(':id')
  async getRecipeById(@Param('id') id: string): Promise<MealDetailResponseDto> {
    const recipe = await this.recipesService.getRecipeById(id);
    if (!recipe.meals) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }

    return recipe;
  }

  @ApiOperation({ summary: 'Get recipes' })
  @ApiResponse({
    status: 200,
    description: 'Recipes fetched successfully',
    type: MealsFilterResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Recipes not found',
  })
  @Get()
  async getRecipesByFilter(
    @Query('filter') filter: 'all' | 'category' | 'ingredient' | 'country',
    @Query('value') value: string,
  ): Promise<MealsFilterResponseDto> {
    const recipes = await this.recipesService.getRecipes(filter, value);
    if (!recipes.meals) {
      throw new NotFoundException(
        `Recipes with filter ${filter} and value ${value} not found`,
      );
    }

    return recipes;
  }
}
