import { viewTr } from '../Table/viewTr';
import { deleting } from '../Table/DeleteTr';
import { editHandler } from '../Table/EditTr';

export const renderRow = (item, isloading) => {
  const tBody = document.querySelector('#tBody');
  tBody.innerHTML = '';
  if (isloading) {
    item.map((i) => {
      const row = document.createElement('tr');
      row.classList.add('border-b');
      row.setAttribute('id', `${i.id}`);
      const taskCell = document.createElement('td');
      taskCell.innerHTML = i.task;
      taskCell.classList.add('py-5', 'px-3', 'border-r');
      row.appendChild(taskCell);
      const priorityCell = document.createElement('td');
      priorityCell.classList.add('text-center', 'border-r');
      priorityCell.textContent = i.priority;
      row.appendChild(priorityCell);
      const statusCell = document.createElement('td');
      statusCell.classList.add('text-center', 'border-r');
      statusCell.textContent = i.status;
      row.appendChild(statusCell);
      const dateCell = document.createElement('td');
      dateCell.classList.add('text-center', 'border-r');
      dateCell.textContent = i.date;
      row.appendChild(dateCell);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add(
        'bg-red-500',
        'w-10',
        'p-1',
        'px-2',
        'rounded',
        'h-8'
      );

      const deleteIcon = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      );
      deleteIcon.setAttribute('viewBox', '0 0 24 24');
      deleteIcon.setAttribute('fill', '#ffffff');
      deleteIcon.innerHTML =
        '<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z" fill="#ffffff"></path><path d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z" fill="#ffffff"></path></g>';

      deleteButton.appendChild(deleteIcon);
      deleteButton.setAttribute('id', `${i.id}`);
      deleteButton.addEventListener('click', () => {
        deleting(i.id);
      });

      const changeCell = document.createElement('td');
      changeCell.classList.add('py-3', 'border-r');

      const changeCellDiv = document.createElement('div');
      changeCellDiv.classList.add(
        'flex',
        'items-center',
        'justify-center',
        'gap-2',
        'h-full'
      );
      changeCellDiv.appendChild(deleteButton);
      row.appendChild(changeCell);

      const editButton = document.createElement('button');
      editButton.classList.add(
        'bg-blue-500',
        'w-10',
        'p-1',
        'px-2',
        'rounded',
        'h-8',
        'relative'
      );

      const editIcon = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      );
      editIcon.setAttribute('viewBox', '-89.31 -89.31 625.16 625.16');
      editIcon.setAttribute('fill', '#ffffff');
      editIcon.innerHTML =
        '<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M282.488,68.589L351.077,0l95.458,95.458l-68.589,68.589L282.488,68.589z"></path> <polygon points="0.001,446.536 117.523,412.737 33.8,329.014 "></polygon> <path d="M144.604,397.393l-95.458-95.458l212.13-212.13l95.458,95.458L144.604,397.393z"></path> </g> </g>';
      editButton.appendChild(editIcon);
      editButton.setAttribute('id', `${i.id}`);
      editButton.addEventListener('click', () => {
        editHandler(i.id);
      });
      const viewButton = document.createElement('button');
      const viewIcon = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      );
      viewIcon.setAttribute('viewBox', '0 0 24 24');
      viewIcon.innerHTML =
        '<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12c0-2.25 3.75-7.5 10.5-7.5S22.5 9.75 22.5 12s-3.75 7.5-10.5 7.5S1.5 14.25 1.5 12zM12 16.75a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zM14.7 12a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z" fill="#ffffff"></path></g>';
      viewButton.appendChild(viewIcon);
      viewButton.classList.add(
        'bg-neutral-500',
        'w-10',
        'p-1',
        'px-2',
        'rounded',
        'h-8',
        'relative'
      );
      viewButton.addEventListener('click', () => {
        viewTr(i);
      });
      changeCellDiv.appendChild(editButton);
      changeCellDiv.appendChild(viewButton);

      changeCell.appendChild(changeCellDiv);

      tBody.appendChild(row);
    });
  } else {
    tBody.innerHTML = `<div class='w-full h-[50%] grid place-items-center grid-cols-1 absolute'> <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
</button> </div>`;
  }
};
