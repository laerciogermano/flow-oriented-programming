export default async function createTrContent(context) {
  const { create, append, createTableContent, setBorderLeft, setBorderBottom, setBorderRight, setBorderBottomLeftRadius, setBorderBottomRightRadius, } = context;

  const tr = await create({
    ...context,
    type: 'tr'
  });

  const td = await create({
    ...context,
    type: 'td'
  });

  await Promise.all([
    setBorderLeft({
      ...context,
      element: td,
      value: '1px dotted #ccc',
    }),
    setBorderBottom({
      ...context,
      element: td,
      value: '1px dotted #ccc',
    }),
    setBorderRight({
      ...context,
      element: td,
      value: '1px dotted #ccc',
    }),
    setBorderBottomLeftRadius({
      ...context,
      element: td,
      value: '4px',
    }),
    setBorderBottomRightRadius({
      ...context,
      element: td,
      value: '4px',
    }),
  ]);

  const table = await createTableContent({
    ...context,
  });

  await append({
    ...context,
    parent: td,
    child: table,
  });

  await append({
    ...context,
    parent: tr,
    child: td,
  });

  return tr;
}