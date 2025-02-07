export default (context) => {
  const { element, value } = context;

  element.style.textWrap = value;
}