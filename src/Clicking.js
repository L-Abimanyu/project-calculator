import { useState } from 'react';
import { Menu,MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Calculator from './Calculator';



export default

function Buffer(){
    const [anchorEl, setAnchorEl] = useState(0);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(+1);
    };

    return(
        <div>
         <Button
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}

            
            
            >
            +
            </Button>
                <Menu
                id="demo-customized-menu"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                <Calculator/>
                    
                    </MenuItem>
                        </Menu>
                        
                         </div>
    )
       
    
}
