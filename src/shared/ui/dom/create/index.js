export default (context) => {
  const { type } = context;

  console.log(context, type);

  return document.createElement(type);
}