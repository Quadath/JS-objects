const data = {
    key: 'value',
    key2: {
      key: 'innerValue',
      innerKey: {
        anotherKey: 'anotherValue',
      },
    },
  };
   
  // result имеет такую же структуру, как и data
  const result = cloneDeep(data);

  function cloneDeep(data) {
    return JSON.parse(JSON.stringify(data));
  }
   
  // Но внутри другие объекты
  console.log(result.key2 !== data.key2); // true
  console.log(result.key2.innerKey !== data.key2.innerKey); // true
  console.log(result)
  