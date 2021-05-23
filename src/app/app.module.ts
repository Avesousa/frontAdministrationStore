import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/header/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';

//Module routing
import { AppModuleRouting } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modules
import { CreateProductComponent } from './page/product/pages/create/create.component';
import { ProductComponent } from './page/product/main/product.component';
import { ImageService } from './services/image.service';
import { ProductService } from './services/product.service';
import { ListProductComponent } from './page/product/pages/list/list.component';
import { CategoryService } from './services/category.service';
import { AuthService } from 'src/auth/service/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/intercepto.service';
import { BrandComponent } from './page/brands/main/brand.component';
import { ListBrandComponent } from './page/brands/pages/list/list.component';
import { CreateBrandComponent } from './page/brands/pages/create/create.component';
import { BrandService } from './services/brand.service';

@NgModule({
  imports: [
    BrowserModule,
    AppModuleRouting,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    //Product
    ProductComponent,
    ListProductComponent,
    CreateProductComponent,

    //Brand
    BrandComponent,
    ListBrandComponent,
    CreateBrandComponent,

    //Layout
    NavComponent
  ],
  providers: [
    ImageService, 
    ProductService,
    CategoryService, 
    BrandService,
    AuthService, 
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
