import createTdContent from '#shared/components/td/content/index.js';

export default async function createTdText(context) {
  const { id, setText, } = context;

  const td = await createTdContent({
    ...context,
  });

  await setText({
    ...context,
    element: td,
    value: id,
  });

  return td;
}