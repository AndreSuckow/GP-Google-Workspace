import React from 'react'
import './index.css'

// components-gerais/intro
import Section from '../../components/Section'
import retrancaImg from '../../assets/images/logo/retranca.png'
import Container from '../../components/Container';
import LogoGoogle from '../../components/Google-Components/Logo';

// backgrounds
import bg1 from '../../assets/images/bg_1.png'
import bg2branca from '../../assets/images/bg_2.png'
import bg2branca2 from '../../assets/images/bg_3.png'

// O que é o Workspace? --> showDownSliderGoogle
import fundamentosImg from '../../assets/images/click-imagens.png'
import ShowDownSliderGoogle from '../../components/Google-Components/ShowDownSliderGoogle';

// flexibilidade --> Circular Carrousel Google
import CircularCarrouselGoogle from '../../components/Google-Components/CircularCarrouselGoogle';

// Colaboração  --> carrousel horizontal 1
import CarrouselGoogle from '../../components/Google-Components/Carrousel';
import arrowLeft from '../../assets/images/google/workspace/carrousel-1/arrow-left.png'
import arrowRight from '../../assets/images/google/workspace/carrousel-1/arrow-right.png'
import peopleTalking from '../../assets/images/google/workspace/carrousel-1/humans-talking.png'

// Produtividade --> showDownSliderGoogle 2
import Vivinho from '../../assets/images/google/workspace/produtividade/vivinho.png'

import fundamentos2Img from '../../assets/images/google/workspace/showDownSlider/clickConceitosExpandirInformacoes.png'

// Na prática 1 --> carrousel horizontal 2

import TitleGoogle from '../../components/Google-Components/Title';

//Produtividade 2 --> componente flávio
import clickIcon from '../../assets/images/google/workspace/produtividade2/clickIcon.png'
import TabViewWithImage from '../../components/Google-Components/TabViewWithImage';
import { TabviewWithImageData1 } from "../../data/TabviewWithImage.js";
import { TabviewWithImageData2 } from "../../data/TabviewWithImage2.js";

import indSetasbgRoxo from '../../assets/images/clickTip/indSetasbgRoxo.png'
import indSetasbgBranco from '../../assets/images/clickTip/indSetasbgBranco.png'
import clickImagensExpInfo from '../../assets/images/clickTip/clickImagensExpInfo.png'
import clickConceitosExpInfo from '../../assets/images/clickTip/clickConceitosExpInfoBgRoxo.png'

// Segurança --> carrousel horizontal 4
import manPC from '../../assets/images/google/workspace/seguranca/manComputer.png'

// DLP
import manLaptop from '../../assets/images/google/workspace/dlp/manLaptop.png'

// Público alvo --> ShowDownSlider 3 / Vídeo
import WomanCel from '../../assets/images/google/workspace/publicoAlvo/woman.png'

import Video from '../../components/Google-Components/Video';
// import videoSource from '../../assets/videos/googleworkspace.mp4'

// Impacto econômico --> carrousel horizontal 5
import predios from '../../assets/images/google/workspace/impacto/predios.png'
import blackMan from '../../assets/images/google/workspace/oferta/blackman.png'
import tabela from '../../assets/images/google/workspace/oferta/tabela.png'

// Vivo é a solução --> click aparece conteudo
import galera from '../../assets/images/google/workspace/solucao/solucao.png'

// Atendimento --> ShowContentIcon
import happyman from '../../assets/images/google/workspace/atendimento/happyman.png'
import happywoman from '../../assets/images/google/workspace/atendimento/happywoman.png'
import HorizontalAccordion from '../../components/Sections-Components/HorizontalAccordion'
import ClickTip from '../../components/Sections-Components/ClickTip'
// Na prática 4 --> carrousel horizontal 9

// Assinatura
import assinatura from '../../assets/images/google/workspace/assinatura/academiav.png'

