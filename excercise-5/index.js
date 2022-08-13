//Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности значение по указанным ключам. Параметры:

const data = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };
  get(data, ['undefined']); // null
  get(data, ['user']); // 'ubuntu'
  get(data, ['user', 'ubuntu']); // null
  get(data, ['hosts', 1, 'name']); // 'web2'
  get(data, ['hosts', 0]); // { name: 'web1' }
  get(data, ['hosts', 1, null]); // 3
  get(data, ['hosts', 1, 'active']); // false

  function get(obj, path) {
    let temp = [];
    temp.push(obj);
    for (let i = 0; i < path.length; i++) {
        const key = path[i];
        temp.push(temp[i][key]);
        if (i + 1 == path.length) {
            answer1 = temp[i][key] ? temp[i][key] : null;
        }
    }
    console.log(answer1)
  }