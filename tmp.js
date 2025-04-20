document
        .getElementById("answer-yes-isteroid")
        .addEventListener("click", () => {
          cnt_isteroid++;
          cnt_questions_tmp++;

          if (cnt_questions_tmp > num_questions_isteroid) {
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
          displayQuestion(
            "question-text-isteroid",
            questions_isteroid,
            cnt_questions_tmp
          );
          document.getElementById("questions-done-isteroid").innerHTML =
            cnt_questions_tmp + "/" + num_questions_isteroid;
        });

      document
        .getElementById("answer-no-isteroid")
        .addEventListener("click", () => {
          cnt_questions_tmp++;
          if (cnt_questions_tmp > num_questions_isteroid) {
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

          displayQuestion(
            "question-text-isteroid",
            questions_isteroid,
            cnt_questions_tmp
          );
          document.getElementById("questions-done-isteroid").innerHTML =
            cnt_questions_tmp + "/" + num_questions_isteroid;
        });