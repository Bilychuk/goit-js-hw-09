const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
const STORAGE_KEY = "feedback-form-state";
const savedFormData = localStorage.getItem(STORAGE_KEY);
    
if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData)
    emailInput.value = email || "";
    messageInput.value = message || "";
}
feedbackForm.addEventListener('input', setItemToLocalStorage);

function setItemToLocalStorage(event) {
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }))
};

feedbackForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (!emailInput.value || !messageInput.value) { 
        return;
    }
    localStorage.removeItem(STORAGE_KEY);
    
    const submittedData = {
        email: emailInput.value,
        message: messageInput.value
    };
    console.log(submittedData); 
    feedbackForm.reset();
}