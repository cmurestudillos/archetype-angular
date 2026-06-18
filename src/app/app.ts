import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root application component.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('archetype-angular');
}
