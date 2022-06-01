import axios from "axios";

export async function GnewsSearchWebDevelopment() {
  const response = await axios.get(
    `https://gnews.io/api/v4/search?q=Web Development&token=${process.env.REACT_APP_GNEWS_API_KEY}`
  );
  return response;
}

export async function GnewsSearchDataScience() {
  const response = await axios.get(
    `https://gnews.io/api/v4/search?q=Data Science&token=${process.env.REACT_APP_GNEWS_API_KEY}`
  );
  return response;
}

export async function GnewsSearchCyberSecurity() {
  const response = await axios.get(
    `https://gnews.io/api/v4/search?q=Cyber Security&token=${process.env.REACT_APP_GNEWS_API_KEY}`
  );
  return response;
}