// Carrousel data
import data1 from '../../data/carrousels/Carrousel1';
import data2 from '../../data/carrousels/Carrousel2';
import data3 from '../../data/carrousels/Carrousel3';
import data4 from '../../data/carrousels/Carrousel4';
import data5 from '../../data/carrousels/Carrousel5';
import data6 from '../../data/carrousels/Carrousel6';
import data7 from '../../data/carrousels/Carrousel7';
import data8 from '../../data/carrousels/Carrousel8';
import data9 from '../../data/carrousels/Carrousel9';
import data10 from '../../data/carrousels/Carrousel10';
// import data11 from '../../data/carrosels/Carrousel11';
import data12 from '../../data/carrousels/Carrousel12';

// showDownSliderGoogleData data
import GData from '../../data/showDownSliderGoogleData/GData1';
import GData2 from '../../data/showDownSliderGoogleData/GData2';
import GData3 from '../../data/showDownSliderGoogleData/GData3';
import GData4 from '../../data/showDownSliderGoogleData/GData4';

import '../../components/Google-Components/Carrousel/carrouselFix.css';
import Tab from '../../components/Google-Components/Tab';

const GooglePage = () => {

    const tabData = [
        {
            buttonText: 'Produtividade',
            text: `A centralização de serviços na Vivo impacta diretamente na produtividade. Logo, o cliente não precisará administrar relações com 
            um número maior de fornecedores do que ele realmente necessita.`,
        },
        {
            buttonText: 'Ofertas especiais',
            text: `A contratação de um pacote de serviços na Vivo pode garantir condições especiais ao cliente, possibilitando economia na contratação de fornecedores.`,
        },
        {
            buttonText: 'Suporte',
            text: `Atendimento de qualidade, oferecendo suporte ao cliente 24 horas por dia, todos 
            os dias da semana, inclusive nos feriados.`,
        },

    ]
    return (
        <>
            {/* Inicio */}
            <img src={retrancaImg} alt="" className='retranca' />
            <Section bg={bg1} id='start'>
                <Container>
                    <LogoGoogle />
                </Container>
            </Section>

            {/* Workspace */}
            <div className='divMae'>
                <div className='maskara'>


                    <Section id="targetMenu">

                        <Container>

                            <TitleGoogle
                                title="O que é o Workspace?"
                                titleConfig={{ textAlign: 'center', color: '#ffff' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                                spanClass='span-orange'>
                                Conglomerado de aplicativos colaborativos em
                                <br></br>
                                nuvem, o Google Workspace inclui títulos como
                                <br></br>
                                <span>Gmail, Calendar, Drive, Docs, Sheets, Slides,
                                    <br></br>
                                    Meets</span>, entre outros.
                                A partir de suas ferramentas, fomenta
                                <br></br>
                                a produtividade, comunicação e colaboração
                                <br></br>
                                entre as equipes, baseada em três fundamentos:
                            </TitleGoogle>
                            <img src={fundamentosImg} alt="" className="click-expand-conceitos" />

                            <ShowDownSliderGoogle data={GData} />
                            <TitleGoogle

                                title="Flexibilidade"
                                titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                                spanClass='span-orange'>
                                Os recursos <span>ajustáveis e práticos</span>,
                                <br></br>
                                compatíveis com diferentes dispositivos
                                <br></br>
                                disponíveis no mercado, são fatores
                                <br></br>
                                que ajudam a sustentar a relevância
                                <br></br>
                                do Workspace no mercado.

                            </TitleGoogle>

                            <CircularCarrouselGoogle></CircularCarrouselGoogle>

                            <TitleGoogle
                                title="Colaboração"
                                titleConfig={{ textAlign: 'center', color: '#FFB84C' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                                spanClass='span-orange'>
                                As ferramentas integrativas do serviço propõem
                                maior conexão entre as equipes, trazendo
                                diferentes impactos benéficos ao negócio.<br></br>
                                <span>Clique nas setas e descubra os benefícios:</span>
                            </TitleGoogle>
                            <div className='div-flex'>
                                <CarrouselGoogle data={data1} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                                <img src={peopleTalking} alt="" />
                            </div>

                        </Container>

                    </Section>

                    <Section bg={bg2branca} bgOrientation='center center' bgSize='100% 100%'>
                        <Container>
                            <>
                                <div className='div-flex2'>
                                    <div id="targetMenu2">
                                        <TitleGoogle
                                            title="Produtividade"
                                            titleConfig={{ textAlign: 'left', color: '#660099' }}
                                            paragraphConfig={{ textAlign: 'left', color: 'black' }}
                                            spanClass='span-red'>

                                            Objetivando o foco no trabalho, os aplicativos<br></br>
                                            do Workspace possuem fácil usabilidade somada<br></br>
                                            ao design que privilegia uma experiência<br></br>
                                            completa e descomplicada para o usuário.
                                        </TitleGoogle>
                                    </div>
                                    <img src={Vivinho} alt="" />
                                </div>

                                <div className='div-mae-flex3'>
                                    <img src={fundamentos2Img} alt="" className='fundamentos2' />
                                    <div className='div-flex3'>
                                        <ShowDownSliderGoogle data={GData2} />
                                    </div>
                                </div>

                            </>
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <TitleGoogle
                                title="Na Prática"
                                titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '-2rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}>
                                Durante o curso, você conhecerá algumas
                                <br></br>
                                histórias que ajudarão a entender um pouco<br></br>
                                mais da aplicação dos apps Workspace no dia
                                <br></br>
                                a dia de diferentes tipos de negócio.
                            </TitleGoogle>
                            <img src={indSetasbgRoxo} alt="" className='clickSetasFix' />
                            <CarrouselGoogle data={data2} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo2' />
                            <TitleGoogle
                                title="Produtividade"
                                titleConfig={{ textAlign: 'left', color: '#FFB84C', marginTop: '6rem' }}
                                paragraphConfig={{ textAlign: 'left', color: '#ffff' }}>
                                Com uma gama de ferramentas que funcionam<br></br>
                                de forma integrada, o Workspace se evidencia<br></br>
                                por ofertar com uma única contratação e preço,<br></br>
                                um alicerce capaz de simplificar as rotinas da empresa.
                            </TitleGoogle>
                            <img src={clickIcon} alt="" className='clickIcon' />
                            <TabViewWithImage data={TabviewWithImageData1}></TabViewWithImage>
                            <TabViewWithImage data={TabviewWithImageData2} direction="row-reverse"></TabViewWithImage>
                            <TitleGoogle
                                title="Na Prática"
                                titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}>
                                O Google Workspace pode ser aplicado<br></br>
                                nos mais diferentes cenários possíveis.
                            </TitleGoogle>
                            <img src={indSetasbgRoxo} alt="" className='clickSetasFix' />
                            <CarrouselGoogle data={data3} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo2' />
                        </Container>
                    </Section>

                    <Section bg={bg2branca2} bgOrientation='center center' bgSize='100% 100%' id="targetMenu3">
                        <Container>
                            <TitleGoogle
                                title="Segurança"
                                titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '4rem' }}
                                paragraphConfig={{ textAlign: 'left', color: 'black' }}>
                                A ausência de um suporte de segurança eficiente
                                na administração de dados na nuvem esbarra
                                em uma problemática vulnerabilidade das empresas.<br></br><br></br>

                                Líder no setor, o Google dispõe de um controle preventivo eficaz. Conheça alguns dados de desempenho para compreender quantas ameaças são eliminadas
                                por minutos com a capacidade combativa do Workspace.
                            </TitleGoogle>
                            <img src={indSetasbgBranco} alt="" className='clickSetasFix'/>
                            <div className='div-flex4'>
                                <img src={manPC} alt="" />
                                <CarrouselGoogle data={data4} infinite={ false } arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo4' />
                            </div>
                            <div className='dlp-content'>
                                <div className='dlp-wrapper'>
                                    <TitleGoogle
                                        title="DLP"
                                        titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '4rem' }}
                                        paragraphConfig={{ textAlign: 'left', color: 'black' }}
                                        spanClass='span-purple'>

                                        Para reforçar a segurança do usuário,<br></br>
                                        o Workspace conta com o DLP, <span>sistema<br></br>
                                            de prevenção de perda de dados</span>.<br></br><br></br>

                                        Com essa camada protetiva, o serviço<br></br>
                                        assegura informações críticas e sensíveis,<br></br>
                                        obstruindo acessos inapropriados ou adulterações.<br></br><br></br>

                                        Essa prevenção reduz riscos, como:
                                    </TitleGoogle>
                                    <CarrouselGoogle 
                                        data={data12} 
                                        arrowPrev={arrowLeft} 
                                        arrowNext={arrowRight} 
                                        slideShow={1} 
                                        carrouselType='estilo1' />
                                    
                                     {/* <div className='dlp-riscos'>
                                        <div className='risco'>
                                            <img src={segIcon1} alt="" />
                                            <p>Vazamento de dados e/ou<br></br> documentos sigilosos.</p>
                                        </div>
                                        <div className='risco'>
                                            <img src={segIcon2} alt="" />
                                            <p>Perdas de materiais.</p>
                                        </div>
                                        <div className='risco'>
                                            <img src={segIcon3} alt="" />
                                            <p>Hackeamento de contas.</p>
                                        </div>
                                    </div>  */}

                                </div>
                                <img className='dlp-img' src={manLaptop} alt="" />
                            </div>

                        </Container>
                    </Section>

                    <Section id="targetMenu4">
                        <Container>
                            <TitleGoogle
                                title="Público-alvo"
                                titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '-4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                                spanClass='span-orange'>
                                Buscando auxiliar demandas de produtividade<br></br>
                                e compartilhamento de dados de <span>médias e grandes</span><br></br>
                                empresas, o Workspace possui diversificação<br></br>
                                em seu oferecimento de serviços para diferentes<br></br>
                                setores da indústria e seus departamentos.
                            </TitleGoogle>
                            <div className='div-flex4b'>
                                <img src={WomanCel} alt="" />
                                <div className='div-flex-direction'>
                                    <div className='fundamentosImg'>
                                        <img src={fundamentosImg} alt="" className='fundamentos-click' />
                                    </div>
                                    <ShowDownSliderGoogle data={GData3} />
                                </div>
                            </div>
                            <p className='pSolto'>
                                Afinal de contas, como e para quem o Google<br></br>
                                Workspace pode se tornar um <span className='span-orange'>aliado produtivo</span>?
                            </p>
                            <div className='video'>
                                <Video source={''}></Video>
                            </div>

                            <div className='displayFlex'>
                                <TitleGoogle
                                    title="Impacto Econômico"
                                    titleConfig={{ textAlign: 'left', color: '#FFB84C', marginTop: '' }}
                                    paragraphConfig={{ textAlign: 'left', color: '#ffff' }}
                                    spanClass='span-orange'>
                                    Podemos considerar como trunfos<br></br>
                                    do Workspace, o aperfeiçoamento<br></br>
                                    da comunicação e a estruturação otimizada<br></br>
                                    de recursos, que impactam diretamente<br></br>
                                    no pilar financeiro de uma empresa.<br></br><br></br>

                                    Assim, reduzindo as despesas, na mesma<br></br>
                                    crescente em que gera eficácia na<br></br>
                                    rotina laboral.<br></br><br></br>

                                    Clique nas setas para conferir alguns dados<br></br>
                                    divulgados pelo Google sobre a realidade dos<br></br>
                                    clientes após o investimento no Workspace:
                                </TitleGoogle>
                                <img src={predios} alt="" />
                            </div>
                            <img src={indSetasbgRoxo} alt="" className='clickSetasFix'/>
                            <CarrouselGoogle data={data5} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo4' />
                            <TitleGoogle
                                title="Tipos de Oferta"
                                titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '8rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                                spanClass='span-orange'>
                                Distribuído em planos mensais ou anuais, as ofertas<br></br>
                                do Workspace são separadas pelas seguintes famílias:<br></br>
                                <span>Business</span> e <span>Enterprise</span>.<br></br><br></br>

                                Conheça as divisões no quadro abaixo:<br></br><br></br>
                            </TitleGoogle>
                            <div className='displayFlex2'>
                                <img src={blackMan} alt="" />
                                <img src={tabela} alt="" className='tabela' />
                            </div>

                        </Container>
                    </Section>
                    <Section bg={bg2branca2} bgOrientation='center center' bgSize='100% 100%' id="targetMenu5">
                        <Container>
                            <TitleGoogle
                                title="Business"
                                titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '4rem' }}
                                paragraphConfig={{ textAlign: 'left', color: 'black' }}>
                                Voltado para empresas de médio porte, a família<br></br>
                                Business engloba uma estrutura propícia para<br></br>
                                a colaboração e defesa de dados.
                            </TitleGoogle>
                            <div className='div-flex5'>
                                <CarrouselGoogle data={data6} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                                <img src={indSetasbgBranco} alt="" className='clickSetas' />
                            </div>
                            <TitleGoogle
                                title="Enterprise"
                                titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '6rem' }}
                                paragraphConfig={{ textAlign: 'left', color: 'black' }}>
                                Aconselhável para empresas de grande porte,<br></br>
                                a família Enterprise incorpora recursos para negócios<br></br>
                                dependentes de uma infraestrutura mais vigorosa.
                            </TitleGoogle>
                            <div className='div-flex5'>
                                <CarrouselGoogle data={data7} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                                <img src={indSetasbgBranco} alt="" className='clickSetas' />
                            </div>
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <TitleGoogle
                                title="Na Prática"
                                titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '-4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                                spanClass='span-purple'>
                                Antes de continuar, que tal entender um pouco<br></br>
                                mais da integração do Workspace com a rotina<br></br>
                                de uma empresa? Use os botões para ler
                                a história de Ícaro:
                            </TitleGoogle>
                            <img src={indSetasbgRoxo} alt="" className='clickSetasFix'/>
                            <div className='ajustandoIMG'>
                                <CarrouselGoogle data={data8} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                            </div>
                            <TitleGoogle
                                title="Cenários de comercialização"
                                titleConfig={{ textAlign: 'left', color: '#FFB84C', marginTop: '6rem' }}
                                paragraphConfig={{ textAlign: 'left', color: '#ffff' }}
                                spanClass='span-orange'>
                                Englobando seu atendimento tanto para os clientes que não utilizam o Workspace,<br></br>
                                quanto os que desejam dar um upgrade em sua contratação, dispomos de dois <br></br>
                                formatos de comercialização para atender as necessidades das empresas. Conheça abaixo:
                            </TitleGoogle>
                            <div className="div-flex-comercializacao">
                                <img src={clickImagensExpInfo} alt="" className="click-expand-conceitos" />
                                <ShowDownSliderGoogle data={GData4} />
                            </div>
                            <div className='div-flex-eficiencia' id="targetMenu6">
                                <TitleGoogle
                                    title="Eficiência"
                                    titleConfig={{ textAlign: 'left', color: '#FFB84C', marginTop: '6rem' }}
                                    paragraphConfig={{ textAlign: 'left', color: '#ffff' }}
                                    spanClass='span-orange'>
                                    Propiciando aumento produtivo e assertividade comunicativa nas operações laborais,
                                    o Workspace sustenta seu impacto através
                                    da <span>integração.</span>
                                    <br></br><br></br>Assim, promovendo um ambiente de trabalho mais comunicativo através da facilidade na adaptação
                                    à seus aplicativos.<br></br><br></br>
                                    Clique nas setas para conferir alguns dados disponibilizados pelo Google acerca do tema.
                                </TitleGoogle>
                                <CarrouselGoogle data={data9} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' vertical={true} />
                            </div>
                            <img src={indSetasbgRoxo} alt="" className='clickSetasFix'/>


                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <img src={galera} alt="" className='imagemCentralizada' />
                            <TitleGoogle
                                title="Vivo é a Solução!"
                                titleConfig={{ textAlign: 'center', color: '#f784da' }}
                                paragraphConfig={{ textAlign: 'left', color: '#ffff' }}
                                spanClass='span-orange'>

                                Pioneira no oferecimento de pacotes de internet para telefonia celular, a Vivo atua no Brasil desde 2003, sendo reconhecida por sua entrega de qualidade e competência. Referência em transformação digital, aumentou seu portfólio de acordo com as evoluções tecnológicas e a percepção das dores do mercado.
                                Hoje, a empresa atua como um hub de soluções digitais, integrando os mais diferentes tipos de serviço.<br></br><br></br>
                                Na Vivo, o cliente conta com vantagens ao contratar ou transferir seus serviços para a empresa.
                            </TitleGoogle>
                            <img src={clickConceitosExpInfo} alt="" className='clickSetasFix'/>
                            <Tab data={tabData}></Tab>
                        </Container>
                    </Section>
                    <Section bg={bg2branca2} bgOrientation='center center' bgSize='100% 100%' id="targetMenu7">
                        <Container>
                            <div className='flex-atendimento'>
                                <TitleGoogle
                                    title="Atendimento"
                                    titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '6rem' }}
                                    paragraphConfig={{ textAlign: 'left', color: 'black' }}
                                    spanClass='span-purple'>

                                    Através da contratação com a Vivo, o cliente<br></br>
                                    adquire um serviço <span>internacionalmente</span><br></br>
                                    conhecido, sem qualquer temor com<br></br>
                                    <span>extensos prazos de retorno</span> de atendimento<br></br>
                                    ou <span>limitações</span> de seus funcionários quanto<br></br>
                                    a uma <span>língua estrangeira.</span><br></br><br></br>

                                    Uma equipe dedicada ao Workspace pode<br></br>
                                    ser contatada <span>24 horas por dia</span>, em <span>todos<br></br>
                                        os dias da semana</span>, oferecendo suporte<br></br>
                                    em <span>português</span>. De maneira direta e acessível,<br></br>
                                    nossos colaboradores estão de prontidão<br></br>
                                    para tirar <span>dúvidas e solucionar</span> possíveis erros<br></br>
                                    que impactem a produtividade do cliente.
                                </TitleGoogle>
                                <img src={happyman} alt="" />
                            </div>
                            <div className='flex-atendimento'>
                                <img src={happywoman} alt="" />
                                <TitleGoogle
                                    title="Forma de pagamento"
                                    titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '6rem' }}
                                    paragraphConfig={{ textAlign: 'left', color: 'black' }}
                                    spanClass='span-purple'>
                                    Com a parceria firmada com o Google, a Vivo conta com benefícios em relação à fatura
                                    do serviço, ofertando maior quantidade
                                    de meios de pagamento e preços equivalentes ao mercado local.<br></br>
                                    <HorizontalAccordion />
                                </TitleGoogle>
                            </div>
                            <ClickTip text='Clique nos ícones para expandir as informações.' center />
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <TitleGoogle
                                title="Na Prática"
                                titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '-4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                                spanClass='span-purple'>
                                Antes de finalizar, vamos conhecer a história<br></br>
                                de Carolina, dona de uma movimentada loja de<br></br>
                                roupas que integra soluções digitais ao seu dia a dia. <br></br>
                                Clique nos botões para ler.
                            </TitleGoogle>
                            <img src={indSetasbgRoxo} alt="" className='clickSetasFix' />
                            <div className='ajustandoIMG2'>
                                <CarrouselGoogle data={data10} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                            </div>
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <img src={assinatura} alt="" className='assinatura' />
                        </Container>
                    </Section>
                </div>
            </div>
        </>
    )
}

export default GooglePage