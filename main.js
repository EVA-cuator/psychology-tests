import {
  num_questions_epileptoid,
  num_questions_cyclothymic,
  num_questions_asthenic,
  num_questions_shizoid,
  num_questions_isteroid,
  questions_epileptoid,
  questions_cyclothymic,
  questions_asthenic,
  questions_isteroid,
  questions_shizoid,
} from "/const.js";

/* F U N C T I O N S */

function toggleTest(test) {
  toggleVisibility(test);
  toggleVisibility("lobby");
}

function toggleResults(place, result) {
  toggleVisibility(place);
  toggleVisibility(result);
}

function toggleVisibility(inputID) {
  let element = document.getElementById(inputID);
  element.classList.toggle("hidden");
}

function displayResultsText(results_test, results_text, cnt, num_questions) {
  var percents =
    "Результат: " +
    parseFloat(((cnt / num_questions) * 100).toFixed(1)) +
    "% совпадения.";
  document.getElementById(results_test).innerHTML = percents;
  document.getElementById(results_text).innerHTML = percents;
}

function displayQuestion(question_window_id, questions_list, i) {
  var curr_question_element = document.getElementById(question_window_id);
  curr_question_element.innerHTML = questions_list[i - 1];
}

/* O P E N I N G   T H E   T E S T */

