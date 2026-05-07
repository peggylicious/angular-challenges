import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styles: `
    a {
      text-decoration: #1b9df0;
      /*color: #000;*/
    }
  `,
  template: `
    <div class="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <header class="mb-8 font-serif">
          <h1 class="text-3xl leading-tight font-bold text-gray-900">
            User Management Portal
          </h1>
        </header>

        <router-outlet />
        <footer>
          <p>
            <a href="">OSS contribution for Tomas Laforge Angular challenges</a>
          </p>
        </footer>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
