export default (context) => {
  const { type } = context;

  return document.createElement(type);
}