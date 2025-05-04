import React, { useState } from 'react';

const ForgetPasswordForm = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple client-side validation
    if (!email) {
      setError('Please enter a valid email');
      return;
    }

    // Simulating an API call to reset password
    try {
      // For demonstration, simulate an API call (replace this with actual API code)
      console.log(`Resetting password for ${userType} with email: ${email}`);
      
      // Simulate a successful password reset
      setError('');
      setSuccessMessage('A password reset link has been sent to your email.');
      
      // Here you would make an actual API call, like:
      // const response = await fetch('/api/reset-password', { method: 'POST', body: JSON.stringify({ email }) });

    } catch (err) {
      setError('Error communicating with the server.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Forget Password</h2>
      <p>{`Please enter your email to reset your password for ${userType}`}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {/* Display error or success message */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
