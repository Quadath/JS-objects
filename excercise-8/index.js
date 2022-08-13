const company = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }
 
const company1 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }

function make(name, keys = {}) {
    const output = {
        name: name,
        state: 'moderating',
        createdAt: new Date(),
        ...keys
    }
    console.log(output)
}