import Card from '@mui/material/Card';
import { CardContainer, FlowContent, FlowImg, FlowOder, FlowTitle } from '../style/card';
import { PostDay } from '../style/post';


export const CardComponent = ({todo, i}) => {
  return (
    <Card>
    <CardContainer>
      <FlowOder>
      <PostDay>{i+1}</PostDay>
      <FlowTitle>{todo.title}</FlowTitle>
      </FlowOder>
   
      <FlowImg src={todo.img} alt='flowimage' />
    <FlowContent>{todo.content}</FlowContent>
    </CardContainer>
  </Card>
  )
}
