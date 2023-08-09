import { modal } from './modal.js';
import { validateForms } from './validate-forms.js';

const rules = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя',
      }
      ,
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Очень короткое имя',
      },
      {
        rule: 'customRegexp',
        value: /[а-яА-ЯЁё]/,
        errorMessage: 'Допускается только кириллица',
      },
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон',
      }
    ]
  },
];

const afterForm = () => {
  document.querySelector('.modal__success').classList.add('modal__success--show');

  setTimeout(() => {
    modal.close();
    document.querySelector('.modal__success').classList.remove('modal__success--show');
  }, 1700);
};

validateForms('.modal-form', rules, afterForm);
