import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function RegisterFormPatient() {
    const [formData, setFormData] = useState({
        fullName: "",
        gender: "",
        birthdate: "",
        cpf: "",
        rg: "",
        maritalStatus: "",
        phone: "",
        email: "",
        birthplace: "",
        emergencyContact: "",
        allergies: "",
        specialCare: "",
        healthInsurance: "",
        insuranceNumber: "",
        insuranceValidity: "",
        address: {
            cep: "",
            city: "",
            state: "",
            street: "",
            number: "",
            complement: "",
            neighborhood: "",
            reference: ""
        }
    })

    const [isSaving, setIsSaving] = useState(false)

    // === Handles === 

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value })) // Operador Spread & Propriedade Computada 
    }

    const handleAdressChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            address: { ...prev.address, [name]: value }
        }))
    }

    // Requisição para API viacep 

    const fetchAdressData = async (cep) => {
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
            setFormData((prev) => ({
                ...prev,
                address: {
                    ...prev.adress, // Preserva se alguém ja preencheu algo 
                    cep: data.cep || "",
                    city: data.localidade || "",
                    state: data.uf || "",
                    street: data.logradouro || "",
                    complement: data.complemento || "",
                    neighborhood: data.bairro || ""
                }
            }))
        } catch (error) {
            console.log("Erro ao buscar endereço, error", error)
        }
    }

    // == Tratamento do valor digitado no campo de CEP 

    const handleCepBlur = (e) => {
        const cep = e.target.value.replace(/\D/g, "")
        if (cep.length === 8) fetchAdressData(cep)
    }

    // Submit form 

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSaving(true)

        try {
            await axios.post(
                "http://localhost:3000/patients", formData)

            toast.success("Paciente cadastrado com sucesso!", {
                autoClose: 2000,
                hideProgressBar: true
            })

            setFormData({
                fullName: "",
                gender: "",
                birthdate: "",
                cpf: "",
                rg: "",
                maritalStatus: "",
                phone: "",
                email: "",
                birthplace: "",
                emergencyContact: "",
                allergies: "",
                specialCare: "",
                healthInsurance: "",
                insuranceNumber: "",
                insuranceValidity: "",
                address: {
                    cep: "",
                    city: "",
                    state: "",
                    street: "",
                    number: "",
                    complement: "",
                    neighborhood: "",
                    reference: ""
                }
            })

        } catch (error) {
            console.error(error)
            toast.error("Erro ao salvar os dados!", {
                autoClose: 2000,
                hideProgressBar: true
            })
        }
    }


    return (
        <div>
            RegisterFormPatient
        </div>
    )
}

export default RegisterFormPatient
