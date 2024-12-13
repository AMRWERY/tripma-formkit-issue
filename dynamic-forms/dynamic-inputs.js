const arabicRegex = /[\u0600-\u06FF\u0750-\u077F]/;

const loginSchema = [
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
    onKeydown: (event) => {
      if (arabicRegex.test(event.key)) {
        event.preventDefault();
      }
    },
    onInput: (event) => {
      if (event?.target) {
        event.target.value = event.target.value.replace(arabicRegex, "");
      }
    },
  },
  {
    $formkit: "password",
    name: "password",
    label: "forms.password",
    validation: "required|password|length:6,7",
    outerClass:
      "px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
];

const registrationSchema = [
  {
    $formkit: "text",
    name: "firstName",
    label: "forms.first_name",
    validation: "required|contains_numeric|length:3,10",
    outerClass:
      "px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
  {
    $formkit: "text",
    name: "lastName",
    label: "forms.last_name",
    validation: "required|contains_numeric|length:3,10",
    outerClass:
      "px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
    onKeydown: (event) => {
      if (arabicRegex.test(event.key)) {
        event.preventDefault();
      }
    },
    onInput: (event) => {
      if (event?.target) {
        event.target.value = event.target.value.replace(arabicRegex, "");
      }
    },
  },
  {
    $formkit: "password",
    name: "password",
    label: "forms.password",
    validation: "required|password|length:6,7",
    outerClass:
      "relative px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full pe-10",
  },
];

const resetPasswordSchema = [
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
    onKeydown: (event) => {
      if (arabicRegex.test(event.key)) {
        event.preventDefault();
      }
    },
    onInput: (event) => {
      if (event?.target) {
        event.target.value = event.target.value.replace(arabicRegex, "");
      }
    },
  },
];

const contactUsSchema = [
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
    onKeydown: (event) => {
      if (arabicRegex.test(event.key)) {
        event.preventDefault();
      }
    },
    onInput: (event) => {
      if (event?.target) {
        event.target.value = event.target.value.replace(arabicRegex, "");
      }
    },
  },
  {
    $formkit: "textarea",
    name: "textarea",
    label: "forms.message",
    validation: "required|length:0,120",
    outerClass:
      "py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
];

export {
  loginSchema,
  registrationSchema,
  resetPasswordSchema,
  contactUsSchema,
};
