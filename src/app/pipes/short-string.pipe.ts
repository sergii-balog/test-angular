import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shortstring"
})
export class ShortStringPipe implements PipeTransform {
  private defaultLength = 50;

  transform(value: string, startIndex?: number, endIndex?: number): any {
    // check if no arguments are supplied then return 50 characters: Default behavior
    if (!startIndex && startIndex !== 0) {
      if (value.length < this.defaultLength) {
        return value;
      } else {
        return value.substring(0, 50) + "...";
      }
    }
    // check if only start index is provided, then return string starting from start index till the end
    if (!endIndex && endIndex !== 0) {
      if (value.length < startIndex) {
        return value;
      } else {
        return value.substring(0, startIndex) + "...";
      }
    }
    // if both are provided, then return string between those
    if (value.length < endIndex) {
      return value.substring(startIndex);
    } else {
      return value.substring(startIndex, endIndex) + "...";
    }
  }
}
