export default async (context) => {
  const { event, listeners, payload } = context;

  const fns = listeners[event] || [];

  return Promise.all(fns.map(callback => callback({
    ...context,
    ...payload,
  })));
}