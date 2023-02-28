const handleFormSubmit = async (event, endpoint, redirectUrl) => {
  event.preventDefault();

const usernameInput = document.querySelector('#username-signup').value.trim();
const passwordInput = document.querySelector('#password-signup').value.trim();

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
      username: usernameInput,
      password: passwordInput,
      }),
      headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
      document.location.replace(redirectUrl);
    } else {
      const error = await response.text();
      throw new Error(error);
    }
  } catch (error) {
    console.error(error);
    alert('Failed to submit form');
  }
};

const signupFormHandler = (event) => {
  handleFormSubmit(event, '/api/users/signup', '/profile');
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
