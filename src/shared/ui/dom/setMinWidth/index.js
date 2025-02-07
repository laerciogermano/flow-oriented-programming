export default (context) => {
  const { element, value } = context;

  element.style.minWidth = value;
}