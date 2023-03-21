import { Form } from '../../Form';
export function viewTr(i) {
  Form();
  document.querySelector('#modal-overlay').classList.remove('hidden');
  document.querySelector('#saveBtn').classList.add('cursor-not-allowed');
  document.querySelector('#saveBtn').setAttribute('disabled', '');
  document.querySelector('#cancelBtn').addEventListener('click', () => {
    document.querySelector('#modal-overlay').classList.add('hidden');
  });

  const form = document.querySelector('.form');
  form.addEventListener('submit', () => {
    return false;
  });
  const [inputTask, inputPriority, inputStatus, inputDate, inputDetail] =
    form.elements;
  inputTask.setAttribute('disabled', '');
  inputPriority.setAttribute('disabled', '');
  inputStatus.setAttribute('disabled', '');
  inputDate.setAttribute('disabled', '');
  inputDetail.setAttribute('disabled', '');
  inputTask.value = i.task;
  inputPriority.options[inputPriority.selectedIndex].text = i.priority;
  inputStatus.options[inputStatus.selectedIndex].text = i.status;
  inputDate.value = i.date;
  inputDetail.value = i.detail;
}
