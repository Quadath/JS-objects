const lesson = {
    name: 'деструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ колек',
  };
console.log(normalize(lesson));

function normalize(obj) {
    let name = obj.name;
    let description = obj.description;

    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);

    description = description.toLowerCase();

    return {
        name: name,
        description: description
    }
}
/* 
Наша функция должна обновлять содержимое урока по следующим правилам:

Имя капитализируется. То есть первый символ имени становится заглавным, остальные маленькими.
Весь текст описания приводится к нижнему регистру.
*/