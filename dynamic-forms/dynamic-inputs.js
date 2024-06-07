const schema = [
  {
    $formkit: "form",
    submitLabel: "Login",
  },
  {
    $formkit: "email",
    name: "email",
    label: "Email",
    validation: 'required|email',
    attrs: {
      class:
        "w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring",
    },
  },
];

export default schema;
