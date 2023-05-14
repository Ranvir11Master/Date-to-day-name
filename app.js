function getDayOfWeek() {
    console.log("hi")
      const dateInput = document.getElementById("date");
      const resultElement = document.getElementById("result");
    
      // Get the date value from the input
      const dateString = dateInput.value;
      
      // Split the date into day, month, and year components
      const [day, month, year] = dateString.split("-");
    
      // Create a new date object using the day, month, and year components
      const dateObject = new Date(`${year}-${month}-${day}`);
      
      // Get the day of the week (0 = Sunday, 1 = Monday, etc.)
      const dayOfWeek = dateObject.getDay();
      
      // Define an array of day names
      const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
      ];
      
      // Get the day name from the array
      const dayName = dayNames[dayOfWeek];
      
      // Set the result text to the day name
      resultElement.textContent = `The day of the week for ${dateString} is ${dayName}.`;
    }
    