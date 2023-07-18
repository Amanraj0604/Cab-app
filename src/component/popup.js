import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const Popup = () => {
    return (
        Swal.fire(
            'LOGIN Succes!',
            // 'You clicked the button!',
            // 'success'
            
            )
    )
}

export default Popup
