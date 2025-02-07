export default async (context) => {
  const { types, type } = context;

  const id = Math.random();

  types[id] = type;

  return id;
}