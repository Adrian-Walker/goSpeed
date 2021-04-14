let count =localStorage.clickcount = Number(localStorage.clickcount) + 1
let numberOfClicks = localStorage.getItem("clicks", 1)


document.addEventListener("click", function () {
    document.getElementById("myButton")
    console.log(count++)


    const create = document.createElement('h2')
    create.textContent = count
    document.getElementsByTagName("div")[0].append(create)

})
