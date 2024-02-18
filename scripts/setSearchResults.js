import { cardsElement } from "./elements";

export const setSearchResult = (data) => {
  let result = "";

  if (data === null) {
    return result;
  } else if (data.length === 0) {
    result = `<p>No result found.</p>`;
  } else {
    data.map((item) => {
      result += `
            <article calss="card">
                <a href=${item.html_url} target="_blank">
                  <img class="img" loading="lazy" src=${item.avatar_url} />
                </a>
                <h2 class="name">${item.login}</h2>
            </article>`;
    });
  }

  cardsElement.innerHTML = result;
};
