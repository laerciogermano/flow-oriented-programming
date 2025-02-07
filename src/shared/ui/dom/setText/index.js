export default (context) => {
  const { element, value } = context;

  element.innerHTML = value;
}