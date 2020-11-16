// interface recipeInterface {
//   name: string;
//   description: string;
//   imagePath: string;
// }

import { Ingredient } from '../shared/ingredient.model';

// export class Recipe implements recipeInterface {
//   name: string;
//   description: string;
//   imagePath: string;

//   constructor(name: string, desc: string, imagePath: string) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//   }
// }

export class Recipe {
  public name?: string;
  public description?: string;
  public imagePath?: string;
  public ingredients?: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
