import { getMessage } from "./getMessage";
import { setLoadingState } from "./setLoadingState";
import { setMessage } from "./setMessage";
import { setSearchResult } from "./setSearchResults";

const USER_API = "https://api.github.com/search/users?q=";

export const performSearch = (searchTerm, isUserSelect) => {
  getMessage() && setMessage("");
  const typeQuery = isUserSelect ? "+type:user" : "+type:org";

  if (!searchTerm.trim()) {
    setMessage("Please fill out the search field ☝️");
    return;
  }

  setLoadingState(true);

  fetch(`${USER_API}${searchTerm}${typeQuery}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response.items))
    .finally(() => setLoadingState(false));
};
