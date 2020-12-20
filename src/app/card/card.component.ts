import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {

  @Input() name: String;
  @Input() gatherStatus: String
  @Input() index: Number;

  selected = false;

  constructor() {}

  ngOnInit() {}

  get cardClass() {
      return this.selected ? "selected" : this.gatherStatus;
  }
}
