import createTitleTable from '#shared/components/table/title-table/index.js';
import createTable from '#shared/components/table/content/index.js';

export default async function generateTabela(context) {
  const { id, tree, create, append, setMinWidth, createTdContent } = context;

  const table = await createTable({
    ...context,
  });

  const columns = tree[id] || [];

  for (let c = 0; c < columns.length; c++) {
    const column = columns[c];

    for (let l = 0; l < column.length; l++) {
      const line = column[l];

      const tr = await create({
        ...context,
        type: 'tr',
      });

      for (let columnLine = 0; columnLine < columns.length; columnLine++) {
        if (columnLine == c) {
          if (!tree[line]) {
            const td = await createTdContent({
              ...context,
            });

            await setMinWidth({
              ...context,
              element: td,
              value: '40px',
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
        } else {
          const td = await create({
            ...context,
            type: 'td',
          });

          await append({
            ...context,
            parent: tr,
            child: td,
          });
        }
      }

      await append({
        ...context,
        parent: table,
        child: tr,
      });
    }
  }

  return table;
}