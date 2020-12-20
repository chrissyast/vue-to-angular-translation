import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import { InputSectionComponent } from "../input-section/input-section.component";

@Component({
  selector: "app-card-stack",
  templateUrl: "./card-stack.component.html",
  styleUrls: ["./card-stack.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CardStackComponent implements OnInit {
  @Input() names: Array<String>;
  @Input() gatherStatus: String;
  @Input() showLoading: Boolean;

  @Output() remove = new EventEmitter<Number>();

  emitRemove(i) {
    this.remove.emit(i);
  }

  constructor() {}

  ngOnInit() {}
}
