export default async function createTdContent(context) {
  const {
    create,
    setHeight,
    setTextWrap,
    setCursor,
    onMouseEnter,
    onMouseLeave,
  } = context;

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
    value: '16px',
  });

  await setCursor({
    ...context,
    element: td,
    value: 'pointer',
  });

  onMouseEnter({
    ...context,
    element: td,
    callback: cbMouseEnter,
  });

  onMouseLeave({
    ...context,
    element: td,
    callback: cbMouseLeave,
  });

  return td;
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