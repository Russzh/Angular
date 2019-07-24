import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(cards, value) {
        return cards.filter(card => {
            return card.name.includes(value)
        })

    }

}