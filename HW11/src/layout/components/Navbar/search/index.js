import { renderRow } from '../../Form/renderTable';
import { createPaginate } from '../../pagination';
export async function searchHandler() {
  console.log('test');
  const searchValue = document.querySelector('#searchInput').value;
  const responseSearch = await fetch(
    `http://localhost:3002/tasks?q=${searchValue}`
  )
    .then((data) => data.json())
    .then((data) => {
      renderRow(data, true);
    });
}
