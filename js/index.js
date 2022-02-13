'use strict';

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', e => {
  e.preventDefault(); // отменяет стд поведение для обработки события
  const formEl = e.currentTarget.parentElement;
  console.log('form el-s fn:>> ', formEl.elements['first-name'].value);
  console.log('form el-s psw:>> ', formEl.elements.password.value);
  console.log('form el-s rb:>> ', formEl.elements.gender.value);
  console.log('form el-s chb:>> ', formEl.elements.prefs);
});
