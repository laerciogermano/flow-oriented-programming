import createTdContent from '#shared/components/td/content/index.js';

export default async function createTdBar(context) {
  const { create, addClass, append, setBackgroundColor, setDisplay, setBorderRadius, setHeight, } = context;

  const td = await createTdContent({
    ...context,
  });

  await addClass({
    ...context,
    element: td,
    value: 'flow-ceil',
  });

  const span = await create({
    ...context,
    type: 'span',
  });

  await Promise.all([
    setDisplay({
      ...context,
      element: span,
      value: 'block',
    }),
    setHeight({
      ...context,
      element: span,
      value: '4px',
    }),
    setBorderRadius({
      ...context,
      element: span,
      value: '10px',
    }),
    setBackgroundColor({
      ...context,
      element: span,
      value: '#2779d7',
    }),
  ]);

  await append({
    ...context,
    parent: td,
    child: span,
  });

  return td;
}