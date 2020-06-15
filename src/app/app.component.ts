import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  talkThemes: string[] = [
    '好きなおにぎりの具',
    '好きな女性のタイプ',
    '今日のお昼ごはん',
  ];
  selectedTheme: string;
  rouletteTime = false;

  ngOnInit() {
    const randomNumber = Math.floor(Math.random() * 3);
    this.selectedTheme = this.talkThemes[randomNumber];
  }

  rouletteStart() {
    this.rouletteTime = true;
    let counter = 0;
    const roulette = setInterval(() => {
      this.selectedTheme = this.talkThemes[counter];
      counter = counter < this.talkThemes.length - 1 ? counter + 1 : 0;
      if (!this.rouletteTime) {
        clearInterval(roulette);
      }
    }, 100);
  }

  rouletteStop() {
    this.rouletteTime = false;
  }
}
