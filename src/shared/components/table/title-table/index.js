import createTrTitle from './title/index.js';
import createTrContent from './content/index.js';
import createTable from '#shared/components/table/content/index.js';

export default async (context) => {
  const { append } = context;

  const [
    table,
    trTitle,
    trContent,
  ] = await Promise.all([
    createTable({
      ...context,
    }),
    createTrTitle({
      ...context,
    }),
    createTrContent({
      ...context,
    }),
  ]);

  await append({
    ...context,
    parent: table,
    child: trTitle,
  });

  await append({
    ...context,
    parent: table,
    child: trContent,
  });

  return table;
}