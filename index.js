// Create a structure to be able to save the leads that are entered in the input field
let myLeads = []
// If possible use const, if not use let
const inputEl = document.getElementById("input-el") // Dont want this variable to be reassigned

const inputBtn = document.getElementById("input-btn")

const tabBtn = document.getElementById("tab-btn")

const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") ) // Parse to obtain the array and not strings

//Store the unordered list in a const variable
const ulEl = document.getElementById("ul-el")

// If leadsFromLocalStorage is truthy, call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//Function to render the array of leads
function render(leads) {
    let listItems = ""

//Print out the list of leads through a for loop /// innerHTML allows to parse string tags into html code
    for(i = 0; i < leads.length; i++) {
    // Template strings
    listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
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


// Event to save the opened tab
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


// allows you to set up functions to be called when a specified event happens, such as when a user clicks a button.
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage. Use of Stringify because localStorage dont accept arrays
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


//Event to delete all leads
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads) // use of renderLeads() is that when cleared its the best way to show the empty array
})