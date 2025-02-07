export default (context) => {
  const { element, callback } = context;

  element.addEventListener('mouseenter', async (event) => {
    await callback({
      ...context,
      ...event,
    })
  });
}