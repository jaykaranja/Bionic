import { FaAngleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useHistoryStack from '../../../hooks/useHistoryStack.js'

const Navigator = () => {
  const navigate = useNavigate();
  const history = useHistoryStack()
  return (
    <div className='flex'>
        <div className={`p-2 bg-secondary/50 transition text-light rounded-full ${history.length > 0 ? "hover:cursor-pointer hover:bg-secondary" : "hover:cursor-not-allowed"}`}>
            <FaAngleLeft 
              onClick={() => {
                history.length > 0 && navigate(-1)
              }}
            />
        </div>
    </div>
  )
}

export default Navigator