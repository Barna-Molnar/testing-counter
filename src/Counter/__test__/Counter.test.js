import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter.jsx';


// it is going to run before Each test 
beforeEach(() => {
    return render(<Counter />);
})

describe('Testing Counter', () => {
    test('renders h1 with "My counter" text', () => {
        // render(<Counter />);
        const headerElement = screen.getByText(/my counter/i);
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveTextContent('My Counter')
    });
    test('Counter initially starts with text of 0', () => {
        // render(<Counter />);
        const counterElement = screen.getByTestId('counter');
        expect(counterElement.textContent).toBe('0');

    });
    test('Input contains initial value of 1', () => {
        // render(<Counter />);
        const inputElement = screen.getByTestId('input');
        expect(inputElement.value).toBe('1');

    });
    test('Add Button renders with "+"', () => {
        // render(<Counter />);
        const addBtn = screen.getByTestId('add-btn');
        expect(addBtn.textContent).toBe('+');

    });
    test('Subtract Button renders with "+"', () => {
        // render(<Counter />);
        const subtractBtn = screen.getByTestId('subtract-btn');
        expect(subtractBtn.textContent).toBe('-');

    });
    test('Changing value of input works correctly', () => {
        // render(<Counter />);
        const inputElement = screen.getByTestId('input');
        fireEvent.change(inputElement, { target: { value: 3 } })

        expect(inputElement.value).toBe('3');

    });
    test('Clicking on add button adds 1 to a counter', () => {
        // render(<Counter />);
        const addBrnEl = screen.getByTestId('add-btn');
        const counterElement = screen.getByTestId('counter');
        expect(counterElement.textContent).toBe('0');
        fireEvent.click(addBrnEl)

        expect(counterElement.textContent).toBe('1');


    });
    test('Clicking on add button subtract 1 to a counter', () => {
        // render(<Counter />);
        const subtractBrnEl = screen.getByTestId('subtract-btn');
        const counterElement = screen.getByTestId('counter');
        expect(counterElement.textContent).toBe('0');
        fireEvent.click(subtractBrnEl)

        expect(counterElement.textContent).toBe('-1');


    });
    test('Changing inputValue and Clicking on add button and adds to a counter', () => {
        // render(<Counter />);
        const btnElement = screen.getByTestId('add-btn');
        const counterElement = screen.getByTestId('counter');
        const inputElement = screen.getByTestId('input');

        fireEvent.change(inputElement, { target: { value: 5 } })
        expect(counterElement.textContent).toBe('0');
        fireEvent.click(btnElement)

        expect(counterElement.textContent).toBe('5');


    });
    test('Changing inputValue and Clicking on subtract button and subtract from counter', () => {
        // render(<Counter />);
        const subtractBtnElement = screen.getByTestId('subtract-btn');
        const counterElement = screen.getByTestId('counter');
        const inputElement = screen.getByTestId('input');
        const addBtnElement = screen.getByTestId('add-btn');

        fireEvent.change(inputElement, { target: { value: 5 } })
        expect(counterElement.textContent).toBe('0');
        fireEvent.click(subtractBtnElement)

        expect(counterElement.textContent).toBe('-5');
        fireEvent.change(inputElement, { target: { value: 15 } })
        fireEvent.click(addBtnElement)
        expect(counterElement.textContent).toBe('10');


    });

    test('counter contains correct classname and value', () => {
        // render(<Counter />);
        const subtractBtnElement = screen.getByTestId('subtract-btn');
        const addBtnElement = screen.getByTestId('add-btn');
        const counterElement = screen.getByTestId('counter');
        const inputElement = screen.getByTestId('input');
        expect(counterElement.className).toBe('')
        fireEvent.change(inputElement, { target: { value: 100 } })
        fireEvent.click(addBtnElement)
        expect(counterElement.className).toBe('green')
        expect(counterElement.textContent).toBe('100');
        fireEvent.click(subtractBtnElement)
        fireEvent.click(subtractBtnElement)
        expect(counterElement.className).toBe('red')
        expect(counterElement.textContent).toBe('-100');

    })


})

