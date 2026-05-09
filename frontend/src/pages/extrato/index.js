import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Container } from 'react-bootstrap'
import { OrbitProgress } from 'react-loading-indicators'

import NavigationBar from '../../components/navigationbar'
import DataTable from '../../components/datatable'

import { Client } from '../../api/client'
import { getPermissions } from '../../service/PermissionService'
import { getDataUser } from '../../service/UserService'

export default function TransfersPage() {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)

  const navigate = useNavigate()

  const permissions = getPermissions()
  const dataUser = getDataUser()

  function fetchData() {
    setLoad(true)

    setTimeout(() => {
      Client.get('/transfers')
        .then((res) => {
          console.log(res.data)
          setData(res.data.data ?? res.data)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setLoad(false)
        })
    }, 1000)
  }

  function verifyPermission() {
    if (!dataUser) navigate('/login')
    else if (permissions.listTransfer === 0) navigate(-1)
  }

  useEffect(() => {
    verifyPermission()
    fetchData()
  }, [])

  return (
    <>
      <NavigationBar />

      {load ? (
        <Container className="d-flex justify-content-center mt-5">
          <OrbitProgress
            variant="spokes"
            color="#32cd32"
            size="medium"
          />
        </Container>
      ) : (
        <Container className="mt-2">
          <DataTable
            title="Extrato de Transferências"
            rows={['ID', 'Tipo', 'Valor', 'Criado em', 'Atualizado em', 'Ações']}
            hide={[false, false, false, true, true, false]}
            data={data}
            keys={['id', 'tipo', 'valor', 'createdAt', 'updatedAt']}
            resource="transfers"
            crud={[
              'viewTransfer',
              'createTransfer',
              'editTransfer',
              'deleteTransfer',
            ]}
          />
        </Container>
      )}
    </>
  )
}