interface Provider {
    id: number
    sendInfo(numberOfVisits: number): void
}

class Example implements Provider {
    constructor(
        public readonly id: number,
        private name: string
    ) { }

    public getName() { return this.name }

    sendInfo() {

    }
}

const example = new Example(1, 'KUBA');

console.log(example.getName());
// console.log(example.name);