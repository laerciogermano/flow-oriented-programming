export default (context) => {
  const { element, callback } = context;

  element.addEventListener('mouseleave', async (event) => {
    await callback({
      ...context,
      ...event,
    })
  });
}