import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

export default function Contract(){

    const [nation, setNation] = useState('');
    const [mail, setMail] = useState();
    const [mailError, setMailError] = useState('');

    const handleChange = (event) => {
      setNation(event.target.value);
    };
    
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const handleOnChange = (event)=>{
        switch (event.target.id){
            case 'email':
                if (validateEmail(event.target.value)){
                    setMailError('');
                    setMail(event.target.value);
                } else setMailError("Bạn phải nhập 1 Email!")
                break;
        }
    }
    return (
        <Container
            sx={{
                background:'gainsboro',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <h3>Contact us</h3>
            <form 
            // onSubmit={handleSubmit}
            style={{
                minWidth: '500px',
                margin: '100px'
            }}
            >
                <TextField 
                fullWidth
                sx={{
                    margin: '10px',
                    display:'block',
                    color:'white'
                    
                }}
                id="name" label="Your Name" variant="standard" />

                <TextField 
                fullWidth
                sx={{
                    margin: '10px',
                    display:'block'
                }}
                id="phone" label="Your Phone" variant="standard" />

                <TextField 
                fullWidth
                sx={{
                    margin: '10px',
                    display:'block'
                }}
                onChange = {handleOnChange}
                error={mailError !== ''?true:false}
                helperText={`${mailError != null ? mailError : ''}`}
                id="email" label="Email" variant="standard" />

            <FormControl 
                variant="standard"
                fullWidth
                sx={{margin: '10px', display:"block"}}>
                <InputLabel id="demo-simple-select-label">Your favorite nation (film nation)</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={nation}  
                    label="nation"
                    fullWidth
                    onChange={handleChange}
                >
                    <MenuItem value={0} 
                    sx={{
                        display:"block"
                    }}>Vietnam</MenuItem>
                    <MenuItem value={1}>England</MenuItem>
                    <MenuItem value={2}>Japan</MenuItem>
                    <MenuItem value={3}>Chinese</MenuItem>
                    <MenuItem value={4}>America</MenuItem>
                    <MenuItem value={5}>Korea</MenuItem>
                    <MenuItem value={6}>Thailand</MenuItem>
                </Select>
                </FormControl>
                <TextField 
                fullWidth
                sx={{
                    margin: '10px',
                    display:'block'
                }}
                onChange = {handleOnChange}
                id="content" label="Content" variant="standard" />
                <Button variant="contained"
                fullWidth   
                onClick={()=>{
                    alert("Thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.")
                }}
                sx={{
                    margin: '10px',
                    display:'block'
                }}
                >Submit</Button>
            </form>
        </Container>
    )
}