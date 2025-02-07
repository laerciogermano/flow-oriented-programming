import createTdContent from '#shared/components/td/content/index.js';
import eventKeyMouseEnter from '#shared/config/events/ids/mouse-enter/index.js';
import eventKeyMouseLeave from '#shared/config/events/ids/mouse-leave/index.js';

export default async function createTdBar(context) {
  const {
    create,
    append,
    setBackgroundColor,
    setDisplay,
    setBorderRadius,
    setHeight,
    on,
  } = context;

  const td = await createTdContent({
    ...context,
  });

  const span = await create({
    ...context,
    type: 'span',
  });

  await Promise.all([
    setDisplay({
      ...context,
      element: span,
      value: 'block',
    }),
    setHeight({
      ...context,
      element: span,
      value: '4px',
    }),
    setBorderRadius({
      ...context,
      element: span,
      value: '10px',
    }),
    setBackgroundColor({
      ...context,
      element: span,
      value: '#2779d7',
    }),
  ]);

  const eventMouseEnter = await eventKeyMouseEnter({
    ...context,
  });

  on({
    ...context,
    event: eventMouseEnter,
    callback: async (context) => {
      await setBackgroundColor({
        ...context,
        element: span,
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
      await setBackgroundColor({
        ...context,
        element: span,
        value: '#2779d7',
      });
    }
  });

  await append({
    ...context,
    parent: td,
    child: span,
  });

  return td;
}