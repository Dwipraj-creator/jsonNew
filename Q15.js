function digitalLibrary(bookes){
    bookes.splice(4,0, "About life")
console.log(bookes)
console.log(bookes.includes("Geeta")) 
console.log(bookes.lastIndexOf("About life"))
let newBookes = bookes.slice(2)
console.log(newBookes)
console.log(bookes.join(","))


}


let  bookes = ["Geeta", "Bibel", "Finance" , "Self love","Think like a monk", "Rich dad Poor dad"]

digitalLibrary(bookes)