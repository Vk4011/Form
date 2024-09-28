export const submitFormData = async (formData) => {
    try {
      const response = await fetch('https://form-jd30.onrender.com/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
  
      return data; // Return the data if the request is successful
    } catch (error) {
      throw error; // Throw error to be handled by the calling function
    }
  };
  