import store from "./redux/store";
import {
    setValue,
    increment,
    decrement
} from "./redux/counter";

function updateCounterValue() {
    const {
        counter
    } = store.getState().counterState;
    document.getElementById("counter").innerText = counter;
    document.getElementById("counterfield").value = counter;
}

updateCounterValue();

store.subscribe(updateCounterValue);

document.getElementById("plus").onclick = () => store.dispatch(increment());

document.getElementById("min").onclick = () => store.dispatch(decrement());

document.getElementById("counterfield").oninput = (e) =>
    store.dispatch(setValue(parseInt(e.target.value)));