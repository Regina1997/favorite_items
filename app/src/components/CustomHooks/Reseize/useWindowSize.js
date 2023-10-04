import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLimit } from '../../../Pages/pagesSlice';

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
  })
  const [screen, setScreen] = useState('desktop')
  const dispatch = useDispatch();

  useEffect(() => {
    function onResize() {
      setSize({
        width: window.innerWidth,
      })
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (size.width > 768 && size.width < 1024) {
      if (screen !== 'tablet') {
        setScreen('tablet')
      }
    } else if (size.width < 769 && size.width > 374) {
      if (screen !== 'mobile_m') {
        setScreen('mobile_m')
      }
    } else if (size.width < 375) {
      if (screen !== 'mobile_s') {
        setScreen('mobile_s')
      }
    } else {
      if (screen !== 'desktop') {
        setScreen('desktop')
      }
    }
  }, [size.width])

  useEffect(() => {
    switch (screen) {
      case 'mobile_m':
        dispatch(setLimit({
          limit: 3
        }))
        break;
      case 'mobile_s':
        dispatch(setLimit({
          limit: 1
        }))
        break;
      case 'tablet':
        dispatch(setLimit({
          limit: 6
        }))
        break;
      default:
        dispatch(setLimit({
          limit: 9
        }))
        break;
    }
  }, [screen])

  return screen
}