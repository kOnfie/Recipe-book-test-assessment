import axios from "axios";

import { MealDetail, MealDetailResponse } from "../types/recipes.types";

export const getAllRecipes = async (): Promise<MealDetailResponse> => {
  const response = await axios.get(`${process.env.API_BASE_URL}/recipes?filter=all`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch recipes");
  }

  return response.data;
};

export const getRecipeById = async (id: string): Promise<MealDetail> => {
  const response = await axios.get(`${process.env.API_BASE_URL}/recipes/${id}`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch recipe");
  }

  return response.data.meals[0];
};

export const getRecipesByFilter = async (
  filter: "all" | "category" | "ingredient" | "country",
  value: string
): Promise<MealDetailResponse> => {
  const response = await axios.get(`${process.env.API_BASE_URL}/recipes?filter=${filter}&value=${value}`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch recipes");
  }

  return response.data;
};
