import { btnElement, inputText, userInputElement } from "./elements";
import { performSearch } from "./performSearch";

btnElement?.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(inputText.value, userInputElement.checked);
});
