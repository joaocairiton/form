import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filter" })
export class LancamentoPipe implements PipeTransform {
  
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      // Personalize esta lógica de acordo com os seus requisitos de filtro
      return Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(searchText)
      );
    });
  }
}
