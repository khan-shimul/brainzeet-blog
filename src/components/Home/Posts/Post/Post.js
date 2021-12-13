import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import blogBg from '../../../../images/post.png';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

export default function Post({ blog }) {
    console.log(blog)
    const { title, img, description, like, comment, share } = blog;
    const useStyles = makeStyles({
        blogContainer: {
            background: `url(${blogBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    });
    const { blogContainer } = useStyles();

    return (
        <Grid item xs={12} sm={12} md={4}>
            <Card
                className={blogContainer}>
                <CardMedia
                    sx={{ width: 'auto', m: 2 }}
                    component="img"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h4" sx={{ color: '#fff', fontWeight: 500, pt: 3 }}>
                        A Guide To <br /> Rocky <br />Mountain
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#fff', pt: 2 }}>
                        These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on
                    </Typography>
                </CardContent>
                <Divider sx={{ background: '#9e9e9e' }} />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Typography variant="body2" sx={{ color: '#e0e0e0', mr: 3 }}>{like}</Typography>
                    <IconButton aria-label="comment">
                        <InsertCommentIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Typography variant="body2" sx={{ color: '#e0e0e0', mr: 3 }}>{like}</Typography>
                    <IconButton aria-label="share">
                        <ShareIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Typography variant="body2" sx={{ color: '#e0e0e0', mr: 3 }}>{like}</Typography>
                </CardActions>
            </Card>
        </Grid>
    );
}