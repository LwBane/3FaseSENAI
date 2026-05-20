// ==> Componentes de contagem 
import PatientsCounter from '../../components/counters/PatientsCounter'
import ConsultCounter from '../../components/counters/ConsultCounter'
import ExamCounter from '../../components/counters/ExamCounter'
import PatientsList from '../../components/PatientsList'

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

      {/* Lista de pacientes */}
      <PatientsList />
     
    </div>
  )
}

export default Dashboard