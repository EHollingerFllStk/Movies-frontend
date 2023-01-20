import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IconButton } from '@mui/material';


export default function MovieListItem(props) {
    const { title, year, type, imdbID, poster, action, } = props;

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 120, height: 200 }}
                image={poster}
                alt={title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {year}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1, justifyContent: "flex-end", pr: 1 }}>
                    <Tooltip title="Add to List">
                        <IconButton aria-label="bookmark">
                            <BookmarkBorderIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

        </Card>
    );
}
