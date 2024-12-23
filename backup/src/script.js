function toggleDropdown(bodyPart){
    var dropdown = document.getElementById(bodyPart + "Dropdown");
    dropdown.classList.toggle("show");
}

//close dropdwon menu if the user clicks out of it 
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for(var i=0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains("show")){
                openDropdown.classList.remove('show');
            }
        }
    }
}
function calculateBMI(){
    var feet = parseFloat(document.getElementById('feet').value);
    var inches = parseFloat(document.getElementById('inches').value);
    var weight = parseFloat(document.getElementById('weight').value);
    
    if(isNaN(feet) || isNaN(inches) || isNaN(weight)){
        document.getElementById('result').innerText = "Please enter valid values.";
        return;
    }
    var heightInInches = (feet * 12) + inches;
    var bmi = (weight / (heightInInches * heightInInches)) * 703;
    document.getElementById('result').innerText = "Your BMI is: " + bmi.toFixed(2);  
}
document.addEventListener("DOMContentLoaded", function() {
    // Get all recipe buttons
    var recipeBtns = document.querySelectorAll(".recipe-btn");

    // Add click event listener to each recipe button
    recipeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Toggle active class on the clicked button
            this.classList.toggle("active");

            // Get the corresponding dropdown menu
            var dropdown = this.nextElementSibling;

            // Toggle display of the dropdown menu
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        });
    });
});
