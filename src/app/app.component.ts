import { Component, ViewChild, Output, EventEmitter } from "@angular/core";
import { AnimationSectionComponent } from "./animation-section/animation-section.component";
import API from "../api";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild(AnimationSectionComponent)
  private animationSection: AnimationSectionComponent;
  

  //  @Output() namesChange = new EventEmitter<Array<String>>();

  names = [];
  errors = [];
  fieldInput: String;
  showValidation = false;
  drawInProgress = false;
  showLoading = false;
  drawFinished = false;
  calculating = false;
  drawResult = {};
  drawId = undefined;

  cancel() {
    this.drawInProgress = false;
    this.toggleGather();
    this.animationSection.clearAnimations();
  }

  remove(index) {
    this.names.splice(index, 1);
  }

  updateDrawFinished() {
    this.drawFinished = true;
    this.drawInProgress = false;
  }

  toggleGather() {
     this.animationSection.toggleGather()
  }
  animateDraw() {
    // this.$refs.animation.pullCardsFromHat()
  }
  /*
  colour(index = 0) {
      if (!(Math.floor(index / 6) % 2))
        return this.colours['--secondary-colour']
      else return this.colours['--main-colour']
  }
  */
  calculate() {
    console.log("calculate reached");

    this.drawInProgress = true;
    this.calculating = true;
    this.toggleGather();
    const body = { people: this.names };
    API.post("calculation", body)
      .then(response => {
        this.drawResult = response.data.result;
        this.drawId = response.data.id;
        this.calculating = false;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }

  add(event) {
    this.showValidation = false;
    if (event == "") {
    } else if (this.names.includes(event.toString())) {
      this.showValidation = true;
    } else {
      this.names.push(event.toString());
      this.fieldInput = "";
      console.log(this.names);
    }
  }
}
