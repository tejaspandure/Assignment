import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { InvalidComponent } from './invalid/invalid.component';

export const routes: Routes = [

    //Wildcard route/ Invalid route
    {path:'**', component:InvalidComponent},

    //Specific Routes
    {path:'books', component:BooksComponent},
    {path:'technologies', component:TechnologiesComponent},
    {path:'**', component:InvalidComponent},
];
