import { Component, Input } from "@angular/core";

@Component({
  selector: "test-card",
  template: `
    <h4>This is the header of you with {{ title }}</h4>
    <ng-content></ng-content>
    <h3>This is the footer</h3>
  `
})
export class TestComponent {
  @Input() title: string;
}
