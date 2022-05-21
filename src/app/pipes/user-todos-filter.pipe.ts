import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'userTodosFilter',
    pure: true
})
export class UserTodosFilterPipe implements PipeTransform {
    transform(items: any[], filter: number, completed: boolean): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => {
          return completed ? (item.completed === completed) && (item.userId === filter) : item.userId === filter;
        });
    }
}
