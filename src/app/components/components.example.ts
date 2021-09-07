class SimpleGreeting extends HTMLElement {
  greeting: string;

  constructor() {
    super();
    this.greeting = 'Hello, world';
  }
};

customElements.define('simple-greeting', SimpleGreeting);

export type { SimpleGreeting };


