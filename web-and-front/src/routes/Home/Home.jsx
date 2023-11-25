import './Home.scss'

export default function Home() {
    document.title - "Home"
    if(sessionStorage.getItem("token-user")){
        return(
            <div className='home'>
                <h1>Problematização</h1>
                <p>Nesta Global Solution, tendo parceria com a “HapVida” nos foi dado uma problemática crucial para o futuro, tendo o posto de um dos “pilares fundamentais da vida humana”, a saúde. Precisamos pensar em métodos inovadores, tecnológicos, para aprimorar a condição de vida humana. Por este motivo, venho por meio deste documento demonstrar a minha ideia para melhorarmos nossas vidas, o “HealthHarbor Band”.
                     

De acordo com a Organização Mundial da Saúde (OMS) saúde significa “um estado de completo bem-estar físico, mental e social e não somente ausência de afecções e enfermidades“, sabendo disso, eu trago um dado retirado da fala da psicóloga Karla Cardozo onde ela diz: “As doenças psicossomáticas, também conhecidas como transtorno de somatização, são condições provocadas por emoções incontroláveis e pensamentos negativos, que provocam o desequilíbrio mental. Nós sabemos que o corpo e a mente são interligados, então quando nosso psicológico não está bem, o corpo também não está. Esse desequilíbrio da mente pode atrapalhar nosso organismo, fazendo com que certos sintomas comecem a aparecer.” Em seguida são citados certos sintomas como coração acelerado, exaustão, irritabilidade, coceiras ou manchas na pele, falta de ar, dores no corpo. Sintomas graves, que se não forem tratados corretamente levarão à consequências, tendo possibilidade de ocorrer parada cardíaca dependendo do caso.  

No caso do projeto, será trabalhado especificamente com a doença conhecida como “burnout”, que consiste em um disturbio emocional com sintomas de exaustão extrema, estresse e esgotamento físico resultante de situações de trabalho desgastante, que demandam muita competitividade ou responsabilidade.  A principal causa da doença é justamente o excesso de trabalho. Esta síndrome é comum em profissionais que atuam diariamente sob pressão e com responsabilidades constantes, como médicos, enfermeiros, professores, policiais, jornalistas, dentre outros, possuindo síntomas semelhantes dos que foram citados anteriormente. 

Por este motivo esta sendo desenvolvido o “HealthHarbor Band”, Health significa saúde, e Harbor porto, juntamente de Band, que em português seria algo como “pulseira do porto de saúde”. Ela visa identificar fatores que remetam à possíveis sintomas de “burnout”, como aceleração cardíaca, pressão alta e/ou irritabilidade no meio de trabalho, mandando estes dados para uma plataforma IoT (Internet of Things), que será supervisionada por especialistas da área, fazendo com que, de forma mais prática e rápida, sejam identificados tais pacientes, recebendo  o devido tratamento antes que escalone para algo muito mais preocupante.  </p>
            </div>
        )}
    else{
        window.location="/login"
        alert("É necessário fazer login para ter acesso à essa página")
    }
}