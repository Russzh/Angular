import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService{
    constructor(private http: HttpClient) { }

    addCategory(category: Category) {
        return this.http.post('http://localhost:3000/categories', category);
    }
}