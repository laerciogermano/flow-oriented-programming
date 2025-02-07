export default async function createTrContent(context) {
  const {
    create,
    append
  } = context;

  const [
    tr,
    td,
  ] = await Promise.all([
    create({
      ...context,
      type: 'tr'
    }),
    createTd({
      ...context,
    }),
  ]);

  await append({
    ...context,
    parent: tr,
    child: td,
  });

  return tr;
}

async function createTd(context) {
  const {
    create,
    append,
    createTableContent,
    setBorderLeft,
    setBorderBottom,
    setBorderRight,
    setBorderBottomLeftRadius,
    setBorderBottomRightRadius,
  } = context;

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

  return td;
}