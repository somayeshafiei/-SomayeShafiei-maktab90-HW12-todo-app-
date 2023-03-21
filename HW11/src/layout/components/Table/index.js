import El from '@/library/El';

import { previousPage, nextPage } from '../pagination';

export const Table = () => {
  return El({
    element: 'div',
    child: [
      El({
        element: 'table',
        className: 'border-collapse border border-b-0 w-[100%] table-auto z-0',
        child: [
          El({
            element: 'thead',
            className: 'w-[100%]',
            child: El({
              element: 'tr',
              className: '',
              child: [
                El({
                  element: 'th',
                  className: 'border py-5',
                  child: 'Task Name',
                }),
                El({
                  element: 'th',
                  className: 'border ',
                  child: 'Priority',
                }),
                El({
                  element: 'th',
                  className: 'border',
                  child: 'status',
                }),
                El({
                  element: 'th',
                  className: 'border ',
                  child: 'Deadline',
                }),
                El({
                  element: 'th',
                  className: 'border',
                  child: 'Actions',
                }),
              ],
            }),
          }),

          El({
            element: 'tbody',
            className: 'w-[100%]',
            id: 'tBody',
            child: [
              El({
                element: 'div',
                className:
                  'w-full h-[50%] grid place-items-center grid-cols-1 absolute',
                child: [
                  El({
                    element: 'button',
                    className:
                      'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  inline-flex items-center',
                    type: 'button',
                    disable: true,
                    innerHTML: `<svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  Loading...`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: '  grid pt-5 ',
        child: El({
          element: 'div',
          className: 'flex justify-end pr-5 col-end-8 col-span-2  ',
          child: [
            El({
              element: 'div',
              className: '',
              child: El({
                element: 'nav',
                child: El({
                  element: 'ul',
                  className: 'inline-flex items-center -space-x-px',
                  child: [
                    El({
                      element: 'li',
                      onclick: previousPage,
                      child: El({
                        element: 'a',
                        className:
                          'block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ',
                        innerHTML: `<svg  aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`,
                      }),
                    }),
                    El({
                      element: 'span',
                      id: 'page',
                      className: 'px-2',
                      innerText: 1,
                    }),
                    El({
                      element: 'li',
                      onclick: nextPage,
                      child: El({
                        element: 'a',
                        className:
                          'block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ',
                        innerHTML: `<svg   aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    ],
  });
};
