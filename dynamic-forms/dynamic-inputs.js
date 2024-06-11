const schema = [
  {
    $formkit: "email",
    name: "email",
    label: "Email",
    validation: "required|email",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
  {
    $formkit: "password",
    name: "password",
    label: "Password",
    validation: "required|length:6,8",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
];

export default schema;
