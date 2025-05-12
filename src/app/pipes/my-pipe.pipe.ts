import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mypipe'
})
export class MyPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {

      return value + '- pipe'
  }
}
