import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Divider, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import blogBg from '../../../../images/post.png';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

export default function Post({ blog }) {
    console.log(blog)
    const { img, description, like, comment, share } = blog;
    const useStyles = makeStyles({
        blogContainer: {
            background: `url(${blogBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px !important'
        }
    });
    const { blogContainer } = useStyles();

    return (
        <Grid item xs={12} sm={12} md={6}>
            <Card
                className={blogContainer}>
                <CardMedia
                    sx={{ width: 'auto', m: 2 }}
                    component="img"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h4" sx={{ color: '#fff', fontWeight: 500, pt: 3, fontFamily: 'inherit', lineHeight: 1.2 }}>
                        A Guide To <br /> Rocky <br />Mountain
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#fff', pt: 2, fontSize: 15, fontFamily: 'inherit', lineHeight: 1.5 }}>
                        {description}
                    </Typography>
                </CardContent>
                <Divider sx={{ background: '#9e9e9e', mt: 3 }} />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Typography variant="body2" sx={{ color: '#e0e0e0', mr: 3 }}>{like}</Typography>
                    <IconButton aria-label="comment">
                        <InsertCommentIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Typography variant="body2" sx={{ color: '#e0e0e0', mr: 3 }}>{comment}</Typography>
                    <IconButton aria-label="share">
                        <ShareIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Typography variant="body2" sx={{ color: '#e0e0e0', mr: 3 }}>{share}</Typography>
                </CardActions>
            </Card>
        </Grid>
    );
}