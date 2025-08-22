import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: PresentationStyle, displayPrefix: boolean = true ): string {
    let prefix = "";
    if (displayPrefix)
      prefix = (value.gernder === "Male") ? "Mr. " : "Ms. ";
    return `${prefix}${value.firstName} ${value.lastName}`;
  }

}
