


        function validateName(name) {
            if (name.trim() === '') {
                document.getElementById('nameError').textContent = 'Name is required.';
                return false;
            }
            document.getElementById('nameError').textContent = '';
            return true;
        }

        function validateEmail(email) {
            var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                return false;
            }
            document.getElementById('emailError').textContent = '';
            return true;
        }

        function validateAge(age) {
            var ageNum = Number(age); 
            if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
                document.getElementById('ageError').textContent = 'Please enter a valid age between 18 and 100.';
                return false;
            }
            document.getElementById('ageError').textContent = '';
            return true;
        }

        function validatePhoneNumber(phone) {
            var phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
                return false;
            }
            document.getElementById('phoneError').textContent = '';
            return true;
        }

        function validateForm(event) {
            let isValid = true;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const age = document.getElementById('age').value;
            const phone = document.getElementById('phone').value;

            if (!validateName(name)) isValid = false;
            if (!validateEmail(email)) isValid = false;
            if (!validateAge(age)) isValid = false;
            if (!validatePhoneNumber(phone)) isValid = false;

            if (!isValid) {
                event.preventDefault();
            } else {
                console.log("Form Submitted with Values:");
                console.log("Name: ", name);
                console.log("Email: ", email);
                console.log("Age: ", age);
                console.log("Phone: ", phone);
            }
        }

        document.getElementById('submitBtn').addEventListener('click', validateForm);
   