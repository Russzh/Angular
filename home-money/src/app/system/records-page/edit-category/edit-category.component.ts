import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared2/models/category.model';
import { CategoriesService } from '../../shared2/services/categories.service';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { Message } from 'src/app/shared/message.model';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();

  currentCategoryId = 1;
  currentCategory: Category;
  message: Message;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.onCategoryChange();
    this.message = new Message ('success', '');
  }

  onCategoryChange() {
    this.currentCategory = this.categories
      .find(c => c.id === +this.currentCategoryId);
    
  }

  onSubmit(form: NgForm) {
    let { capacity, name } = form.value;
    if(capacity < 0) capacity *= -1;

    const category = new Category(name, capacity, +this.currentCategoryId);

    this.categoriesService.updateCategory(category)
      .subscribe((category:Category) => {
        this.onCategoryEdit.emit(category);
        this.message.text = "Категория успешно отредактирована";
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }

}
