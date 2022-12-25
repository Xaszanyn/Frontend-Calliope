export async function get(url) {
  let result;

  await fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((response) => (result = response.data));

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
