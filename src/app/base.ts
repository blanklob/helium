import type { SimpleGreeting } from "./components/components.example";
import "./components/components.example";

const someElement = document.querySelector('simple-greeting') as SimpleGreeting;
console.log(someElement.greeting);


