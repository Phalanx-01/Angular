import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: Person, displayPrefix: boolean = true ): string {
    let prefix = "";
    if (displayPrefix)
      prefix = (value.gender === "Male") ? "Mr. " : "Ms. ";
    return `${prefix}${value.firstName} ${value.lastName} /`;
  }

}

