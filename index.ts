import Foo from './foo';
import Foo2 from './Foo';
import Foo3 from './foo';

console.log(Foo);
console.log(Foo2);

console.log('Foo === Foo2: ' + (Foo === Foo2));
console.log('Foo === Foo3: ' + (Foo === Foo3));


console.log('new Foo() instanceof Foo2: ' + (new Foo() instanceof Foo2));
console.log('new Foo2() instanceof Foo: ' + (new Foo2() instanceof Foo));

console.log('new Foo() instanceof Foo: ' + (new Foo() instanceof Foo));
console.log('new Foo2() instanceof Foo2: ' + (new Foo2() instanceof Foo2));
