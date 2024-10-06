function createInput(labelFor, labelText, inpType, placeholder){
  const divContainer = document.createElement('div');
  
  const label = document.createElement('label');
  label.setAttribute('for', labelFor);
  label.textContent = labelText;
  divContainer.appendChild(label);

  const input = document.createElement('input');
  input.type = inpType;
  input.placeholder = placeholder;
  divContainer.appendChild(input);

  return divContainer;
}

function createDetailsContainer(classContainer){
  const div = document.createElement('div');
  div.classList.add(`${classContainer}`);

  return div;
}

export default function createContactUsContainer(){
  const contactUsContainer = document.createElement('div');
  contactUsContainer.classList.add('contact-us-container', 'box-shadow');
  
  const contactUsHeader = document.createElement('div');
  contactUsHeader.classList.add('contact-us-header');
  const h2 = document.createElement('h2');
  h2.textContent = "Get in Touch";
  const headerP = document.createElement('p');
  headerP.textContent = `Our team will reach out to you as soon as we can. 🙂`;
  contactUsHeader.appendChild(h2);
  contactUsHeader.appendChild(headerP);
  contactUsContainer.appendChild(contactUsHeader);

  const form = document.createElement('form');

  const nameInputContainer = createDetailsContainer('name-input-container');
  const firstName = createInput('firstName', 'First Name', 'text', 'Please enter first name...');
  const lastName = createInput('lastName', 'Last Name', 'text', 'Please enter last name...');
  nameInputContainer.appendChild(firstName);
  nameInputContainer.appendChild(lastName);
  form.appendChild(nameInputContainer);

  const otherInfoContainer = createDetailsContainer('other-info-container');
  const email = createInput('email', 'Email', 'email', 'Please enter email address...');
  const phoneNumber = createInput('phoneNumber', 'Phone Number', 'text', 'Please enter phone number...');
  otherInfoContainer.appendChild(email);
  otherInfoContainer.appendChild(phoneNumber);
  form.appendChild(otherInfoContainer);

  const feedbackContainer = createDetailsContainer('feedback-container');
  const feedbackLabel = document.createElement('label');
  feedbackLabel.for = "feedback";
  feedbackLabel.textContent = "What do you have in mind";
  const feedback = document.createElement('textarea');
  feedback.placeholder = "Please enter inquiry, concern, or suggestions...";
  feedbackContainer.appendChild(feedbackLabel);
  feedbackContainer.appendChild(feedback);
  form.appendChild(feedbackContainer);

  const btn = document.createElement('input');
  btn.type = "submit";
  btn.value = 'Submit';
  form.appendChild(btn);

  contactUsContainer.appendChild(form);

  return contactUsContainer;
}