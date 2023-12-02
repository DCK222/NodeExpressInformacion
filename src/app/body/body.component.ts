import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";



@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, FooterComponent]
})
export class BodyComponent {

}
