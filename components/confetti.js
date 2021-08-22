import Confetti from 'react-confetti'
import  useWindowSize from '@charlietango/use-window-size'

export default function ConfettiComp() {
  const { width, height } = useWindowSize()
  console.log(width, height)
    return(
             <Confetti width={width} height={height}/>
    )
}