import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  CalculatorInput,
  CalculatorOutput,
  CalculatorReady,
  initialInputValues,
  initialOutputValues,
} from './calculator';
import { UpdateValues } from './input-form/input';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
  // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly _calculatorInput = new BehaviorSubject<CalculatorInput>(
    initialInputValues
  );
  private readonly _calculatorResults = new BehaviorSubject<CalculatorOutput>(
    initialOutputValues
  );

  // Expose the observable$ part of the _calculatorInput subject (read only stream)
  readonly input$ = this._calculatorInput.asObservable();
  readonly results$ = this._calculatorResults.asObservable();

  // the getter will return the last value emitted in _todos subject
  get calculatorInput(): CalculatorInput {
    return this._calculatorInput.getValue();
  }
  get calculatorResults(): CalculatorOutput {
    return this._calculatorResults.getValue();
  }

  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subscribers (ex: this.todos = [])
  private set calculatorInput(value: CalculatorInput) {
    this._calculatorInput.next(value);
  }
  private set calculatorResults(value: CalculatorOutput) {
    this._calculatorResults.next(value);
  }

  completeValues(object: any): object is CalculatorReady {
    return object;
  }

  calculateResults(values: CalculatorInput) {
    if (this.completeValues(values) && values?.numberOfPeople > 0) {
      const { bill, tipPercent, customTipPercent, numberOfPeople } = values;

      const finalTip = tipPercent || customTipPercent;
      let tipTotal = bill * ((finalTip || 0) / 100);
      let totalAmount = bill * ((100 + (finalTip || 0)) / 100);
      return {
        tipTotal: tipTotal,
        amountPerPerson: totalAmount / numberOfPeople,
      };
    } else return {};
  }

  updateInput(values: UpdateValues) {
    this.calculatorInput = { ...this.calculatorInput, ...values };

    if (this.completeValues(values)) {
      this.calculatorResults = {
        ...this.calculatorResults,
        ...this.calculateResults(this.calculatorInput),
      };
    }
  }

  resetInput() {
    this.calculatorInput = initialInputValues;
  }

  // serviceLog() {
  //   console.log('Hello');
  // }
}
