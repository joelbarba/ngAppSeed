import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';

@NgModule({
  declarations: [NavbarComponent, MenuComponent, FooterComponent, LoadingBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, MenuComponent, FooterComponent, LoadingBarComponent],
})
export class ShellModule { }