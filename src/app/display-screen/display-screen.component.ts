import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CalculatorInput,
  CalculatorOutput,
  initialInputValues,
  initialOutputValues,
} from '../calculator';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
})
export class DisplayScreenComponent {
  @Input() calculatorInput: CalculatorInput = initialInputValues;
  @Input() results: CalculatorOutput = initialOutputValues;
  @Output() reset = new EventEmitter();
}
