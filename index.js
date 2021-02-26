import store from "./redux/store";
import {
    setValue,
    increment,
    decrement
} from "./redux/counter";
import {
    getCocktails
} from "./redux/cocktails";

//COUNTER
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

//COCKTAILS
document.getElementById("cocktailform").onsubmit = (e) => {
    e.preventDefault();
    store.dispatch(getCocktails(document.querySelector("#cocktailform input").value));
    document.querySelector("#cocktailform input").value = "";
};

function cocktailRender() {
    const {
        cocktails,
        loading,
        cocktail
    } = store.getState().cocktailState;
    document.getElementById("titel").innerText = cocktail;
    if (loading) {
        document.getElementById("loading").style.display = "block";
    } else {
        document.getElementById("loading").style.display = "none";
    }
    if (cocktails) {
        document.getElementById("cocktailgrid").innerHTML = cocktails
            .map((cocktail) => `<li>${cocktail.strDrink}</li>`)
            .join("");
    } else {
        document.getElementById("cocktailgrid").style.display = "none";
    }
}

cocktailRender();

store.subscribe(cocktailRender);