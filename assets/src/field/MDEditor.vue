<template>
    <div id="md-editor">
        <textarea :name="name" class="md-editor_row" v-model="input"></textarea>
        <div class="md-editor_result" v-html="compiledMarkdown"></div>
        <input type="hidden" v-html="compiledMarkdown" v-if="saveHTML">
    </div>
</template>

<script>
  import marked from 'marked'
  import _ from 'lodash'

  export default {
    name: 'MDEditor',
    props: {
      content: {
        typeL: String,
        required: true,
      },
      name: {
        typeL: String,
        required: true,
      },
      saveHTML: {
        typeL: Boolean,
        required: true,
      },
    },
    data: function () {
      return {
        input: this.content,
      }
    },
    computed: {

      compiledMarkdown: function () {
        return marked(this.input, { sanitize: true })
      },
    },
  }
</script>

<style lang="scss" scoped>
    #md-editor {
        margin: 0;
        height: 100%;
        color: #333;

        .md-editor_row, .md-editor_result {
            display: inline-block;
            width: 49%;
            min-height: 500px;
            height: 100%;
            vertical-align: top;
            box-sizing: border-box;
            padding: 0 20px;
        }

        .md-editor_row {
            border: none;
            border-right: 1px solid #ccc;
            resize: none;
            outline: none;
            background-color: #f6f6f6;
            font-size: 14px;
            font-family: 'Monaco', courier, monospace;
            padding: 20px;
        }

        code {
            color: #f66;
        }
    }
</style>
