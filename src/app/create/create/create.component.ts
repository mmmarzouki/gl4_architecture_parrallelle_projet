import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe/recipe';
import {RecipeService} from '../../services/recipeService/recipe.service';
import {Step} from '../../model/step/step';
import {Ingredient} from '../../model/ingredient/ingredient';
import {Quantity} from '../../model/quantity/quantity';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  recipe: Recipe = {
    comments : [],
    user : null,
    score : 0,
    steps : [],
    quantities : [],
    img : '',
    id : null,
    name : '',
    numVotes : 0
  };

  steps = '';
  quantities: '';

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    const stepArray = this.steps.split(';');
    stepArray.forEach(el => {
      const step: Step = {
        id: null,
        value: el
      };
      this.recipe.steps.push(step)
    });
    const quantityArray = this.quantities.split(';');

    let ingredient, ing, quantity, value;
    quantityArray.forEach(el => {
      ing = el.split(':')[0];
      value = el.split(':')[1];
      ingredient = { unit: null, name: ing};
      quantity = { value: value, ingredient: ingredient };
      this.recipe.quantities.push(quantity);
    });
    this.recipe.user = JSON.parse(localStorage.getItem('user'));
    this.recipeService.create(this.recipe).subscribe(res => {
      this.router.navigate(['/home']);
    });
  }

}
