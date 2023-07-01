import { Component } from '@angular/core';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent {
  pop: boolean = false;





  onclicked() {
    this.pop = true;

  }
  home() {
    this.pop = false;

  }
}
