import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Container } from 'react-bootstrap'
import { OrbitProgress } from 'react-loading-indicators'

import NavigationBar from '../../components/navigationbar'
import Saldo from '../../components/saldo'

import { Client } from '../../api/client'
import { getDataUser } from '../../service/UserService'

import styles from './style'

export default function SaldoPage() {
    const [saldo, setSaldo] = useState(0)
    const [load, setLoad] = useState(true)

    const navigate = useNavigate()
    const dataUser = getDataUser()

    function fetchSaldo() {
        const token = localStorage.getItem('access_token')
        console.log('TOKEN SENDO USADO:', token)

        setLoad(true)

        Client.get('/saldo', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setSaldo(res.data.saldo)
            })
            .catch((err) => {
                console.log('ERRO SALDO:', err.response?.data || err)
            })
            .finally(() => {
                setLoad(false)
            })
    }

    function verifyAuth() {
        const token = localStorage.getItem('access_token')

        if (!token || !dataUser) {
            navigate('/login')
        }
    }

    useEffect(() => {
        console.log('TOKEN:', localStorage.getItem('access_token'))

        verifyAuth()
        fetchSaldo()
    }, [])

    return (
        <>
            <NavigationBar />

            <Container style={styles.container}>
                {load ? (
                    <div style={styles.loader}>
                        <OrbitProgress variant="spokes" color="#32cd32" size="medium" />
                    </div>
                ) : (
                    <>
                        <h2 style={styles.title}>Saldo da Conta</h2>
                        <Saldo saldo={saldo} />
                    </>
                )}
            </Container>
        </>
    )
}