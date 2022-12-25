export async function get(url) {
  let result;

  await fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((response) => (result = response));

  console.log(result);
  return result;
}

export async function post(url, data) {
  let result;

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      result = response;
    });

  return result;
}

export async function del(url) {
  let result;

  await fetch(url, { method: "DELETE" }).then((response) => {
    result = response.ok;
  });

  return result;
}

export async function put(url, data) {
  let result;

  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      result = response;
    });

  return result;
}

export async function getLessons() {
  let result;
  await fetch("http://127.0.0.1:8000/lesson/lesson/", { method: "GET" })
    .then((response) => response.json())
    .then((response) => (result = response.lessons));

  return result;
}

export async function getContents() {
  let result;
  await fetch("http://127.0.0.1:8000/lesson/content/", { method: "GET" })
    .then((response) => response.json())
    .then((response) => (result = response.contents));

  return result;
}

export async function getCategories() {
  let result;
  await fetch("http://127.0.0.1:8000/lesson/category/", { method: "GET" })
    .then((response) => response.json())
    .then((response) => (result = response.categories));

  return result;
}

export async function getQuizzes() {
  let result;
  await fetch("http://127.0.0.1:8000/quiz/", { method: "GET" })
    .then((response) => response.json())
    .then((response) => (result = response));

  return result;
}

export async function getQuestions(quizName) {
  let result;
  await fetch(`http://127.0.0.1:8000/quiz/q/${quizName}/`, { method: "GET" })
    .then((response) => response.json())
    .then((response) => (result = response));

  return result;
}
