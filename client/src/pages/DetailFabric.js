import React, { useEffect, useState } from 'react';

import FABRICS from '../_mock/fabrics';
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Label from '../components/label';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const DetailFabric = (props) => {
  const product = FABRICS[1];
  console.log(product);

  const { id, name, cover, price, colors, status, priceSale } = product;

  return (
    <Card>
      <Box sx={{ pt: '50%', position: 'relative' }}>
        {status && (
          <Label
            variant='filled'
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link href={`fabric`} color='inherit' underline='hover'>
          <Typography variant='subtitle2' noWrap>
            {name}
          </Typography>
        </Link>

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography variant='subtitle1'>
            <Typography
              component='span'
              variant='body1'
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale}
            </Typography>
            &nbsp;
            {price}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default DetailFabric;