document.addEventListener("DOMContentLoaded", () => {
  var buttonepileptoid = document.getElementById("start-epileptoid");
  buttonepileptoid.addEventListener("click", () => {
    displayQuestion(
      "question-text-epileptoid",
      questions_epileptoid,
      cnt_questions_tmp
    );
    toggleTest("test-epileptoid");
  });
  var buttoncyclothymic = document.getElementById("start-cyclothymic");
  buttoncyclothymic.addEventListener("click", () => {
    displayQuestion(
      "question-text-cyclothymic",
      questions_cyclothymic,
      cnt_questions_tmp
    );
    toggleTest("test-cyclothymic");
  });
  var buttonasthenic = document.getElementById("start-asthenic");
  buttonasthenic.addEventListener("click", () => {
    displayQuestion(
      "question-text-asthenic",
      questions_asthenic,
      cnt_questions_tmp
    );
    toggleTest("test-asthenic");
  });
  var buttonshizoid = document.getElementById("start-shizoid");
  buttonshizoid.addEventListener("click", () => {
    displayQuestion(
      "question-text-shizoid",
      questions_shizoid,
      cnt_questions_tmp
    );
    toggleTest("test-shizoid");
  });
  var buttonisteroid = document.getElementById("start-isteroid");
  buttonisteroid.addEventListener("click", () => {
    displayQuestion(
      "question-text-isteroid",
      questions_isteroid,
      cnt_questions_tmp
    );
    toggleTest("test-isteroid");
  });

  /* C O U N T I N G   T H E   R E S U L T S */

  var cnt_questions_tmp = 1;

  document.getElementById("questions-done-epileptoid").innerHTML =
    cnt_questions_tmp + "/" + num_questions_epileptoid;
  document.getElementById("questions-done-cyclothymic").innerHTML =
    cnt_questions_tmp + "/" + num_questions_cyclothymic;
  document.getElementById("questions-done-asthenic").innerHTML =
    cnt_questions_tmp + "/" + num_questions_asthenic;
  document.getElementById("questions-done-shizoid").innerHTML =
    cnt_questions_tmp + "/" + num_questions_shizoid;
  document.getElementById("questions-done-isteroid").innerHTML =
    cnt_questions_tmp + "/" + num_questions_isteroid;

  var cnt_epileptoid = 0;
  document
    .getElementById("answer-yes-epileptoid")
    .addEventListener("click", () => {
      cnt_epileptoid++;
      cnt_questions_tmp++;

      if (cnt_questions_tmp > num_questions_epileptoid) {
        toggleResults("test-epileptoid", "results-epileptoid");
        displayResultsText(
          "results-test-epileptoid",
          "results-text-epileptoid",
          cnt_epileptoid,
          num_questions_epileptoid
        );
        cnt_questions_tmp = 1;
        cnt_epileptoid = 0;
      }
      displayQuestion(
        "question-text-epileptoid",
        questions_epileptoid,
        cnt_questions_tmp
      );
      document.getElementById("questions-done-epileptoid").innerHTML =
        cnt_questions_tmp + "/" + num_questions_epileptoid;
    });

  document
    .getElementById("answer-no-epileptoid")
    .addEventListener("click", () => {
      console.log(cnt_questions_tmp);
      if (cnt_questions_tmp > num_questions_epileptoid) {
        toggleResults("test-epileptoid", "results-epileptoid");
        displayResultsText(
          "results-test-epileptoid",
          "results-text-epileptoid",
          cnt_epileptoid,
          num_questions_epileptoid
        );
        cnt_questions_tmp = 1;
        cnt_epileptoid = 0;
      }
      cnt_questions_tmp++;
      displayQuestion(
        "question-text-epileptoid",
        questions_epileptoid,
        cnt_questions_tmp
      );
      document.getElementById("questions-done-epileptoid").innerHTML =
        cnt_questions_tmp + "/" + num_questions_epileptoid;
    });

  var cnt_cyclothymic = 0;
  document
    .getElementById("answer-yes-cyclothymic")
    .addEventListener("click", () => {
      cnt_cyclothymic++;
      cnt_questions_tmp++;

      if (cnt_questions_tmp > num_questions_cyclothymic) {
        toggleResults("test-cyclothymic", "results-cyclothymic");
        displayResultsText(
          "results-test-cyclothymic",
          "results-text-cyclothymic",
          cnt_cyclothymic,
          num_questions_cyclothymic
        );
        cnt_questions_tmp = 1;
        cnt_cyclothymic = 0;
      }
      displayQuestion(
        "question-text-cyclothymic",
        questions_cyclothymic,
        cnt_questions_tmp
      );
      document.getElementById("questions-done-cyclothymic").innerHTML =
        cnt_questions_tmp + "/" + num_questions_cyclothymic;
    });

  document
    .getElementById("answer-no-cyclothymic")
    .addEventListener("click", () => {
      cnt_questions_tmp++;
      if (cnt_questions_tmp > num_questions_cyclothymic) {
        toggleResults("test-cyclothymic", "results-cyclothymic");
        displayResultsText(
          "results-test-cyclothymic",
          "results-text-cyclothymic",
          cnt_cyclothymic,
          num_questions_cyclothymic
        );
        cnt_questions_tmp = 1;
        cnt_cyclothymic = 0;
      }

      displayQuestion(
        "question-text-cyclothymic",
        questions_cyclothymic,
        cnt_questions_tmp
      );
      document.getElementById("questions-done-cyclothymic").innerHTML =
        cnt_questions_tmp + "/" + num_questions_cyclothymic;
    });

  var cnt_asthenic = 0;
  document
    .getElementById("answer-yes-asthenic")
    .addEventListener("click", () => {
      cnt_asthenic++;
      cnt_questions_tmp++;
      displayQuestion(
        "question-text-asthenic",
        questions_asthenic,
        cnt_questions_tmp
      );
      if (cnt_questions_tmp >= num_questions_asthenic + 1) {
        toggleResults("test-asthenic", "results-asthenic");
        displayResultsText(
          "results-test-asthenic",
          "results-text-asthenic",
          cnt_asthenic,
          num_questions_asthenic
        );
        cnt_questions_tmp = 1;
        cnt_asthenic = 0;
      }
      document.getElementById("questions-done-asthenic").innerHTML =
        cnt_questions_tmp + "/" + num_questions_asthenic;
    });

  document
    .getElementById("answer-no-asthenic")
    .addEventListener("click", () => {
      cnt_questions_tmp++;
      displayQuestion(
        "question-text-asthenic",
        questions_asthenic,
        cnt_questions_tmp
      );
      if (cnt_questions_tmp >= num_questions_asthenic + 1) {
        toggleResults("test-asthenic", "results-asthenic");
        displayResultsText(
          "results-test-asthenic",
          "results-text-asthenic",
          cnt_asthenic,
          num_questions_asthenic
        );
        cnt_questions_tmp = 1;
        cnt_asthenic = 0;
      }
      document.getElementById("questions-done-asthenic").innerHTML =
        cnt_questions_tmp + "/" + num_questions_asthenic;
    });

  var cnt_shizoid = 0;
  document
    .getElementById("answer-yes-shizoid")
    .addEventListener("click", () => {
      cnt_shizoid++;
      cnt_questions_tmp++;
      displayQuestion(
        "question-text-shizoid",
        questions_shizoid,
        cnt_questions_tmp
      );
      if (cnt_questions_tmp >= num_questions_shizoid + 1) {
        toggleResults("test-shizoid", "results-shizoid");
        displayResultsText(
          "results-test-shizoid",
          "results-text-shizoid",
          cnt_shizoid,
          num_questions_shizoid
        );
        cnt_questions_tmp = 1;
        cnt_shizoid = 0;
      }
      document.getElementById("questions-done-shizoid").innerHTML =
        cnt_questions_tmp + "/" + num_questions_shizoid;
    });

  document.getElementById("answer-no-shizoid").addEventListener("click", () => {
    cnt_questions_tmp++;
    displayQuestion(
      "question-text-shizoid",
      questions_shizoid,
      cnt_questions_tmp
    );
    if (cnt_questions_tmp >= num_questions_shizoid + 1) {
      toggleResults("test-shizoid", "results-shizoid");
      displayResultsText(
        "results-test-shizoid",
        "results-text-shizoid",
        cnt_shizoid,
        num_questions_shizoid
      );
      cnt_questions_tmp = 1;
      cnt_shizoid = 0;
    }
    document.getElementById("questions-done-shizoid").innerHTML =
      cnt_questions_tmp + "/" + num_questions_shizoid;
  });

  var cnt_isteroid = 0;
  document
    .getElementById("answer-yes-isteroid")
    .addEventListener("click", () => {
      cnt_isteroid++;
      cnt_questions_tmp++;
      displayQuestion(
        "question-text-isteroid",
        questions_isteroid,
        cnt_questions_tmp
      );
      if (cnt_questions_tmp >= num_questions_isteroid + 1) {
        toggleResults("test-isteroid", "results-isteroid");
        displayResultsText(
          "results-test-isteroid",
          "results-text-isteroid",
          cnt_isteroid,
          num_questions_isteroid
        );
        cnt_questions_tmp = 1;
        cnt_isteroid = 0;
      }
      document.getElementById("questions-done-isteroid").innerHTML =
        cnt_questions_tmp + "/" + num_questions_isteroid;
    });

  document
    .getElementById("answer-no-isteroid")
    .addEventListener("click", () => {
      cnt_questions_tmp++;
      displayQuestion(
        "question-text-isteroid",
        questions_isteroid,
        cnt_questions_tmp
      );
      if (cnt_questions_tmp >= num_questions_isteroid + 1) {
        toggleResults("test-isteroid", "results-isteroid");
        displayResultsText(
          "results-test-isteroid",
          "results-text-isteroid",
          cnt_isteroid,
          num_questions_isteroid
        );
        cnt_questions_tmp = 1;
        cnt_isteroid = 0;
      }
      document.getElementById("questions-done-isteroid").innerHTML =
        cnt_questions_tmp + "/" + num_questions_isteroid;
    });

  /* T O   M A I N   P A G E */

  document
    .getElementById("results-to-lobby-epileptoid")
    .addEventListener("click", () => {
      toggleResults("lobby", "results-epileptoid");
    });

  document
    .getElementById("results-to-lobby-cyclothymic")
    .addEventListener("click", () => {
      toggleResults("lobby", "results-cyclothymic");
    });

  document
    .getElementById("results-to-lobby-asthenic")
    .addEventListener("click", () => {
      toggleResults("lobby", "results-asthenic");
    });

  document
    .getElementById("results-to-lobby-shizoid")
    .addEventListener("click", () => {
      toggleResults("lobby", "results-shizoid");
    });

  document
    .getElementById("results-to-lobby-isteroid")
    .addEventListener("click", () => {
      toggleResults("lobby", "results-isteroid");
    });
});
