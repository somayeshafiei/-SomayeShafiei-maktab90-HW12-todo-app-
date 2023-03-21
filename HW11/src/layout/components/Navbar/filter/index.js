import El from '@/library/El';
import { gettingData } from '../../Form/Api';
import { renderRow } from '../../Form/renderTable';
import { createPaginate } from '../../pagination';
export const filtering = function () {
  return El({
    element: 'section',
    className:
      'w-[100%] h-[100%] absolute top-0 left-0 bg-neutral-100 flex justify-end  bg-opacity-50 bg-blur z-20 hidden',
    id: 'sideBar-overlay',
    onclick: (e) => {
      if (e.target.tagName === 'SECTION') {
        e.target.classList.add('hidden');
      }
    },
    child: El({
      element: 'div',
      className: 'h-full bg-white w-[350px] pt-2 px-2',
      child: [
        El({
          element: 'div',
          className: 'flex justify-between',
          child: [
            El({
              element: 'h2',
              className: 'font-bold text-xl',
              child: 'Filters',
            }),
            El({
              element: 'button',
              onclick: () => {
                document
                  .getElementById('sideBar-overlay')
                  .classList.add('hidden');
              },
              child: El({
                element: 'div',
                className: 'w-8',
                child: El({
                  element: 'svg',
                  innerHTML: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></g></svg>`,
                }),
              }),
            }),
          ],
        }),
        El({
          element: 'p',
          className: 'text-md font-semibold pt-10 pb-5',
          child: 'Priority:',
        }),
        El({
          element: 'select',
          className: 'p-2   w-full border rounded outline-0 ',
          child: [
            El({
              element: 'option',
              child: 'All',
            }),
            El({
              element: 'option',
              child: 'low',
            }),
            El({
              element: 'option',
              child: 'medium',
            }),
            El({
              element: 'option',
              child: 'high',
            }),
          ],
        }),
        El({
          element: 'p',
          className: 'text-md font-semibold pt-10 py-5',
          child: 'Status:',
        }),
        El({
          element: 'select',
          className: 'p-2   w-full border rounded outline-0 ',
          id: 'status',
          name: 'status',
          onchange: (e) => {
            statusFilter(e);
          },
          child: [
            El({
              element: 'option',
              child: 'All',
            }),
            El({
              element: 'option',
              child: 'Todo',
            }),
            El({
              element: 'option',
              child: 'Doing',
            }),
            El({
              element: 'option',
              child: 'Done',
            }),
          ],
        }),
        El({
          element: 'p',
          className: 'text-md font-semibold pt-10 py-5',
          child: 'DeadLine:',
        }),
        El({
          element: 'select',
          className: 'p-2   w-full border rounded outline-0 ',
          child: [
            El({
              element: 'option',
              child: 'All',
            }),
            El({
              element: 'option',
              child: 'low',
            }),
            El({
              element: 'option',
              child: 'medium',
            }),
            El({
              element: 'option',
              child: 'high',
            }),
          ],
        }),
      ],
    }),
  });
};
function statusFilter(e) {
  const statusVal = e.target.value;

  if (statusVal == 'All') {
    createPaginate();
    gettingData()
      .then((response) => {
        return response;
      })
      .then((response) => renderRow(response, true));
  }
  const priorityResponse = fetch(
    `http://localhost:3002/tasks?status=${statusVal}`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .then((response) => renderRow(response, true));

  // priorityVal == 'All' && gettingData().then((res) =>{
  //   createPaginate();
  //   renderRow());
}
