const handleFormSubmit = async (event, endpoint, redirectUrl) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
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
  
  const loginFormHandler = (event) => {
    handleFormSubmit(event, '/api/users/login', '/profile');
  };
  
  const signupFormHandler = (event) => {
    handleFormSubmit(event, '/api/users', '/profile');
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  