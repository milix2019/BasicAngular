import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    FormsModule, // using form
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent }, // oath - shopping-list - remove for lazy loading
    ]),
    SharedModule, //CommonModule, // unlock ngfor & ngif
  ],
  exports: [],
  providers: [],
})
export class shoppingModule {}
