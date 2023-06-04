/* eslint-disable no-lone-blocks */
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export const PerfilDonatario = ({ onClick }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccount = () => {
    navigate('/dados-conta');
  };

  const handleAddDonation = () => {
    navigate('/adicionar-necessidades');
  };
  return (
    <div>
      <IconButton
        onClick={handleClick}
        color='sucess'
        size='large'
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}>
        <AccountCircleIcon sx={{ width: 50, height: 50 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={handleAccount}>
          <Avatar fontSize='small' /> Minha Conta
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleAddDonation}>
          <ListItemIcon>
            <HandshakeIcon fontSize='small' />
          </ListItemIcon>
          Inserir Necessidades
        </MenuItem>
        <Divider />
        <MenuItem onClick={onClick}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          sair
        </MenuItem>
      </Menu>
    </div>
  );
};
