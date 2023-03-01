import {Injectable} from '@angular/core';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {Subject} from 'rxjs';

@Injectable()
export class RuPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = `Первая`;
  itemsPerPageLabel = `Записей на странице:`;
  lastPageLabel = `Последняя`;

  nextPageLabel = 'Следующая';
  previousPageLabel = 'Предыдущая';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Страница 1 из 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Страница ${page + 1} из ${amountPages}`;
  }
}