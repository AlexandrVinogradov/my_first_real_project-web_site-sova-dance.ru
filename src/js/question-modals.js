'use strict';

document.addEventListener(
  'DOMContentLoaded',
  (() => {
    const openModalQuestionAnswerButton = document.querySelector(
      '.open-question-modal'
    );

    if (!openModalQuestionAnswerButton) {
      return;
    }

    const modalQuestionAnswer = document.querySelector(
      '.modal-question-answer'
    );
    const modalQuestionResult = document.querySelector(
      '.modal-question-result'
    );
    const closeModalButton = document.querySelectorAll('.close-modal');
    const sendVoteButton = document.querySelector('.send-vote');

    closeModalButton.forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        modalQuestionAnswer.classList.add('hidden');
        modalQuestionResult.classList.add('hidden');
      });
    });

    openModalQuestionAnswerButton.addEventListener('click', () => {
      modalQuestionAnswer.classList.remove('hidden');
    });

    const sendVote = () => {
      modalQuestionAnswer.classList.add('hidden');
      modalQuestionResult.classList.remove('hidden');
    };

    sendVoteButton.addEventListener('click', sendVote);
  })()
);
