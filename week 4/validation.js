const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

document.getElementById("reset-button").addEventListener("click", function () {
    transferAll(productChosen, productInstock, false);
    form.reset();
});

form.addEventListener("submit", function (event) {
  let isValid = true;
    console.log('h2')
  const nameInput = document.getElementById("name-input");
  const addressInput = document.getElementById("address-input");
  const phoneInput = document.getElementById("phone-input");
  const sexInputs = document.getElementsByName("sex");
  const deliveryInput = document.getElementById("delivery");
  const emailInput = document.getElementById("email");

  const nameError = document.getElementById("name-error");
  const addressError = document.getElementById("address-error");
  const phoneError = document.getElementById("phone-error");
  const sexError = document.getElementById("sex-error");
  const deliveryError = document.getElementById("delivery-error");
  const emailError = document.getElementById("email-error");

  // Reset error messages
  nameError.textContent = "";
  addressError.textContent = "";
  phoneError.textContent = "";
  sexError.textContent = "";
  deliveryError.textContent = "";
  emailError.textContent = "";

  const sexDetermine = () => {
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    if (maleRadio.checked) {
      return "Nam";
    } else if (femaleRadio.checked) {
      return "Nữ";
    }
  };

  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const emailValue = emailInput.value.trim();
  const sexValue = sexDetermine();
  const deliveryValue = deliveryInput.value;
  const addressValue = addressInput.value;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Họ và tên không được trống";
    nameInput.classList.add("error");
    isValid = false;
  } else {
    const words = nameValue.split(" ");
        if (words.length < 2) {
            nameError.textContent = "Họ và tên cần ít nhất hai từ";
            nameInput.classList.add("error");
            isValid = false;
        } else {
      nameInput.classList.remove("error");
    }
  }

  if (addressInput.value.trim() === "") {
    addressError.textContent = "Địa chỉ không được trống";
    addressInput.classList.add("error");
    isValid = false;
  } else {
    addressInput.classList.remove("error");
  }

  phoneError.textContent = "";

  if (phoneValue === "") {
    phoneError.textContent = "Điện thoại không được trống";
    phoneInput.classList.add("error");
    isValid = false;
  } else {
    // Regular expression for a simple phone number format (10 digits)
    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneValue)) {
      phoneError.textContent = "Số điện thoại không hợp lệ";
      phoneInput.classList.add("error");
      isValid = false;
    }else if (!phoneValue.startsWith("0")) {
        phoneError.textContent = "Số điện thoại cần bắt đầu bằng số 0";
        phoneInput.classList.add("error");
        isValid = false;
    } 
    else {
      phoneInput.classList.remove("error");
    }
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }

  let selectedSex = false;
  sexInputs.forEach((input) => {
    if (input.checked) {
      selectedSex = true;
    }
  });

  if (!selectedSex) {
    sexError.textContent = "Vui lòng chọn giới tính";
    isValid = false;
  }

  if (deliveryInput.value.trim() === "") {
    deliveryError.textContent = "Ngày giao hàng không được trống";
    deliveryInput.classList.add("error");
    isValid = false;
  } else {
    const currentDate = new Date();
    const selectedDate = new Date(deliveryValue);
    console.log(deliveryValue)

    if (selectedDate < currentDate) {
        deliveryError.textContent = "Ngày giao hàng không thể trước ngày hiện tại";
        deliveryInput.classList.add("error");
        isValid = false;
    }
    else{
    deliveryInput.classList.remove("error");
    }
  }

  emailError.textContent = "";

  if (emailValue === "") {
    emailError.textContent = "Email không được trống";
    emailInput.classList.add("error");
    isValid = false;
  } else {
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Email không hợp lệ";
      emailInput.classList.add("error");
      isValid = false;
    } else {
      emailInput.classList.remove("error");
    }
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
})