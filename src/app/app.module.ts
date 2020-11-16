import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { shoppingModule } from './shopping-list/shopping.modules';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // We only can declare once, since we declare in shared component
    // we need to remove them from here
    // AuthComponent,
    // DropdownDirective,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective,

    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // RecipesModule, because of lazy loading
    shoppingModule,
    SharedModule,
    CoreModule, // is are provided - services
    AuthModule,
  ],
  // I made core module for this
  // providers: [
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
