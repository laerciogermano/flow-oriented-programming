import appendChild from '#shared/ui/mock/append/index.js';
import createElement from '#shared/ui/mock/create/index.js';
import addClass from '#shared/ui/mock/addClass/index.js';
import createTable from './index.js';

test('Deve dar o appendChild na string', async () => {
  const classes = {};
  const children = {};
  const types = {};

  await createTable({
    id: 'A',
    tree: {
      'A': [
        [
          'B'
        ]
      ]
    },
    create: createElement,
    append: appendChild,
    addClass: addClass,
    classes: classes,
    children: children,
    types: types,
  });
});