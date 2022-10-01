// Create a structure to be able to save the leads that are entered in the input field
let myLeads = []
// If possible use const, if not use let
const inputEl = document.getElementById("input-el") // Dont want this variable to be reassigned

const inputBtn = document.getElementById("input-btn")

//Store the unordered list in a const variable
const ulEl = document.getElementById("ul-el")

// allows you to set up functions to be called when a specified event happens, such as when a user clicks a button.
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""

//Print out the list of leads through a for loop /// innerHTML allows to parse string tags into html code
    for(i = 0; i < myLeads.length; i++) {
    // Template strings
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
                 ` // += is used here because otherwise only the last lead of the array would be listed
    //create element
    //set text content
    //append to url
    // const li = document.createElement("li") // Other way to do it
    // li.textContent = myLeads[i]
    // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}

