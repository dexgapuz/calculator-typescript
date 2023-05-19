import './sass/styles.scss';
import './styles/app.css';
import 'bootstrap';
import * as checkType from 'check-types';

const calcButton: HTMLCollectionOf<Element> = document.getElementsByClassName('calc-button')!;
const computeButton: HTMLElement = document.getElementById('compute-button')!;
const backSpaceButton: HTMLElement = document.getElementById('back-space-button')!;
const clearButton: HTMLElement = document.getElementById('clear-button')!;
const screen: HTMLElement = document.querySelector('.screen')!;
let inputs: string[] = [];
let computation: string = '';

Array.from(calcButton).forEach((element: Element) => {
    element.addEventListener('click', (event: Event) => {
        let button: HTMLButtonElement = event.target as HTMLButtonElement;
        if (checkType.string(button.dataset.value)) {
            setScreen(button.dataset.value)
        }
    });
});

computeButton.addEventListener('click', () => {
    try {
        const result: string = eval(computation);
        screen.innerText = result;
        inputs = [];
        inputs.push(result);
        computation = result;
    } catch (error) {
        screen.innerText = '';
    }
});

backSpaceButton.addEventListener('click', () => {
    inputs.pop();
    screen.innerText = inputs.join('');
});

clearButton.addEventListener('click', () => {
    inputs = [];
    screen.innerText = '';
    computation = '';
});

function setScreen(value: string): void {
    inputs.push(value);
    const result: string = inputs.join('');
    screen.innerText = result;
    computation = result;
}
