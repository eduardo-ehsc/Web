import Header from "../../../components/Header"
import withAuthSSG from "../../../hoc/withAuthSSG";

import ActivitySkeleton from "../../../components/ActivitySkeleton";
import { Container, Title, Group } from "./styles";
import Activity from "../../../components/Activity";
import { useFetch } from "../../../hooks/useFetch";

function Atividades(){
    const { data } = useFetch('/atividades');
    return(
        <div>
            <Header/>
            <Container>
                <Title>
                    <h2>Atividades</h2>
                </Title>

                <Group>
                    {!data ? (
                        <>
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                        </>
                    ) : (
                        data.map((ativ, index) => ( 
                                <Activity 
                                    key={index}
                                    id={ativ.id}
                                    photo={ativ.topico.turma.icone.link}
                                    name={ativ.nome}
                                    date={ativ.dataFim}
                                    color={ativ.topico.turma.cores.corPrim}
                                />
                            )
                        )
                    ) }
                </Group>
            </Container>
        </div>
    );
}

export default withAuthSSG(Atividades);