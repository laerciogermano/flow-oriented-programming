export default (context) => {
  const { element, value } = context;

  element.style.borderRadius = value;
}