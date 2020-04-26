import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  color: ThemePalette = 'primary';

  worldStatsLabel: string;
  statsByCountryLabel: string;

  otherMode: string;
  currentMode: string;

  constructor() {
    this.currentMode = Modes.LightMode;
    this.otherMode = Modes.DarkMode;
    this.worldStatsLabel = 'World statistics';
    this.statsByCountryLabel = 'Stats by country';
  }

  ngOnInit(): void {}

  changeMode() {
    this.otherMode = this.currentMode;

    if (this.currentMode === Modes.LightMode) {
      this.currentMode = Modes.DarkMode;
    } else {
      this.currentMode = Modes.LightMode;
    }
  }
}
enum Modes {
  LightMode = 'Light Mode',
  DarkMode = 'Dark Mode',
}
