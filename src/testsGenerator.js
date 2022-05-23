import right from './images/arrow-right-circle.svg';
import thumbup from './images/thumb-up.svg';
import anime from 'animejs';

const testsGenerator = (() => {

  const testWrapper = document.createElement('div');

  const generateTest = (question, answersArray, answerIndex, nextTest) => {
    const returnedTest = document.createElement('div');
    
    const questionHeader = document.createElement('h2');
    questionHeader.classList.add('question-header')
    questionHeader.textContent = question;

    const answersList = document.createElement('ul');
    answersList.classList.add('answers-list');

    const feedbackArea = document.createElement('h2');
    feedbackArea.classList.add('feedback-area');

    let i = 0;
    while (i < answersArray.length) {

      answersList.appendChild(createAnswer(i, answersArray, answerIndex, answersArray[answerIndex], feedbackArea, answersList, nextTest));
      i += 1
    }

    returnedTest.appendChild(questionHeader);
    returnedTest.appendChild(answersList);
    returnedTest.appendChild(feedbackArea);

    return returnedTest

  }

  const createAnswer = (index, answersArray, rightIndex, answerString, feedbackArea, answersList, nextTest ) => {
    const answer = document.createElement('li');
    answer.textContent = answersArray[index];

    answer.addEventListener('click', () => {
      if (index == rightIndex) {
        feedbackArea.textContent = 'Doğru yanıt!'
      }
      else {
        feedbackArea.textContent = `Yanlış, Cevap ${answerString} olacaktı.`
      }

      anime({
        targets: feedbackArea,
        translateX: [250, 0],
        duration: 100,
        easing: 'linear'
      })
      
      let i = 0
      while (i < answersArray.length) {
        answersList.removeChild(answersList.firstChild);

        answersList.appendChild(createDeadAnswer(i, answersArray))
        
        i += 1
      }

      const buttonForNext = createNextButton(nextTest);

      buttonForNext.classList.add('button-for-next');

      anime({
        targets: buttonForNext,
        scale: [1, 1.05, 1],
        delay: 500,
        duration: 1500,
        loop: true
      });

      answersList.appendChild(buttonForNext);
    })

    return answer
    
  }

  const createDeadAnswer = (index, answersArray) => {
    const answer = document.createElement('li');
    answer.textContent = answersArray[index];

    return answer
  }

  const createNextButton = (nextTestFunction) => {
    const nextButton = document.createElement('img');
    
    if (nextTestFunction == 0) {
      nextButton.src = thumbup;
    }
    else {
      nextButton.src = right; 
      nextButton.addEventListener('click', () => {
        resetWrapper();
        const nextTest = nextTestFunction();
        testWrapper.appendChild(nextTest);

      })
    }


    return nextButton
  }

  const resetWrapper = () => {
    let i = 0;

    while (i < testWrapper.children.length) {
      testWrapper.removeChild(testWrapper.lastChild);
      i += 1
    }
  }

  const generateTest1 = () => {
    const answers = [ 'süt', 'bal', 'pekmez', 'arı' ];
    testWrapper.appendChild(generateTest('İnek ___ verir', answers, 0, generateTest2));
    anime({
      targets: testWrapper,
      translateX: [-250, 0]
    })
    return testWrapper
  }

  const generateTest2 = () => {
    const answers = [ 'arı', 'inek', 'aslan', 'mısır' ];
    anime({
      targets: testWrapper,
      translateX: [-250, 0]
    })
    return generateTest('Hangisi çok güçlüdür?', answers, 2, generateTest3)
  }

  const generateTest3 = () => {
    const answers = [ 'maymun', 'ayçiçeği', 'yılan', 'fil' ];
    anime({
      targets: testWrapper,
      translateX: [-250, 0]
    })
    return generateTest('___in devasa bir hortumu vardır.', answers, 3, generateTest4)
  }

  const generateTest4 = () => {
    const answers = [ 'inek', 'arı', 'pekmez', 'lolipop' ];
    anime({
      targets: testWrapper,
      translateX: [-250, 0]
    })
    return generateTest('Bal yapan hayvan tabii ki de ___dır.', answers, 1, generateTest5)
  }

  const generateTest5 = () => {
    const answers = [ 'maymun', 'tavuk', 'papağan', 'çekirdek' ];
    anime({
      targets: testWrapper,
      translateX: [-250, 0]
    })
    return generateTest('______ muz yer.', answers, 0, 0)
  }




  return { generateTest1, generateTest2, generateTest3, generateTest4, generateTest5, resetWrapper }
})()

export function test1() {
  return testsGenerator.generateTest1()
}
export function test2() {
  return testsGenerator.generateTest2()
}
export function test3() {
  return testsGenerator.generateTest3()
}
export function test4() {
  return testsGenerator.generateTest4()
}
export function test5() {
  return testsGenerator.generateTest5()
}

export function resetTestWrapper() {
  return testsGenerator.resetWrapper()
}