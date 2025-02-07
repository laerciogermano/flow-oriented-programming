export default (context) => {
  const { element, value } = context;

  element.style.borderLeft = value;
}