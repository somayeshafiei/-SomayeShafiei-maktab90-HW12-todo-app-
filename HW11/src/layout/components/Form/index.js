import El from '@/library/El';
import { FormMaker } from './FormMaker';
export const Form = () => {
  return El({
    element: 'section',
    className:
      'w-[100%] h-[100%] absolute top-0 left-0 bg-neutral-100 flex justify-center items-center bg-opacity-50 bg-blur z-20 hidden',
    id: 'modal-overlay',
    onclick: (e) => {
      if (e.target.tagName === 'SECTION') {
        e.target.classList.add('hidden');
      }
    },
    child: El({
      element: 'div',
      className:
        'w-[100%] max-w-[650px] bg-white   mx-auto rounded border  z-10 ',
      id: 'modalBody',
      child: [
        El({
          element: 'h2',
          className: 'font-semibold border-b p-2',
          child: 'New Task',
        }),
        FormMaker({
          element: 'form',
          className: 'p-2 form',

          child: [
            El({
              element: 'input',
              type: 'text',
              id: 'taskName',
              placeholder: 'Task Name',
              className:
                'w-full bg-transparent border outline-0 p-2 px-2 rounded',
            }),
            El({
              element: 'div',
              className: 'pt-16 flex w-full justify-between gap-3 pb-10 ',
              child: [
                El({
                  element: 'select',
                  className: 'p-2   w-full border rounded outline-0',
                  id: 'priorityName',

                  child: [
                    El({
                      element: 'option',
                      className: '',
                      child: 'Priority',
                      value: '1',
                      disabled: true,
                    }),
                    El({
                      element: 'option',
                      className: '',
                      child: 'Low',
                      value: '2',
                    }),
                    El({
                      element: 'option',
                      className: '',
                      child: 'Medium',
                      value: '3',
                    }),
                    El({
                      element: 'option',
                      className: '',
                      child: 'High',
                      value: '4',
                    }),
                  ],
                }),
                El({
                  element: 'select',
                  className: 'p-2  w-full outline-0 border rounded',
                  child: [
                    El({
                      element: 'option',
                      className: '',
                      child: 'Status',
                      value: '1',
                      disabled: true,
                    }),
                    El({
                      element: 'option',
                      className: '',
                      child: 'Todo',
                      value: '2',
                    }),
                    El({
                      element: 'option',
                      className: '',
                      child: 'Doing',
                      value: '3',
                    }),
                    El({
                      element: 'option',
                      className: '',
                      child: 'Done',
                      value: '4',
                    }),
                  ],
                }),
                El({
                  element: 'input',
                  type: 'date',
                  className: 'border w-full p-1 outline-0',
                }),
              ],
            }),
            El({
              element: 'textarea',

              className: 'w-full outline-0 border rounded  h-32 p-2 ',
              placeholder: 'Details (optional)',
            }),
            El({
              element: 'div',
              className: 'w-full flex mt-5 pt-5 border-t justify-between',
              child: [
                El({
                  element: 'button',
                  className:
                    'text-sm text-blue-700 p-2 px-3 border border-1 border-blue-700 rounded ',
                  child: 'CANCEL',
                  id: 'cancelBtn',
                }),
                El({
                  element: 'button',
                  className:
                    'text-sm bg-blue-700 p-2 px-3 border border-1 border-blue-700 rounded text-white ',
                  child: 'SAVE',
                  type: 'submit',
                  id: 'saveBtn',
                }),
              ],
            }),
          ],
          // handleSubmit(data) {

          //    const users = JSON.parse(localStorage.getItem('users'));
          //    if (users){
          //      renderTable()
          //    }
          // },
        }),
      ],
    }),
  });
};
// ..........
