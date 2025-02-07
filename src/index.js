import addClass from '#shared/ui/dom/addClass/index.js';
import append from '#shared/ui/dom/append/index.js';
import create from '#shared/ui/dom/create/index.js';
import createFlowTable from '#shared/components/table/flow/index.js';
import createFlowTitle from '#shared/components/table/title/index.js';
import createTableTitle from '#shared/components/table/title-table/index.js';
import createTdBar from '#shared/components/td/bar/index.js';
import createTdText from '#shared/components/td/texted/index.js';
import getRoot from '#shared/ui/dom/getRoot/index.js';
import setBackgroundColor from '#shared/ui/dom/setBackgroundColor/index.js';
import setBorderBottom from '#shared/ui/dom/setBorderBottom/index.js';
import setBorderBottomLeftRadius from '#shared/ui/dom/setBorderBottomLeftRadius/index.js';
import setBorderBottomRightRadius from '#shared/ui/dom/setBorderBottomRightRadius/index.js';
import setBorderLeft from '#shared/ui/dom/setBorderLeft/index.js';
import setBorderRight from '#shared/ui/dom/setBorderRight/index.js';
import setBorderTop from '#shared/ui/dom/setBorderTop/index.js';
import setBorderRadius from '#shared/ui/dom/setBorderRadius/index.js';
import setDisplay from '#shared/ui/dom/setDisplay/index.js';
import setHeight from '#shared/ui/dom/setHeight/index.js';
import setPaddingBottom from '#shared/ui/dom/setPaddingBottom/index.js';
import setPaddingLeft from '#shared/ui/dom/setPaddingLeft/index.js';
import setPaddingRight from '#shared/ui/dom/setPaddingRight/index.js';
import setText from '#shared/ui/dom/setText/index.js';
import setTextWrap from '#shared/ui/dom/setTextWrap/index.js';

(async function main(context) {
  const [
    tableFlow,
    tableTitle,
    root,
  ] = await Promise.all([
    createTableTitle({
      ...context,
      createTableContent: createFlowTable,
      createTdContent: createTdBar,
    }),
    createTableTitle({
      ...context,
      createTableContent: createFlowTitle,
      createTdContent: createTdText,
    }),
    getRoot({
      ...context,
    }),
  ]);

  await append({
    ...context,
    parent: root,
    child: tableTitle,
  });

  await append({
    ...context,
    parent: root,
    child: tableFlow,
  });
})({
  id: 'A',
  tree: {
    'A': [
      [
        'B',
        'C',
      ],
      [
        'D'
      ], [
        'E',
        'F'
      ]
    ]
  },
  create,
  append,
  addClass,
  setText,
  setPaddingLeft,
  setPaddingRight,
  setPaddingBottom,
  setTextWrap,
  setBackgroundColor,
  setHeight,
  setDisplay,
  setBorderRadius,
  setBorderLeft,
  setBorderRight,
  setBorderBottom,
  setBorderTop,
  setBorderBottomLeftRadius,
  setBorderBottomRightRadius,
});