import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
var styles = require('../../styles/variables.scss');

@Component({
  selector: "app-animation-section",
  templateUrl: "./animation-section.component.html",
  styleUrls: ["./animation-section.component.scss"],
  //styles: [require('../../styles/variables.scss')]
})
export class AnimationSectionComponent implements OnInit {
  @Input() names: Array<String>;
  @Input() drawResult: {};
  @Input() showLoading: Boolean;
  @Input() drawId: Number;

  @Output() remove = new EventEmitter<void>();

  timeouts = [];
  gatherStatus = "ungathered";

  constructor() {}

  ngOnInit() {}

  emitRemove() {
    this.remove.emit();
  }

  clearAnimations() {
    console.log("clearAnimations hit");
  }

  toggleGather() {
    //this.drawInProgress = !this.drawInProgress;
    if (this.gatherStatus === "ungathered") {
      this.gatherStatus = "gathering";
      const animationTime = this.animationTime;
      this.timeouts.push(
        setTimeout(() => {
          this.gatherStatus = "gathered";
        }, animationTime)
      );
    } else {
      this.gatherStatus = "ungathered";
     // this.$refs.stack.$refs.cards.forEach(c => (c.selected = false));
    }
  }

  get animationTime() {
  console.log(styles)
    return 10;
    /*(

      parseInt(this.$style.gatheringTime.split("ms")[0], 10) +
      parseInt(this.$style.putAwayTime.split("ms")[0], 10)
    );*/
    //10;
  }
}
