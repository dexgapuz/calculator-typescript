import './sass/styles.scss';
import './styles/app.css';
import 'bootstrap';
import * as checkType from 'check-types';

const numericButton: HTMLCollectionOf<Element> = document.getElementsByClassName('numeric-button')!;
const screen: HTMLElement = document.querySelector('.screen')!;
let inputs: string[] = [];
let num: number = 0;

Array.from(numericButton).forEach((element: Element) => {
    element.addEventListener('click', (event: Event) => {
        let button: HTMLButtonElement = event.target as HTMLButtonElement;
        if (checkType.string(button.dataset.value)) {
            setScreen(button.dataset.value)
        }
    });
});

function setScreen(value: string): void {
    inputs.push(value);
    const concantNumbers = inputs.join('');
    screen.innerText = concantNumbers
    num = parseInt(concantNumbers);
}
