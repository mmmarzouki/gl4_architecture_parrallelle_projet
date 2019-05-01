import { Component, OnInit } from '@angular/core';
import {Recipe} from '../model/recipe/recipe';
import {RecipeService} from '../services/recipeService/recipe.service';
import {ActivatedRoute} from '@angular/router';
import {RatingService} from '../services/rating/rating.service';
import {CommentService} from '../services/comment/comment.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    commentaire = '';
    isConnected: boolean;
    isOwner: boolean;
    note = 0;
    recipe: Recipe  = {
        'img': '',
        'name': '',
        'id': null,
        'comments': [],
        'numVotes': 0,
        'quantities': [],
        'score': 0,
        'steps': [],
        'user': null
    };

    constructor(private commentService: CommentService, private ratingService: RatingService, private recipeService: RecipeService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.isConnected = localStorage.getItem('user') === null;
        const id = this.route.snapshot.params.id;
        this.recipeService.findOne(id).subscribe(res => {
            this.recipe = res;
            console.log(this.recipe);
            if (localStorage.getItem('user') === null) {
                this.isOwner = false;
            } else {
                this.isOwner = this.recipe.user.id === JSON.parse(localStorage.getItem('user')).id;
            }
        })
    }

    noter() {
        this.ratingService.rate(this.recipe, this.note).subscribe(res => {
            this.recipe = res;
        })
    }
    commenter() {
        if (this.commentaire === '') {
            return;
        }
        this.commentService.comment(this.recipe, this.commentaire).subscribe( res => {
           this.recipe = res;
        });
    }

    deleteCom(com) {
        const coms = this.recipe.comments.filter(el => {
           return el.id !== com.id;
        });
        this.recipe.comments = coms;
        this.recipeService.update(this.recipe).subscribe(res =>  {
            this.recipe = res;
        })
    }
}
