
export default async function createTable(context) {
  const {
    create,
    setPaddingLeft,
    setPaddingRight,
    setPaddingBottom,
    onMouseEnter,
    onMouseLeave,
  } = context;

  const table = await create({
    ...context,
    type: 'table'
  });

  await Promise.all([
    setPaddingLeft({
      ...context,
      element: table,
      value: '8px',
    }),
    setPaddingRight({
      ...context,
      element: table,
      value: '8px',
    }),
    setPaddingBottom({
      ...context,
      element: table,
      value: '8px',
    }),
  ]);

  onMouseEnter({
    ...context,
    element: table,
    callback: cbMouseEnter,
  });

  onMouseLeave({
    ...context,
    element: table,
    callback: cbMouseLeave,
  });


  return table;
}

import eventKeyMouseEnter from '#shared/config/events/ids/mouse-enter/index.js';
import eventKeyMouseLeave from '#shared/config/events/ids/mouse-leave/index.js';

async function cbMouseEnter(context) {
  const {
    emit,
  } = context;

  const eventName = await eventKeyMouseEnter({
    ...context,
  });

  await emit({
    ...context,
    event: eventName,
  });
}

async function cbMouseLeave(context) {
  const {
    emit,
  } = context;

  const eventName = await eventKeyMouseLeave({
    ...context,
  });

  await emit({
    ...context,
    event: eventName,
  });
}