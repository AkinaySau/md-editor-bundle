'use strict'
console.log('asdasd')

import Vue from 'vue'

import MDEditor from './src/field/MDEditor'

window.onload = function () {
  const editors = document.querySelectorAll('.md-editor-bundle')
  editors.forEach(function (item) {
    new Vue({
      el: '#' + item.id,
      data: function () {
        return {
          content: item.dataset.content,
          name: item.dataset.name,
          saveHTML: item.dataset.saveHTML,
        }
      },
      template: '<MDEditor ' +
        ':content="content"' +
        ':name="name"' +
        ':saveHTML="Boolean(saveHTML)"' +
        '/>',
      components: { MDEditor },
    })
  })

}
