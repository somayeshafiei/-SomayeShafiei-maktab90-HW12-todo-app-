import { postingData, gettingData, editData, getItemData } from './Api';
import { renderRow } from './renderTable';
import { createPaginate } from '../pagination';

let isEditing = false;
let ID;
export const handleSubmitForm = (e) => {
  const form = document.querySelector('.form');

  const targetId = e.target.id;
  console.log(targetId);
  document.querySelector('#cancelBtn').addEventListener('click', () => {
    document.querySelector('#modal-overlay').classList.add('hidden');
  });
  e.preventDefault();
  const [inputTask, inputPriority, inputStatus, inputDate, inputDetail] =
    e.target.elements;
  if (
    inputTask.value === '' ||
    inputPriority.value === '' ||
    inputStatus.value === ''
  )
    return;
  else {
    document.querySelector('#modal-overlay').classList.add('hidden');

    if (isEditing == false) {
      const data = {
        id: crypto.randomUUID(),
        task: inputTask.value,
        priority: inputPriority.options[inputPriority.selectedIndex].text,
        status: inputStatus.options[inputStatus.selectedIndex].text,
        date: inputDate.value,
        detail: inputDetail.value,
      };
      gettingData().then((response) => {
        renderRow('', false);

        renderRow(response, true);
      });
      postingData(data);

      gettingData()
        .then((response) => {
          return response;
        })
        .then((response) => {
          createPaginate();
          renderRow('', false);

          console.log(response);
          renderRow(response, true);
          form.reset();
        });
    } else if (isEditing == true) {
      const test = {
        id: ID,
        task: inputTask.value,
        priority: inputPriority.options[inputPriority.selectedIndex].text,
        status: inputStatus.options[inputStatus.selectedIndex].text,
        date: inputDate.value,
        detail: inputDetail.value,
      };
      editData(test, test.id).then(() => {
        renderRow('', false);
        createPaginate();

        gettingData().then((response) => {
          renderRow(response, true);
          form.reset();
        });
      });

      isEditing = false;
    }
  }
};

export function changeForm(item) {
  const form = document.querySelector('.form');
  const [inputTask, inputPriority, inputStatus, inputDate, inputDetail] =
    form.elements;
  document.querySelector('#modal-overlay').classList.remove('hidden');
  ID = item.id;
  inputTask.value = item.task;
  inputPriority.options[inputPriority.selectedIndex].text = item.priority;
  inputStatus.options[inputStatus.selectedIndex].text = item.status;
  inputDate.value = item.date;
  inputDetail.value = item.detail;
  isEditing = true;
}
