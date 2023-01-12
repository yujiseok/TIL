import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { LinkedList } from "./LinkedList";

const numb = new NumbersCollection([1, 2, 3, 4, -1]);
numb.sort();
console.log(numb.data);

const char = new CharactersCollection("Xaayb");
char.sort();
console.log(char.data);

const linked = new LinkedList();
linked.add(1);
linked.add(2);
linked.add(66);
linked.add(-324);
linked.add(500);

linked.sort();
linked.print();
