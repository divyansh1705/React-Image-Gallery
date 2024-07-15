import React, { useState, useEffect } from 'react';
import CustomRoutes from "./routes/CustomRoutes"



const URL = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20';

function App() {
  return (
    <div>
      
      <CustomRoutes/>
    </div>
  )
}

export default App;
