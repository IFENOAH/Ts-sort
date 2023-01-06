import { Sorter } from "./sorter"
import { NumbersCollection } from "./NumberCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LInkedLIst"

const numbersCollection = new NumbersCollection([10, 5, 8, 2, 3])
numbersCollection.sort()
console.log(numbersCollection.data)
const charactersCollection = new CharactersCollection('aabXVy')
charactersCollection.sort()
console.log(charactersCollection.data)
const list = new LinkedList()
list.add(500)
list.add(-10)
list.add(30)
list.add(50)

list.sort()
list.print()