export default async (context) => {
  const { element, value, classes } = context;

  classes[element] = classes[element] || [];

  classes[element].push(value);
}