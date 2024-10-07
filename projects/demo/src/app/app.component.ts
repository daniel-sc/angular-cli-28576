import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getLocalizedTranslation as distGetLocalizedTranslation } from '@example-library';
import { getLocalizedTranslation as nodeModulesGetLocalizedTranslation } from '@gongall/example-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'repro-app';

  distThirdPartyTranslation = 'dist : ' + distGetLocalizedTranslation();
  nodeModulesThirdPartyTranslation = 'node : ' + nodeModulesGetLocalizedTranslation();
}
