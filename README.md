# Toggle className in React

# Using Event Target to toggle

Call a function that takes and event target
e.target.classList('class')

# Using react useState hook to toggle

Call a function that updates and use a ternary operator to return true or false
const [variable, setVariable] = useState('false')

update setvariable inside a function e.g function X(){
setvariable(!variable)
}
className = {variable ? class1 : class2}

# Using react ref hook to toggle

initialize a useRef
element.current.classList.toggle('close')
