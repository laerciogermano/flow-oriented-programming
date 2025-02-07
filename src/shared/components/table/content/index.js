export default async function createTable(context) {
  const { create, setPaddingLeft, setPaddingRight, setPaddingBottom } = context;

  const table = await create({
    ...context,
    type: 'table'
  });

  await Promise.all([
    setPaddingLeft({
      ...context,
      element: table,
      value: '8px',
    }),
    setPaddingRight({
      ...context,
      element: table,
      value: '8px',
    }),
    setPaddingBottom({
      ...context,
      element: table,
      value: '8px',
    }),
  ]);

  return table;
}