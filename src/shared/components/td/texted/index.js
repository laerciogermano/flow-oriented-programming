import createTd from '#shared/components/td/content/index.js';
import eventKeyMouseEnter from '#shared/config/events/ids/mouse-enter/index.js';
import eventKeyMouseLeave from '#shared/config/events/ids/mouse-leave/index.js';

export default async function createTdText(context) {
  const {
    id,
    setText,
    on,
    setColor,
  } = context;

  const td = await createTd({
    ...context,
  });

  const eventMouseEnter = await eventKeyMouseEnter({
    ...context,
  });

  on({
    ...context,
    event: eventMouseEnter,
    callback: async (context) => {
      await setColor({
        ...context,
        element: td,
        value: 'red',
      });
    }
  });

  const eventMouseLeave = await eventKeyMouseLeave({
    ...context,
  });

  on({
    ...context,
    event: eventMouseLeave,
    callback: async (context) => {
      await setColor({
        ...context,
        element: td,
        value: 'black',
      });
    }
  });

  await setText({
    ...context,
    element: td,
    value: id,
  });

  return td;
}