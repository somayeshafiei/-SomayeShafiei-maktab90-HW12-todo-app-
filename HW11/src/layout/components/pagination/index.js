import { tCount, gettingData2, gettingData } from '../Form/Api';
import { renderRow } from '../Form/renderTable';

export function createPaginate() {
  const currentPage = document.querySelector('#page');
  console.log(currentPage);
  const pageLink = `tasks?_page=${currentPage.innerText}&_limit=5`;
  const db = gettingData2('http://localhost:3002', pageLink);
  db.then((response) => {
    console.log(response);
    renderRow(response, true);
  });
}
export const previousPage = () => {
  const page = document.querySelector('#page');
  let previous = +page.innerText;
  page.innerText = --previous < 1 ? 1 : previous;
  createPaginate();
};
export const nextPage = () => {
  const page = document.querySelector('#page');
  let next = +page.innerText;
  const tPage = Math.ceil(tCount / 5);
  page.innerText = ++next > tPage ? tPage : next;
  createPaginate();
 
};
