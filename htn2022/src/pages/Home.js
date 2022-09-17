import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Home() {
    return (
        <div className="Webpage">
    <header className="Title">CookMaster</header>
    <div>
      <form onSubmit>
        <div className="Search-bar">
            <label className="Search-bar-label">What are you craving today?</label>  
            <div className="Search-bar-margin">
              <TextField fullWidth id="outlined-basic" label="What's rumbly in your tumbly?" variant="outlined" />
            </div>
        </div>
        <Button type="submit" variant="contained" id="submit-button">SATISFY YOUR CRAVINGS</Button>
      </form>
    </div>
  </div>
    );
}