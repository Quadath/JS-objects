const text1 = 'one two three two ONE one wow';
console.log(countWords(text1));

const text2 = 'another one sentence with strange Words words';
console.log(countWords(text2));

function countWords(text) {
    const answer = {};
    text.split(' ').map(i => i.toLowerCase()).map(key => {
        answer[key] = (answer[key] ? answer[key] : 0) + 1
    })
    return answer;
}
/*
Реализуйте и экспортируйте по умолчанию функцию, которая
 считает количество слов в предложении, и возвращает объект. 
 В объекте свойства — это слова (приведенные к нижнему регистру), 
 а значения — это то, сколько раз слово встретилось в предложении. 
 Слова в предложении могут находиться в разных регистрах. Перед подсчетом 
 их нужно приводить в нижний регистр, чтобы не пропускались дубли. */