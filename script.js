// FORM INPUTS STARTING HERE
const nameInput = document.getElementById("name");
const fatherInput = document.getElementById("fathers-name");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const genderInput = document.getElementById("gender");
const aadhaarInput = document.getElementById("aadhaar");
const addressInput = document.getElementById("address");
const imggInput = document.getElementById("imgg");
const barCodeImgg = document.getElementById("barCode-imgg");
// FORM INPUTS CLOSING HERE

const blockR = document.querySelector(".outer-box");
const noneR = document.getElementById("none");

const nameAadhaar = document.getElementById("nameAadhaar");
const dobAadhaar = document.getElementById("dobAadhaar");
const genderAadhaar = document.getElementById("genderAadhaar");
const noAddhaar = document.getElementById("noAddhaar");
const noAddhaarC = document.getElementById("noAddhaarC");
const addressAadhaar = document.getElementById("addressAadhaar");
const imggAadhaar = document.getElementById("imggAadhaar");
const imggBarcode = document.getElementById("imggBarcode");

const nameAadhaarHindi = document.getElementById("nameAadhaarHindi");
const addressHindiAadhaar = document.getElementById("addressHindiAadhaar");

aadhaarInput.addEventListener("input", function () {
  const aValue = aadhaarInput.value;
  const formattedValue = aValue.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3");
  aadhaarInput.value = formattedValue;
  // console.log(formattedValue)
});

// hindi me name input lena starting here
// let hindiName = "";

// nameInputHindi.addEventListener("input", (e) => {
//   const hindiRegex = /^[\u0900-\u097F\s]+$/;
//   if (hindiRegex.test(e.target.value)) {
//     hindiName = e.target.value;
//     console.log(hindiName);
//   } else {
//     alert("कृपया सिर्फ हिंदी में नाम दर्ज करें");
//     e.target.value = "";
//     // hindiName = '';
//   }
// });

// FOR ADDRESS

// let addresshindiName = "";

// addressInputHindi.addEventListener("input", (e) => {
//   const hindiRegex =
//     /^[\u0900-\u097F\s0-9\.\,\-\_\(\)\+\=\~\@\#\$\%\^\&\*]+$/;

//   if (hindiRegex.test(e.target.value)) {
//     addresshindiName = e.target.value;
//     console.log(addresshindiName);
//   } else {
//     alert("कृपया सिर्फ हिंदी में नाम दर्ज करें");
//     e.target.value = "";
//     // hindiName = '';
//   }
// });

// FOR FATHERS NAME

// let fatherhindiName = "";

// fatherNameInputHindi.addEventListener("input", (e) => {
//   const hindiRegex = /^[\u0900-\u097F\s]+$/;

//   if (hindiRegex.test(e.target.value)) {
//     fatherhindiName = e.target.value;
//     console.log(fatherhindiName);
//   } else {
//     alert("कृपया सिर्फ हिंदी में नाम दर्ज करें");
//     e.target.value = "";
//     // hindiName = '';
//   }
// });
const nameInputHindi = document.getElementById("nameInputHindi");
const addressInputHindi = document.getElementById("addressInputHindi");
const fatherNameInputHindi = document.getElementById("fatherNameInputHindi");

// hindi me name input lena closing here

const submit = document.getElementById("submit");
const heading = document.getElementById("heading-name");

submit.addEventListener("click", (e) => {
  const aadhaarss = aadhaarInput.value.length;
  console.log(aadhaarss);
  // console.log(typeOf `${aadhaarss}`)
  if (
    nameInput.value.trim() &&
    fatherInput.value &&
    dayInput.value &&
    monthInput.value &&
    yearInput.value &&
    genderInput.value &&
    aadhaarInput.value &&
    addressInput.value &&
    imggInput.value &&
    nameInputHindi &&
    addressInputHindi &&
    fatherNameInputHindi
  ) {
    if (aadhaarss === 14) {
      e.preventDefault();
      const name = nameInput.value;
      const hname = nameInputHindi.value;
      const father = fatherInput.value;
      const hfather = fatherNameInputHindi.value;
      const haddress = addressInputHindi.value;
      const day = dayInput.value;
      const month = monthInput.value;
      const year = yearInput.value;
      const aadhaar = aadhaarInput.value;
      const file = imggInput.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        // console.log(event.target.result)
        imggAadhaar.src = event.target.result;
      };

      reader.readAsDataURL(file);

      // now for bar code
      console.log("yes=-=-=-=-", barCodeImgg.files[0]);

      if (barCodeImgg.files[0] === undefined) {
      } else {
        const file2 = barCodeImgg.files[0];
        const reader2 = new FileReader();

        reader2.onload = (event) => {
          // console.log(event.target.result)
          imggBarcode.src = event.target.result;
        };

        reader2.readAsDataURL(file2);
      }

      // console.log("hairsh===", hindiName);
      // console.log("address===", addresshindiName);
      // console.log("address===", fatherhindiName);

      // const aadhaarss=aadhaar.length
      // console.log(aadhaarss)
      const gender = genderInput.value;

      // const  aadhaar= aadhaarInput.value;
      const address = addressInput.value;

      console.log(name);
      console.log(father);
      console.log(day);
      console.log(month);
      console.log(year);
      console.log(gender);
      console.log(aadhaar);
      console.log(address);
      console.log("addressh==", haddress);
      console.log("nameh==", hname);
      console.log("father h==", hfather);
      // console.log(imgg)

      nameAadhaar.innerHTML = name;

      dobAadhaar.innerHTML = `${day}/${month}/${year}`;
      if (gender === "male") {
        let genderUpper = gender.toUpperCase();
        genderAadhaar.innerHTML = `पुरुष/${genderUpper}`;
      } else if (gender === "female") {
        let genderUpper = gender.toUpperCase();
        genderAadhaar.innerHTML = `स्त्री/${genderUpper}`;
      } else if (gender === "other") {
        let genderUpper = gender.toUpperCase();
        genderAadhaar.innerHTML = `अन्य/${genderUpper}`;
      }

      noAddhaar.innerHTML = aadhaar;
      noAddhaarC.innerHTML = aadhaar;
      addressAadhaar.innerHTML = `${father} ,${address}`;
      nameAadhaarHindi.innerHTML = hname;
      addressHindiAadhaar.innerHTML = `${hfather} ,${haddress}`;
      noneR.style.display = "none";
      lo.style.display = "block";

      setTimeout(() => {
        lo.style.display = "none";
        blockR.style.visibility = "visible";
      }, 2000);
    } else {
      alert("aadhaar no is incorrect");
    }
  } else {
    alert("please fill all the fields");
  }
});
