import './Ideia.scss'

export default function Ideia(){
    if(sessionStorage.getItem("token-user")){
    return(
        <div className="container-ideia">
            <h1>Ideia do produto</h1>
            <p>Será trabalhado especificamente com a doença conhecida como “burnout”, que consiste em um disturbio emocional com sintomas de exaustão extrema, estresse e esgotamento físico resultante de situações de trabalho desgastante, que demandam muita competitividade ou responsabilidade.  A principal causa da doença é justamente o excesso de trabalho. Esta síndrome é comum em profissionais que atuam diariamente sob pressão e com responsabilidades constantes, como médicos, enfermeiros, professores, policiais, jornalistas, dentre outros, possuindo síntomas semelhantes dos que foram citados anteriormente. 

Por este motivo esta sendo desenvolvido o “HealthHarbor Band”, Health significa saúde, e Harbor porto, juntamente de Band, que em português seria algo como “pulseira do porto de saúde”. Ela visa identificar fatores que remetam à possíveis sintomas de “burnout”, como aceleração cardíaca, pressão alta e/ou irritabilidade no meio de trabalho, mandando estes dados para uma plataforma IoT (Internet of Things), que será supervisionada por especialistas da área, fazendo com que, de forma mais prática e rápida, sejam identificados tais pacientes, recebendo  o devido tratamento antes que escalone para algo muito mais preocupante. </p>
        
            <h1>Objetivo do produto</h1>
            <p>É buscado que seja possível para todos que chegam ao limite de exaustão recebam a devida forma de melhorarem o mais rápido possível, já que “burnout” não é um doença facilmente identificada por hospitais. O tratamento inclui acompanhamento psicológico, momentos de lazer, relaxamento e outros métodos, sem contar que em casos mais extremos é possível ser necessário a receita de antidepressivos. A duração do tratamento é relativa, com a possibilidade de durar anos. Em alguns casos, o colaborador precisa se afastar completamente do trabalho. Entretanto, é possível se cuidar sem precisar se licenciar. Por isto a HealthHarbor Band busca identificar tal problema o quanto antes possível, evitando que leve a problemas maiores. </p>
        </div>
    )}

    else{
        window.location="/login"
        alert("É necessário fazer login para ter acesso à essa página")
    }
}