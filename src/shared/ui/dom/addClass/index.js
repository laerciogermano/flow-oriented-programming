export default (context) => {
  const { element, value } = context;

  element.classList.add(value);
}