export default async function createTdContent(context) {
  const { create, setHeight, setTextWrap } = context;

  const td = await create({
    ...context,
    type: 'td'
  });

  await setTextWrap({
    ...context,
    element: td,
    value: 'nowrap',
  })

  await setHeight({
    ...context,
    element: td,
    value: '20px',
  });

  return td;
}
