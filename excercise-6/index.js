const company = {
    name: null,
    state: 'moderating',
  };
   
  const data = {
    name: 'Hexlet',
    state: 'published',
  };
   
  // Вызовы ниже нужно рассматривать как независимые
   
  fill(company, ['name'], data);
  // {
  //   name: 'Hexlet',
  //   state: 'moderating',
  // }
   
  fill(company, [], data);
  // {
  //   name: 'Hexlet',
  //   state: 'published',
  // }
  function fill(obj, keys, obj1) {
    secondKeys = Object.keys(obj1);
    secondKeys.forEach(item => {
        if (keys.includes(item) || keys.length == 0) {
            obj[item] = obj1[item];
        }
    })
    console.log(obj);
  }