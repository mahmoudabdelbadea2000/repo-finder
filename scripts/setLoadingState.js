import { loaderElement } from "./elements";
import { setSearchResult } from "./setSearchResults";

export const setLoadingState = (active) => {
  loaderElement.classList.toggle("hidden", !active);
  active && setSearchResult(null);
};
