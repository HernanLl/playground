import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleComponent from './components/SampleComponent';
import CustomSelect from './components/CustomSelect';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center" marginY="32px">
        <Box width="300px">
          <CustomSelect
            placeholder="placeholder"
            value="hi"
            items={[
              {id: '1', label: 'opcion 1'},
              {id: '2', label: 'opcion 2'},
            ]}
            onClick={() => {}}
          />
        </Box>
      </Box>
    </div>
  );
}

export default App;
