const nunjucks = require('nunjucks');
// todo: how on Earth do I define correctly this path for both dev and prod? Ben, heeelp... !
// ps: this works but doesn't strike me as very robust
const fields = require('../../dist/nunjucks/look-and-feel/components/fields.njk');
const formElements = require('../../dist/nunjucks/formElements.njk');
import $ from 'jquery';

class AddReason {

  constructor() {

    this.counter = 0;
    this.formId = 'dynamic-form';
    this.textboxId = 'item.whatYouDisagreeWith';
    this.textareaId = 'item.reasonForAppealing';
    // you'll need a custom element to append the form to, this is just to play with it
    $('.grid-row').append(`
      <form id="${this.formId}" action="/reason-for-appealing/item-${this.counter}" method="post" class="form"></form>`);

    fields.getExported((err, components) => {
      const textbox = components.textbox;
      // todo: be a star and import the json tokens as well, instead of hardcoding the text. We may as well go the whole hog!
      const renderedTextbox = textbox({
        id: this.textboxId
      }, 'What you disagree with');
      $(`#${this.formId}`).append(renderedTextbox.val);

      formElements.getExported((err, comps) => {
        const textarea = comps.textarea;
        const renderedTextarea = textarea({
          id: this.textareaId
        }, 'Why you disagree with it', null, false, 'You can write as much as you want');
        $(`#${this.formId}`).append(renderedTextarea.val);
        $(`#${this.formId}`).append(`<input class="button" type="submit" id="${this.formId}-submit" value="Continue">`);
      });
    });
    this.addClickHandlers();
  }
  addClickHandlers() {
    $(`#${this.formId}`).on('submit', (event) => {
      event.preventDefault();
      $.ajax({
        url: `/reason-for-appealing/item-${this.counter}`,
        type: 'post',
        dataType: 'json',
        accepts: {
          onlyJson: 'application/json'
        },
        success: (data) => {
          // refresh the page so you get the updated list
        },
        error: (err) => {
          // display the errors on the ajax form!
        },
        data: $(`#${this.formId}`).serializeArray()
      });
    })
  }
  render() {
    // this method is pointless
    console.info('yo! render!');
  }
  static startAddReason() {
    return (window.location.pathname === '/reason-for-appealing');
  }
}

export default AddReason