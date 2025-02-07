export default (context) => {
  const { children, parent, child } = context;

  children[parent] = children[parent] || [];

  children[parent].push(child);
}