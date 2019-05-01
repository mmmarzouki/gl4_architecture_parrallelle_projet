import { Component, OnInit } from '@angular/core';
import {Recipe} from '../model/recipe/recipe';
import {RecipeService} from '../services/recipeService/recipe.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    recipes: Recipe[];
    isConnected: boolean;
    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.isConnected = localStorage.getItem('user') !== null;
        this.recipeService.findAll().subscribe(res => {
            this.recipes = res;
        })
    }
}
