import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})

export class TimePipe implements PipeTransform {

  transform(minutes: number) {

    const seconds = minutes * 60;
    let secondsLeft = seconds;

    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    return `${hours ? hours + 'h' : ''} ${mins}min`;
  }
}
