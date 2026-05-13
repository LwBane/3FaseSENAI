// ==> Componentes de contagem 
import PatientsCounter from '../../components/counters/PatientsCounter'
import ConsultCounter from '../../components/counters/ConsultCounter'
import ExamCounter from '../../components/counters/ExamCounter'

const Dashboard = () => {
  return (
    <div>
      <h1 className='text-xl font-bold text-cyan-800 mb-6'>
        Dashboard
      </h1>

      <div className='flex gap-6 flex-wrap'>
        <PatientsCounter />
        <ConsultCounter />
        <ExamCounter />
      </div>

      {/* Lista de pacientes
      <h2>Lista de pacientes</h2> */}

      {/* Lista de consultas
      <h2>Lista de consultas</h2> */}

      {/* Lista de exames
      <h2>Lista de exames</h2> */}
    </div>
  )
}

export default Dashboard