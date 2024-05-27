import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

interface projectCardProps{
  projectTitle:string,
  projectImage:string
  projectImageAlt:string
  projectDescription: string
  github:string
  page:string

}
export default function ProjectCard(props:projectCardProps){
  return(
    <Link to = {props.page}>
    <Card sx = {{width:"21.5625rem", height: "22rem", background:"lightgray"}} className = "hover:shadow-2xl">
      <CardMedia
        component="img"
        alt = {props.projectImageAlt}
        height = "140"
        image = {props.projectImage}
        className="object-fit"
        />
      <CardContent>
        <h1 className = "font-bold font-xl">{props.projectTitle}</h1>
        <h2 className="font-semibold font-lg">{props.projectDescription}</h2>
      </CardContent>
      <CardActions>
        <Link to = {props.page}>
        <Button size = "small"> Learn More</Button>
        </Link>
      </CardActions>

    </Card>
    </Link>
  )
}