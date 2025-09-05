import { booleanAttribute, Component, input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-transforms',
  imports: [],
  templateUrl: './transforms.html',
  styleUrl: './transforms.css'
})
export class Transforms {
  darkmode = input(false, {transform: booleanAttribute});
  maxItems = input(10, {transform: numberAttribute});
  searchTerm = input('', {transform: normalizeText, alias: 'term'});
}

function normalizeText(value: string | undefined): string {
return value?.trim().toLowerCase() ?? '';
}
