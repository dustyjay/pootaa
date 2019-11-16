import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hire-pootaa",
  templateUrl: "./hire-pootaa.component.html",
  styleUrls: ["./hire-pootaa.component.scss"]
})
export class HirePootaaComponent implements OnInit {
  activeTab: number = 3;
  items: object[] = [];
  goToNextTab() {
    if (this.activeTab < 4) {
      this.activeTab += 1;
    }
  }
  addNewItem(item) {
    this.items.push(item);
  }
  removeItem(index) {
    this.items.splice(index, 1);
  }
  constructor() {}

  ngOnInit() {}
}
