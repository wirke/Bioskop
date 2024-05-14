import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmKarticaComponent } from './film-kartica/film-kartica.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilmKarticaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
