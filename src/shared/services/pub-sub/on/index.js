export default async (context) => {
  const { event, listeners, callback } = context;

  listeners[event] = listeners[event] || [];

  listeners[event].push(callback);
}