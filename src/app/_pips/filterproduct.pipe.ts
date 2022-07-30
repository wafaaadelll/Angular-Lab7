import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterproduct'
})
export class FilterproductPipe implements PipeTransform {

  transform(products: any[], search: string, filterprop: string[]) {
    let list: any = []
    if (!search) {
      return products
    } else {
      products.forEach((ele) => {
        filterprop.forEach((propele) => {
          if (ele[propele] && ele[propele]
            .toString()
            .toLowerCase()
            .includes(search.toLowerCase())) {
            if (!list.includes(ele)) {
              list.push(ele)
            }
          }
        })
      })
    }
    return list;
  }

}
