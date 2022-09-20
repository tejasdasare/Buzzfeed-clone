const quetionDisplay = document.querySelector("#quetions");

const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "Pick a vacation destination:",
    answers: [
      {
        text: "New York",
        image:
          "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        alt: "Photo of the empire state during daytime",
        credit: "Michael Discenza",
      },
      {
        text: "Austin",
        image:
          "https://images.unsplash.com/photo-1601579112934-17ac2aa86292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Austin skyline",
        credit: "Carlos Alfonso",
      },
      {
        text: "New Orleans",
        image:
          "https://images.unsplash.com/photo-1571893544028-06b07af6dade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIwb3JsZWFuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        alt: "People Walking",
        credit: "mana5280",
      },
      {
        text: "Portland",
        image:
          "https://images.unsplash.com/photo-1541457523724-95f54f7740cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydGxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        alt: "Portland",
        credit: "Justin Shen",
      },
    ],
  },
  {
    id: 1,
    text: "Pick some food:",
    answers: [
      {
        text: "Pizza",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        alt: "Pizza with berries",
        credit: "Ivan Torres",
      },
      {
        text: "Sandwich",
        image:
          "https://images.unsplash.com/photo-1626078299034-89c04b7fe4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        alt: "Sandwich with fries",
        credit: "Shardar Tarikul Islam",
      },
      {
        text: "Pasta",
        image:
          "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        alt: "Pasta",
        credit: "Nerfee Mirandilla",
      },
      {
        text: "Burger",
        image:
          "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        alt: "Burger with fries",
        credit: "Jonathan Borba",
      },
    ],
  },
  {
    id: 2,
    text: "Pick a home:",
    answers: [
      {
        text: "Traditional",
        image:
          "https://images.unsplash.com/flagged/photo-1508144389597-1b8135276ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZGl0aW9uYWwlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        alt: "home s home",
        credit: "Clarissa Budiman",
      },
      {
        text: "Modern",
        image:
          "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        alt: "Modern home",
        credit: "Florian Schmidinger",
      },
      {
        text: "House",
        image:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        alt: "House",
        credit: "todd kent",
      },
      {
        text: "Mountain",
        image:
          "https://images.unsplash.com/photo-1515095182805-4367ad159fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Mountain house",
        credit: "Michal Průcha",
      },
    ],
  },
];

const answers = [
  {
    combination: ["New York", "Pizza", "Traditional"],
    text: "Blue Cheese",
    image:
      "https://images.unsplash.com/photo-1626697556739-77b40d9a6e99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ymx1ZSUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "Blue cheese",
  },
  {
    combination: ["New Orleans", "Burger", "House"],
    text: "Halloumi",
    image:
      "https://media.istockphoto.com/photos/halloumi-cheese-picture-id172437847?b=1&k=20&m=172437847&s=170667a&w=0&h=9JPPXzGQ31yU8p0cZToHM9rM6lP_ZzxGGuKxky7gG0c=",
    alt: "Halloumi cheese",
  },
  {
    combination: ["Portland", "Sandwich", "Mountain"],
    text: "Feta ",
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZldGElMjBjaGVlc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Feta cheese",
  },
  {
    combination: ["Austin", "Pasta", "Modern"],
    text: "Chedder",
    image:
      "https://media.istockphoto.com/photos/slices-of-cheddar-cheese-on-a-wooden-cutting-board-black-background-picture-id1340224939?b=1&k=20&m=1340224939&s=170667a&w=0&h=rpJ6YuadfIebjSxyL8Wo-RFz6ADYkVMA0IxDekDZUlQ=",
    alt: "Chedder",
  },
];

// need to have a default ans

const unansweredQuestions = [];
const chosenAnswers = [];

const populateQuestions = () => {
  questions.forEach((question) => {
    const titleBlock = document.createElement("div");
    titleBlock.id = question.id;
    titleBlock.classList.add("title-block");
    const titleHeading = document.createElement("h2");
    titleHeading.textContent = question.text;

    titleBlock.append(titleHeading);
    quetionDisplay.append(titleBlock);

    const answersBlock = document.createElement("div");
    answersBlock.id = question.id + "-quetions";
    answersBlock.classList.add("answer-options");

    unansweredQuestions.push(question.id);

    question.answers.forEach((answer) => {
      const answerBlock = document.createElement("div");
      answerBlock.classList.add("answer-block");
      answerBlock.addEventListener("click", () =>
        handleClick(question.id, answer.text)
      );
      const answerImage = document.createElement("img");
      answerImage.setAttribute("src", answer.image);
      answerImage.setAttribute("alt", answer.alt);

      const answerTitle = document.createElement("h3");
      answerTitle.textContent = answer.text;

      const answerInfo = document.createElement("p");

      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", answer.credit);
      imageLink.textContent = answer.credit;

      const sourceLink = document.createElement("a");
      sourceLink.textContent = "Unsplash";
      sourceLink.setAttribute("src", "https://www.unsplash");

      answerInfo.append(imageLink, " to ", sourceLink);
      answerBlock.append(answerImage, answerTitle, answerInfo);

      answersBlock.append(answerBlock);
    });

    quetionDisplay.append(answersBlock);
  });
};

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
  if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer);
  const itemToRemove = unansweredQuestions.indexOf(questionId);

  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1);
  }

  //   disableQuestionBlock(questionId, chosenAnswer);
  //scroll to top most unanswered quetions

  const lowestQuestionId = Math.min(...unansweredQuestions);

  location.href = "#" + lowestQuestionId;

  if (!unansweredQuestions.length) {
    //scroll to answer

    location.href = "#answer";

    showAnswer();
  }
};

const showAnswer = () => {
  let result;
  answers.forEach((answer) => {
    if (
      chosenAnswers.includes(answer.combination[0]) +
      chosenAnswers.includes(answer.combination[1]) +
      chosenAnswers.includes(answer.combination[2])
    ) {
      result = answer;
    } else if (!result) {
      result = answers[0];
    }
  });

  const answerBlock = document.createElement("div");
  answerBlock.classList.add("result-block");

  const answerTitle = document.createElement("h3");
  answerTitle.textContent = result.text;

  const answerImage = document.createElement("img");
  answerImage.setAttribute("src", result.image);
  answerImage.setAttribute("alt", result.alt);

  answerBlock.append(answerTitle, answerImage);

  answerDisplay.append(answerBlock);

  const allAnswerBlocks = document.querySelector(".answer-block");

  Array.from(allAnswerBlocks).forEach((answerBlock) =>
    answerBlock.replaceWith(answerBlock.cloneNode(true))
  );
};

const disableQuestionBlock = (questionId, chosenAnswer) => {
  const currentQuestionBlock = document.getElementById(
    questionId + "-questions"
  );

  Array.from(currentQuestionBlock.children).forEach((block) => {
    if (block.children.item(1).innerText !== chosenAnswer) {
      block.style.opacity = "50%";
    }
  });
};
