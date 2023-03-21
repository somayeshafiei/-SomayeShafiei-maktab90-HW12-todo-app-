export function openModal() {
  const modalBody = document.querySelector('#modalBody');
  console.log(modalBody);
  modalBody.classList.add('block');
}
export function closeModal() {
  const closing = document.querySelector('#modal-overlay');
  closing.classList.remove('hidden');
}
