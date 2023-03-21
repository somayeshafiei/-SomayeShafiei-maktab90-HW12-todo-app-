import { deleteData, gettingData } from '../../Form/Api';
import { renderRow } from '../../Form/renderTable';
import { createPaginate } from '../../pagination';
export function deleting(i) {
  let arr = gettingData();
  const targetId = i;
  deleteData(targetId);
  arr = arr.then((response) => {
    return response.filter((item) => item.id !== targetId);
  });
  arr.then((response) => {
    createPaginate();
    renderRow(response);
  });
}
