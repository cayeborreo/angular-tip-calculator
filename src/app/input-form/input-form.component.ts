import { Component, Input } from '@angular/core';

import { CalculatorInput, initialInputValues } from '../calculator';
import { CalculatorService } from '../calculator.service';
import { tips } from './tips';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
})
export class InputFormComponent {
  @Input() calculatorInput: CalculatorInput = initialInputValues;
  tips = tips;

  constructor(private calculatorStore: CalculatorService) {}

  handleButtonClick(event: Event) {
    let chosenTipPercent = (event.target as any).id;

    // If they have a custom tip, we reset it
    if (!!this.calculatorInput.customTipPercent) {
      this.calculatorStore.updateInput({ customTipPercent: null });
    }

    this.calculatorStore.updateInput({
      tipPercent: parseInt(chosenTipPercent),
    });
  }

  updateValues(event: Event) {
    let name = (event.currentTarget as any).name;
    let value = (event.currentTarget as any).value;

    // If this form is customTipPercent, we should clear out tipPercent
    if (name === 'customTipPercent' && !!this.calculatorInput.tipPercent) {
      this.calculatorStore.updateInput({ tipPercent: null });
    }

    this.calculatorStore.updateInput({
      [name]: parseInt(value),
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
