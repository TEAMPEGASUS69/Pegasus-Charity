import React, { useState } from 'react';
import axios from 'axios';


const Pan = () => {
  const [campaignData, setCampaignData] = useState({
    campaignName: '',
  });

  const handleChange = (e) => {
    setCampaignData({
      ...campaignData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'http://localhost:3001/api/your-endpoint' with your actual API endpoint
      const response = await axios.post('http://localhost:3001/api/pancard', campaignData);
      console.log(response.data.data.campaignName)
      var requiredpan =response.data.data.campaignName;
       
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Pan card
        <input type="text" name="campaignName" value={campaignData.campaignName} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Pan;
