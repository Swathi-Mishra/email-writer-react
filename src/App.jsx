import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import './App.css'
import { useState } from 'react';
import axios from 'axios';


function App() {
const[emailContent, setEmailContent] = useState('');
const[tone, setTone] = useState('');
const[generatedReply, setGeneratedReply] = useState('');
const[loading, setLoading] = useState('');
const[error, setError] = useState('');

const handleSumbit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/email/generate`,{
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
};
  return (
    <Container maxWidth="md" sx={{py:4}}>
      <Typography variant="h3" component="h1" gutterBottom>
      Email Reply Generator
      </Typography>
      <Box sx={{mx: 3}}>
        <TextField 
        fullWidth
        multiline
        rows={6}
        variant='outlined'
        label="Original Email Content"
        value={emailContent || ''}
        onChange={(e) => setEmailContent(e.target.value)}
        sx={{mb: 2}}/>

        <FormControl fullWidth sx={{mb: 2}}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select 
            value={tone || ''} 
            label={"Tone Optional"}
            onChange={(e) => setTone(e.target.value)}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="formal">Formal</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
      
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSumbit}
          disabled={!emailContent || loading}
          fullWidth>
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>
      </Box>

      {error && (
        <Typography color="error" sx={{mt: 2}}>
          {error}
        </Typography>
      )}

      {generatedReply && (
        <Box sx={{mt: 3}}>
          <Typography variant="h6" gutterBottom>
            Generated Reply
          </Typography>
          
          <TextField  
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          value={generatedReply || ''}
          inputProps={{readOnly: true}}/>  

          <Button 
          variant='outlined'
          sx={{mt: 2}}
          onClick={() => navigator.clipboard.writeText(generatedReply)}>
          Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  )
}

export default App
