import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [HeaderComponent]
})
export class LayoutComponent {

}
