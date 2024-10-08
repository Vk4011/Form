export const submitFormData = async (formData: any) => {
  try {
    const response = await fetch('http://192.168.30.79:8080/api/submit-form', { // Use your local IP address
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Something went wrong');
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error in submitFormData:', error);
    throw error;
  }
};
