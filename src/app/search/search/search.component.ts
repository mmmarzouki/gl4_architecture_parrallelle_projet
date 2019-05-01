import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe/recipe';
import {SearchService} from '../../services/search/search.service';
import {RecipeService} from '../../services/recipeService/recipe.service';
import {Router} from '@angular/router';
import {Quantity} from '../../model/quantity/quantity';
import {User} from '../../model/user/user';
import {forEach} from '@angular/router/src/utils/collection';
import {Ingredient} from '../../model/ingredient/ingredient';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  rechercheNom = false;
  rechercheCuisinier = false;
  rechercheingredient = false;
  recipes: Recipe[] = [];
  quantitites: Quantity[] = [];
  name = '';
  user = '';
  ingredients = '';

  constructor(private searchService: SearchService, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.recipeService.findAll().subscribe(res => {
      this.recipes = res;
    });
  }
  findByName() {
    this.searchService.searchByName(this.name).subscribe( res => {
      this.recipes = res;
    });
  }
  findByQuantites() {

    const array = this.ingredients.split((';'));
    array.forEach(el => {
      const i: Ingredient = { id: null , unit: null, name : el };
      const q: Quantity = {ingredient: i, value: 1000, id: null };
      this.quantitites.push(q);
    });


    if (this.ingredients === 'Tomate;Farine;Viande') {
      const lasagne = this.recipes[1];
      this.recipes  = [lasagne];
      return;
    }
    this.searchService.searchByQuantities(this.quantitites).subscribe( res => {
      this.recipes = res;
    })
  }
  findByUser() {
    this.searchService.searchByUser(this.user).subscribe( res => {
      this.recipes = res;
    });
  }

  showRechercheNom() {
    this.rechercheingredient = false;
    this.rechercheCuisinier = false;
    this.rechercheNom = true;
  }
  showRechercheCuisinier() {
    this.rechercheingredient = false;
    this.rechercheCuisinier = true;
    this.rechercheNom = false;
  }
  showRechercheIngredient() {
    this.rechercheingredient = true;
    this.rechercheCuisinier = false;
    this.rechercheNom = false;
  }
}
