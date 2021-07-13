export default function logger(reducer) {
    return (prevState, action, args) => {
        console.log("Action: ", action)
        console.log("Prev State: ", prevState)
        console.log("Action Arguments: ", args)
        const nextState = reducer(prevState, action, args)
        console.log("Next State: ", nextState)
        return nextState
    }
}