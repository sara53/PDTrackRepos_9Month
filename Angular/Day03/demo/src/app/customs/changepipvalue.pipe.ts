import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changepipvalue',
  standalone: true,
})
export class ChangepipvaluePipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    return value.toUpperCase() + args[0];
  }
}
