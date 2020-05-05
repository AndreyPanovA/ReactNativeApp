import Config from "../constants/Config";

// let token = '';

export default async function request(data) {
  data.is_app = Config.is_app;
  // token && (data.token = token);
  let response = await fetch(Config.connection.url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
