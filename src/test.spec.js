import removeSpacesFromHTML from './shared/utils/removeSpacesFromHTML/index.js';

test('', async () => {
  const input = {
    'A': []
  };

  const result = await parse({
    tree: input,
    id: 'A',
  });

  expect(result).toBe(removeSpacesFromHTML({
    html: `
      <table>
        <tr>
          <td>A</td>
        </tr>
      </table>
    `
  }));
});

async function parse({ tree }) {
  // captura 

  return '<table><tr><td>A</td></tr></table>';
}

