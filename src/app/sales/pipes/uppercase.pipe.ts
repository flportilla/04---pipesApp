import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upper'
})
export class UpperPipe implements PipeTransform {

    transform(value: string, up: boolean = true): string {

        return up
            ? value.toUpperCase()
            : value.toLowerCase()

    }
}