import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


import Loading from '../layout/loading'
import Message from '../layout/message'
import Container from '../layout/container'
import LinkButton from '../layout/linkButton'
import ProjectCard from '../project/projectCard'


import styles from './projects.module.css'

function Projetcs() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 700)
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Criar projeto" />
            </div>
            {message && <Message type="success" msg={message} />}

            <Container customClass="start">
                {projects.length > 0 &&
                projects.map((project) => (<ProjectCard 
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
                key={project.id}  

                />))}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (

                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    )
}
export default Projetcs