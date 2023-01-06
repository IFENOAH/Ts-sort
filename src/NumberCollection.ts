import { Sorter } from "./sorter";

export class NumbersCollection extends Sorter {
    data: number[];
    constructor(data: number[]){
        super();
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftSide = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftSide;
    }
}