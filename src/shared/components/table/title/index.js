import createTitleTable from '#shared/components/table/title-table/index.js';
import createTable from '#shared/components/table/content/index.js';

export default async function generateTabela(context) {
  const { id, tree, create, addClass, createTdContent, append } = context;

  const table = await createTable({
    ...context,
  });

  const columns = tree[id] || [];
  const lines = columns.flat();

  for (let l = 0; l < lines.length; l++) {
    const line = lines[l];

    const tr = await create({
      ...context,
      type: 'tr',
    });

    if (!tree[line]) {
      const td = await createTdContent({
        ...context,
        id: line,
      });

      await addClass({
        ...context,
        element: td,
        value: 'leaf',
      });

      await append({
        ...context,
        parent: tr,
        child: td,
      });

    } else {
      const td = await create({
        ...context,
        type: 'td',
      });

      const contentTable = await createTitleTable({
        ...context,
        id: line,
      });

      await append({
        ...context,
        parent: td,
        child: contentTable,
      });

      await append({
        ...context,
        parent: tr,
        child: td,
      });
    }

    await append({
      ...context,
      parent: table,
      child: tr,
    });
  }

  return table;
}