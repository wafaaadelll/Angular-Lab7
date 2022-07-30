import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceproduct'
})
export class SliceproductPipe implements PipeTransform {

  transform(value: string, length: number): string {
    return value.slice(0, length);
  }

}
