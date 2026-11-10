document.addEventListener('DOMContentLoaded', () => {
  // 1. 다크/라이트 테마 전환
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️ 밝게' : '🌙 어둡게';
  });

  // 2. 오늘의 코딩 퀴즈 (3문제 및 다음 문제 넘기기)
  const quizzes = [
    {
      question: '다음 파이썬 코드를 실행했을 때 출력되는 결과값은 무엇일까요?',
      code: `numbers = [1, 2, 3, 4, 5]
result = sum(numbers[:3])
print(result)`,
      answer: '6',
      desc: '<code>numbers[:3]</code>은 리스트의 0번째부터 2번째 인덱스까지 슬라이싱하여 <code>[1, 2, 3]</code>이 됩니다. <code>sum([1, 2, 3])</code>은 1 + 2 + 3이므로 결과는 <strong>6</strong>입니다.'
    },
    {
      question: '다음 조건문과 반복문이 실행된 후 출력되는 값은 무엇일까요?',
      code: `total = 0
for i in range(1, 6):
    if i % 2 == 1:
        total += i
print(total)`,
      answer: '9',
      desc: '<code>range(1, 6)</code>은 1부터 5까지 반복하며, 홀수(1, 3, 5)일 때만 더해집니다. 따라서 1 + 3 + 5 = <strong>9</strong>가 됩니다.'
    },
    {
      question: '다음 문자열 인덱싱 연산 결과로 출력되는 것은 무엇일까요?',
      code: `word = "Python"
print(word[0] + word[-1])`,
      answer: 'Pn',
      desc: '<code>word[0]</code>은 첫 글자인 <code>"P"</code>이고, <code>word[-1]</code>은 마지막 글자인 <code>"n"</code>입니다. 두 문자열을 이어붙여 <strong>Pn</strong>이 출력됩니다.'
    }
  ];

  let currentQuizIndex = 0;

  const quizBadge = document.getElementById('quizBadge');
  const quizQuestion = document.getElementById('quizQuestion');
  const quizCode = document.getElementById('quizCode');
  const quizBtn = document.getElementById('quizBtn');
  const quizNextBtn = document.getElementById('quizNextBtn');
  const quizAnswer = document.getElementById('quizAnswer');
  const quizAnswerText = document.getElementById('quizAnswerText');
  const quizAnswerDesc = document.getElementById('quizAnswerDesc');

  function renderQuiz(index) {
    const q = quizzes[index];
    quizBadge.textContent = `문제 ${index + 1} / ${quizzes.length}`;
    quizQuestion.innerHTML = `<strong>Q.</strong> ${q.question}`;
    quizCode.textContent = q.code;
    quizAnswerText.innerHTML = `정답: <strong>${q.answer}</strong>`;
    quizAnswerDesc.innerHTML = q.desc;

    // 정답 보기 초기화
    quizAnswer.style.display = 'none';
    quizBtn.textContent = '정답 확인하기';

    // 마지막 문제일 경우 버튼 텍스트 변경
    quizNextBtn.textContent = (index === quizzes.length - 1) ? '처음으로 ↺' : '다음 문제 ➔';
  }

  // 정답 확인 / 숨기기 토글
  quizBtn.addEventListener('click', () => {
    const isHidden = quizAnswer.style.display === 'none';
    if (isHidden) {
      quizAnswer.style.display = 'block';
      quizBtn.textContent = '정답 숨기기';
    } else {
      quizAnswer.style.display = 'none';
      quizBtn.textContent = '정답 확인하기';
    }
  });

  // 다음 문제 넘기기
  quizNextBtn.addEventListener('click', () => {
    currentQuizIndex = (currentQuizIndex + 1) % quizzes.length;
    renderQuiz(currentQuizIndex);
  });

  // 초기 렌더링
  renderQuiz(0);
});
