import { useState, useEffect } from "react"
import axios from "axios"
import { FaUserAlt } from "react-icons/fa"
import { Link } from "react-router"

const PatientsList = () => {
    const [patients, setPatients] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [ages, setAges] = useState({})

    const calculateAge = (birthdate) => {
    if (!birthdate) return "-"
    const today = new Date()
    const birthdateDate = new Date(birthdate)
    let age = today.getFullYear() - birthdate.getFullYear()
    const monthDiff = today.getMonth() - birthdateDate.getMonth()
    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())){
    }
    }

    return (
        <div>PatientsList</div>
    )
}

export default PatientsList