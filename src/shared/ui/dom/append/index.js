export default (context) => {
  const { parent, child } = context;

  parent.appendChild(child);
}