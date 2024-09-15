var _a;
// listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span></p>\n    <p><strong>Email:</strong><span id=\"edit-name\" class=\"editable\" >").concat(email, "</span></p>\n    <p><strong>Phone:</strong><span id=\"edit-name\" class=\"editable\">").concat(phone, "</span></p>\n    <h3>Education</h3>\n    <p id=\"education\" class=\"editable\">").concat(education, "</p>\n    <h3>Experience</h3>\n    <p id=\"experience\" class=\"editable\">").concat(experience, "</p>\n    <h3>skills</h3>\n    <p id=\"skills\" class=\"editable\">").concat(skills, "</p>\n\n    ");
        var resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error('the resumeoutput is missing');
        }
    }
    else {
        console.error('one or more element is missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (elements) {
        elements.addEventListener('click', function () {
            var _a;
            var currentElement = elements;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'span') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
