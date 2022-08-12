 
const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
is(company1, company2); // false
 
const company3 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company4 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
is(company3, company4); // true

function is(first, second) {
    let answer = true;
    for (let i = 0; i < Object.keys(first).length; i++) {
        keyName = Object.keys(first)[i];
        if (first[keyName] != second[keyName]) {
            answer = false;
        }
    }
    console.log(answer);
}

/*
Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных,
а не по ссылкам. Эта функция принимает на вход две компании и возвращает true,
если их структура одинаковая, и false в обратном случае. 
Проверка должна проходить по свойствам name, state, website. 
*/