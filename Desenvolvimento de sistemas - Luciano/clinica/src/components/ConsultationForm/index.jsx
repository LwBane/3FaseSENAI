import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

// Modal 
import Modal from '../Modal'

function ConsultationForm() {
    const [searchTerm, setSearchTerm] = useState("")
    const [patients, setPatients] = useState([])
    const [selectedPatient, setSelectedPatient] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSaving, setIsSaving] = useState(false)

    const [formData, setFormData] = useState({
        reason: " ",
        date: " ",
        time: " ",
        description: " ",
        medication: " ",
        dosagePrecautions: " ",
    })


    // Busca pacientes 

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get("http://localhost:3000/patients")
                setPatients(response.data)
            } catch (error) {
                console.error("Erro ao obter dados dos pacientes", error)
            }
        }
    }, [])

    // ===== Funções Auxiliares ====== 

    // Controle do campo de filtro 

    const handleSearchChange = (e) => setSearchTerm(e.target.value)

    // Filtro dos pacientes 

    const filteredPatients = patients.filter(
        (patient) =>
            patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.id.toString().includes(searchTerm)
    );

    // Seleciona o paciente e abre modal 

    const handleSelectPatient = (patient) => {
        setSelectedPatient(patient)
        setIsModalOpen(true)
    }

    // Fecha modal e reseta o valor do paciente selecionado

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedPatient(null)
    }


    // Controla os campos do estado formData dinamicamente 

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }


    // Reseta o form 

    const resetForm = () => {
        setFormData({
            reason: "",
            date: "",
            time: "",
            description: "",
            medication: "",
            dosagePrecautions: "",
        })
    }

    // Envia os dados 

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!selectedPatient) return

        try {
            setIsSaving(true)

            const dataToSave = {
                patientId: selectedPatient.id,
                ...formData
            }

            await axios.post("http://localhost:3000/consults", dataToSave)

            toast.success("Consulta cadastrada com sucesso", {
                autoClose: 2000,
                hideProgressBar: true
            })

            resetForm()
            handleCloseModal()

        } catch (error) {
            console.error("Erro ao cadastrar consulta!")
            toast.error("Erro ao cadastrar consulta!", {
                autoClose: 2000,
                hideProgressBar: true
            })
        }
    }

    return (
        <section className='p-6 text-gray-800'>
            {/* Campo de busca */}

            <div className='mb-6'>
                <label className='block text-sm font-semibold mb-2'>
                    Buscar paciente para cadastrar a consulta
                </label>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder='Digite o nome ou o registro do paciente'
                    className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                />
            </div>

            {/* Lista de pacientes */}

            <ul className='space-y-3'>
                {
                    filteredPatients.map((patient) => (
                        <li
                            key={patient.id}
                            className='p-4 border rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-500 transition'
                        >
                            <div>
                                <p className='text-sm'>
                                    <strong>Registro:</strong> {patient.id}
                                </p>
                                <p className='text-sm'>
                                    <strong>Nome:</strong> {patient.fullName}
                                </p>
                                <p className='text-sm'>
                                    <strong>Convênio:</strong> {patient.healthInsurance}
                                </p>
                            </div>

                            <button
                                onClick={() => handleSelectPatient(patient)}
                                className='bg-cyan-700 text-white px-3 py-2 rounded-lg hover:bg-cyan-600 cursor-pointer'
                            >
                                Selecionar
                            </button>

                        </li>
                    ))
                }
            </ul>

            {/* Modal de cadastro de consulta */}

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {
                    selectedPatient && (
                        <>
                            {/* Título */}
                            <h2 className='text-lg font-bold mb-4 text-cyan-700'>
                                Cadastrar consulta pra {selectedPatient.fullName}
                            </h2>

                            {/* Dados básicos */}
                            <div className='mb-4 text-sm text-gray-700'>
                                <p>
                                    <strong>Email:</strong> {selectedPatient.email}
                                </p>
                                <p>
                                    <strong>Telefone:</strong> {selectedPatient.phone}
                                </p>
                            </div>

                            {/* Formulário */}

                            <form onSubmit={handleSubmit} className='space-y-4'>
                                {/* Motivo da consulta */}
                                <div>
                                    <label className='block text-sm font-medium mb-1'>
                                        Motivo da Consulta
                                    </label>

                                    <input
                                        type='text'
                                        name='reason'
                                        id='reason'
                                        value={formData.reason}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none'
                                    />
                                </div>

                                <div className='grid grid-cols-2 gap-4'>
                                </div>


                            </form>

                        </>
                    )
                }
            </Modal>

        </section>
    )
}



export default ConsultationForm

