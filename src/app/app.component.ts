import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { ContenidoComponent } from "./contenido/contenido.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterModule, RouterOutlet, RouterLink, HeaderComponent, BodyComponent, ContenidoComponent, FooterComponent]
})
export class AppComponent {
  title = 'NodeExpresAlejandroGarcia';
}
