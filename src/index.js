import create from './shared/ui/create/index.js';

(async function main() {
  const div = await create({
    type: 'div'
  });

  console.log('hello world', div);
})();