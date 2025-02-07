export default async function createTrTitle(context) {
  const { create, append, createTdContent } = context;

  const tr = await create({
    ...context,
    type: 'tr'
  });

  const td = await createTdContent({
    ...context,
  });

  await append({
    ...context,
    parent: tr,
    child: td,
  });

  return tr;
}
