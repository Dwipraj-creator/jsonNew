function manageStudents() {
    let students = ["Alice", "Bob", "Charlie", "jone"];

    // Add "David" at index 1
    students.splice(1, 2, "David");

    // Check if "Eve" is in the list
    console.log(students.includes("Eve"))  // Should return false
    console.log(students.includes("Alice"))
    // Convert the array to a string with names separated by commas
    console.log(students.join(","));  // Expected: "Alice,David,Bob,Charlie"
}

manageStudents();


