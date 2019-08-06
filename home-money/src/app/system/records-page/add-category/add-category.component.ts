import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../shared2/services/categories.service';
import { Category } from '../../shared2/models/category.model';
import { from, fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent{

  @Output() onCategoryAdd = new EventEmitter<Category>(); 

 category:Category;

  constructor(private categoriesService: CategoriesService) { }

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0 ) capacity *= -1;

    let category = new Category(name, capacity);

    this.categoriesService.addCategory(category)
      .subscribe((category:Category)  => { 
        form.reset();
        form.form.patchValue({ capacity: 1 });
        this.onCategoryAdd.emit(category);
      });
  }
}
