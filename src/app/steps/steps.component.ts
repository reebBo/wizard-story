import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  NgWizardConfig,
  THEME,
  StepChangedArgs,
  NgWizardService,
} from 'ng-wizard';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.circles,
  };
  // ===================

  ngOnInit() {}

  constructor(
    private ngWizardService: NgWizardService,
    private render: Renderer2
  ) {}

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
  stepChanged(args: StepChangedArgs) {
    let index = args.step.index;
    //  next btn
    let el_next = <HTMLButtonElement>(
      document.querySelector('.ng-wizard-btn-next')
    );

    //  group btn
    let el_group_btn = <HTMLButtonElement>(
      document.querySelector('.ng-wizard-btn-group')
    );
    let el_prev = <HTMLButtonElement>(
      document.querySelector('.ng-wizard-btn-prev')
    );
    if (el_prev != null) {
      el_prev.innerHTML = '<< Inapoi';
    }

    if (index !== 7 && el_next != null) {
      el_next.innerHTML = 'Inainte >>';
    } else if (index === 7 && el_next != null) {
      el_next.innerHTML = '';
    }

    console.log(args);
  }

  public onSubmitC(contactForm: NgForm) {
    JSON.stringify(contactForm.value);
  }
  public onSubmitF(failure_form: NgForm) {
    JSON.stringify(failure_form.value);
  }

  public onSubmitP(prediction_form: NgForm) {
    JSON.stringify(prediction_form.value);
  }
}
