import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class MealDetailDto {
  @ApiProperty()
  idMeal: string;

  @ApiProperty()
  strMeal: string;

  @ApiPropertyOptional()
  strMealAlternate: string | null;

  @ApiProperty()
  strCategory: string;

  @ApiProperty()
  strArea: string;

  @ApiProperty()
  strInstructions: string;

  @ApiProperty()
  strMealThumb: string;

  @ApiPropertyOptional()
  strTags: string | null;

  @ApiProperty()
  strYoutube: string;

  @ApiPropertyOptional()
  strSource: string | null;

  @ApiPropertyOptional()
  strImageSource: string | null;

  @ApiPropertyOptional()
  strCreativeCommonsConfirmed: string | null;

  @ApiPropertyOptional()
  dateModified: string | null;

  // Ingredient and Measure fields (up to 20)
  @ApiPropertyOptional() strIngredient1: string;
  @ApiPropertyOptional() strIngredient2: string;
  @ApiPropertyOptional() strIngredient3: string;
  @ApiPropertyOptional() strIngredient4: string;
  @ApiPropertyOptional() strIngredient5: string;
  @ApiPropertyOptional() strIngredient6: string;
  @ApiPropertyOptional() strIngredient7: string;
  @ApiPropertyOptional() strIngredient8: string;
  @ApiPropertyOptional() strIngredient9: string;
  @ApiPropertyOptional() strIngredient10: string;
  @ApiPropertyOptional() strIngredient11: string;
  @ApiPropertyOptional() strIngredient12: string;
  @ApiPropertyOptional() strIngredient13: string;
  @ApiPropertyOptional() strIngredient14: string;
  @ApiPropertyOptional() strIngredient15: string;
  @ApiPropertyOptional() strIngredient16: string;
  @ApiPropertyOptional() strIngredient17: string;
  @ApiPropertyOptional() strIngredient18: string;
  @ApiPropertyOptional() strIngredient19: string;
  @ApiPropertyOptional() strIngredient20: string;

  @ApiPropertyOptional() strMeasure1: string;
  @ApiPropertyOptional() strMeasure2: string;
  @ApiPropertyOptional() strMeasure3: string;
  @ApiPropertyOptional() strMeasure4: string;
  @ApiPropertyOptional() strMeasure5: string;
  @ApiPropertyOptional() strMeasure6: string;
  @ApiPropertyOptional() strMeasure7: string;
  @ApiPropertyOptional() strMeasure8: string;
  @ApiPropertyOptional() strMeasure9: string;
  @ApiPropertyOptional() strMeasure10: string;
  @ApiPropertyOptional() strMeasure11: string;
  @ApiPropertyOptional() strMeasure12: string;
  @ApiPropertyOptional() strMeasure13: string;
  @ApiPropertyOptional() strMeasure14: string;
  @ApiPropertyOptional() strMeasure15: string;
  @ApiPropertyOptional() strMeasure16: string;
  @ApiPropertyOptional() strMeasure17: string;
  @ApiPropertyOptional() strMeasure18: string;
  @ApiPropertyOptional() strMeasure19: string;
  @ApiPropertyOptional() strMeasure20: string;
}

export class MealDetailResponseDto {
  @ApiProperty({ type: [MealDetailDto] })
  meals: MealDetailDto[];
}

export class MealPreviewDto {
  @ApiProperty()
  idMeal: string;

  @ApiProperty()
  strMeal: string;

  @ApiProperty()
  strMealThumb: string;
}

export class MealsByCategoryResponseDto {
  @ApiProperty({ type: [MealPreviewDto] })
  meals: MealPreviewDto[];
}
