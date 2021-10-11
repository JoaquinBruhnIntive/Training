const { createStore } = require("redux");

let users = ["foo","bar","qux"];

function counter(state = users, action){
    switch (action.type){
        case "ADD":
            return [...state, action.name]
        default:
            return state
    }
}

let store = createStore(counter);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({ type: "ADD", name: "origin"})