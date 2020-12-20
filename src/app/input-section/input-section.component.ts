import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-section",
  templateUrl: "./input-section.component.html",
  styleUrls: ["./input-section.component.scss"]
})
export class InputSectionComponent implements OnInit {
  @Input() showValidation: Boolean;
  @Input() names: Array<String>;
  @Input() fieldInput: String;
  @Output() fieldInputChange = new EventEmitter<String>();
  @Output() submit = new EventEmitter<String>();
  @Output() cancel = new EventEmitter<void>();
  @Output() calculate = new EventEmitter<void>();

  drawFinished = false;

  constructor() {}

  ngOnInit() {}

  addName(name: String) {
    this.submit.emit(name);
  }

  change(event) {
    this.fieldInput = event.target.value;
    this.fieldInputChange.emit(this.fieldInput);
  }

  buttonClick() {
    if (false) {
      // todo use drawInprogress
      this.emitCancel();
    } else {
      this.emitCalculate();
    }
  }
  emitCalculate() {
    this.calculate.emit();
  }
  emitCancel() {
    this.cancel.emit();
  }

  get buttonText() {
    return "Let's buy some gifts!";
  }

  get placeholderText() {
    switch (this.names.length) {
      case 0:
        return "Enter the first name to start";
      case 1:
        return "Good job! Now enter another";
      case 2:
        return "One more and we can get started...";
      case 3:
        return "Nice one! Either start the draw or keep adding people";
      case 4:
        return "Wow, you do have a lot of friends! You don't need me any more...";
    }
    return "";
  }
}
