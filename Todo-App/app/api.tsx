// api.tsx
export const submitFormData = async (formData: any) => {
  try {
    const response = await fetch('https://form-jd30.onrender.com/api/submit-form', {
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
