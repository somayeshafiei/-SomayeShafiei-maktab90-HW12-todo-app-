import { editData, gettingData, getItemData } from '../../Form/Api';

import { changeForm } from '../../Form/handlleSubmitForm';
export function editHandler(i) {
  const targetID = i;
  const DataBase = getItemData(targetID).then((response) => {
    changeForm(response);
  });
}
