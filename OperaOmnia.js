import { reactive, watch, html } from 'https://cdn.skypack.dev/@arrow-js/core';

const data = reactive({
  lists: [],
});

const listURLCore = `https://Opera-Omnia.triptych.repl.co/list?p=`;
const listURL = "https://Opera-Omnia.triptych.repl.co/lists";

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  document.querySelector('.apibutton').addEventListener('click', (e) => {
    console.log('click');
    fetchList(listURL);
  });

  document.querySelector('.apibutton-list').addEventListener('click', (e) => {
    console.log('click one list');
    let selListValue = document.querySelector('.apilistselect').value;
    fetchListView(`${listURLCore}/${selListValue}`);
  
  });
});

const fetchList = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      // get select list
      const selectList = document.querySelector('.apilistselect');
      // remove all options
      selectList.innerHTML = '';
      // append each element to the page as html
      data.data.forEach((list) => {
        selectList.innerHTML = `${selectList.innerHTML} <option value="${list}">${list}</option>`;
      });
      // data.data.forEach((monster) => {
      //   data.lists.push(monster);
      // });
      // data.lists.sort((a, b) => a.name.localeCompare(b.name));
      // data.lists.forEach((monster) => {
      //   console.log(monster);
      // });
    });

};

const fetchListView = (url) => {
  return fetch(url)
   .then((response) => response.json())
   .then((data) => {
      console.log(data);
      // append each element to the page as html
      // document.querySelector('#response').innerHTML = html(data);
     // get output div
      const output = document.querySelector('.listview');
     output.innerHTML = '';
     data.data.forEach((item) => {
       output.innerHTML = `${output.innerHTML} <div class="row">${item}</div>`;
     });
   
    });

};