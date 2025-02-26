function modifyAndMerge (arr1,arr2){
arr1.splice(1,1,"bus")
console.log(arr1)
let newarr = arr1.concat(arr2)
return newarr

}
let arr1 = ["car", "bike", "train"]
let arr2 = ["plane", "ship"]


console.log(modifyAndMerge(arr1, arr2))
