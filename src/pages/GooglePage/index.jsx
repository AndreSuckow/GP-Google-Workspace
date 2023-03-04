import React from 'react'


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
import fundamentosImg from '../../assets/images/google/workspace/showDownSlider/clickImagensExpandirFundamentos.png'
import ShowDownSliderGoogle from '../../components/Google-Components/ShowDownSliderGoogle';
import avisoSetas from '../../assets/images/google/workspace/CircularCarrousel/avisoSetas.png'

// flexibilidade --> Circular Carrousel Google
import CircularCarrouselGoogle from '../../components/Google-Components/CircularCarrouselGoogle';
import setaUp from "../../assets/images/google/workspace/CircularCarrousel/setinhaup.png"
import setaDown from "../../assets/images/google/workspace/CircularCarrousel/setinhadown.png"

// Colaboração  --> carrousel horizontal 1
import CarrouselGoogle from '../../components/Google-Components/Carrousel';
import arrowLeft from '../../assets/images/google/workspace/carrousel-1/arrow-left.png'
import arrowRight from '../../assets/images/google/workspace/carrousel-1/arrow-right.png'
import avisoSetasBrancas from '../../assets/images/google/workspace/carrousel-1/avisoSetasBrancas.png'

// Produtividade --> showDownSliderGoogle 2
import Vivinho from '../../assets/images/google/workspace/produtividade/vivinho.png'

import fundamentos2Img from '../../assets/images/google/workspace/showDownSlider/clickConceitosExpandirInformacoes.png'

// Na prática 1 --> carrousel horizontal 2

import TitleGoogle from '../../components/Google-Components/Title';

//Produtividade 2 --> componente flávio
import clickIcon from '../../assets/images/google/workspace/TabViewWithImage/clickConceitosExpandirInformacoes.png'
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
import videoSource from '../../assets/videos/video.mp4'
import assistaAoVideo from '../../assets/images/google/workspace/publicoAlvo/assistaAoVideo.png'

// Impacto econômico --> carrousel horizontal 5
import predios from '../../assets/images/google/workspace/impacto/predios.png'
import blackMan from '../../assets/images/google/workspace/oferta/blackman.png'
import tabela from '../../assets/images/google/workspace/oferta/tabela.png'

// Vivo é a solução --> click aparece conteudo
import galera from '../../assets/images/google/workspace/solucao/solucao.png'
import clickRetangulos from '../../assets/images/clickTip/clickRetangulosVerInformacoes.png'

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

import './index.css'

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

                    <Section id="targetMenu"
                        lineBG='#bd4aff'>
                        <Container>
                            <TitleGoogle
                                title="O que é o Workspace?"
                                titleConfig={{ textAlign: 'center', color: '#ffff' }}
                                paragraphConfig={{ fontSize: 'font-size: clamp(24px, 3vw, 24px)', textAlign: 'center', color: '#ffff', width: '75%' }}
                                spanClass='span-white'>
                                Conglomerado de aplicativos colaborativos em nuvem, o Google 
                                Workspace inclui títulos como <span>Gmail, Calendar, Drive, Docs, Sheets,
                                Slides, Meets</span>, entre outros.
                                <div className='espaceLines'></div>
                                <br></br>
                                A partir de suas ferramentas, fomenta
                                a produtividade, comunicação e colaboração
                                entre as equipes, baseada em três fundamentos:
                            </TitleGoogle>
                            <img src={fundamentosImg} alt="" className="click-expand-conceitos" />
                            <div className='borderNone'>
                                <ShowDownSliderGoogle data={GData} />
                            </div>
                        </Container>
                    </Section>

                    <Section customClass='bgWhite'
                        lineBG='#bd4aff'>
                        <Container>
                            <TitleGoogle

                                title="Flexibilidade"
                                titleConfig={{ textAlign: 'center', color: '#660099', marginTop: '4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: 'black' }}
                                spanClass='span-purple2'>
                                Os recursos <span>ajustáveis e práticos</span>,
                                compatíveis com diferentes
                                <br></br>
                                dispositivos disponíveis no mercado, são fatores que ajudam a
                                <br></br>
                                sustentar a relevância do Workspace no mercado.

                            </TitleGoogle>
                            <img className='clickSetasFix' src={avisoSetas} alt="" />
                            <CircularCarrouselGoogle></CircularCarrouselGoogle>
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <TitleGoogle
                                title="Colaboração"
                                titleConfig={{ textAlign: 'center', color: '#ffff' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                                spanClass='span-white'>
                                As ferramentas integrativas do serviço propõem maior conexão entre
                                <br></br>
                                as equipes, trazendo diferentes impactos benéficos ao negócio.
                                <br></br><br></br>
                            </TitleGoogle>
                            <div className='div-flex'>
                                <CarrouselGoogle data={data1} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                                <div className='espace'>
                                    <img className='clickSetasFix2' src={avisoSetasBrancas} alt="" />
                                </div>
                            </div>
                           
                        </Container>
                    </Section>

                    <Section bg={bg2branca} bgOrientation='center center' bgSize='100% 100%'>
                        <Container>
                            <>
                                <div className='div-flex2'>
                                    <div className="TitleAndParagraph" id="targetMenu2">
                                        <TitleGoogle
                                            title="Produtividade"
                                            titleConfig={{ textAlign: 'left', color: '#660099' }}
                                            paragraphConfig={{ textAlign: 'left', color: 'black' }}
                                            spanClass='span-red'>

                                            Objetivando o foco no trabalho, os aplicativos
                                            do Workspace possuem fácil usabilidade somada
                                            ao design que privilegia uma experiência
                                            completa e descomplicada para o usuário.
                                        </TitleGoogle>
                                    </div>
                                    {/* <img src={Vivinho} alt="" /> */}
                                </div>

                                <div className='div-mae-flex3'>
                                    <div className='div-flex3'>
                                        <ShowDownSliderGoogle data={GData2} />
                                    </div>
                                    <img src={fundamentos2Img} alt="" className='fundamentos2' />
                                </div>

                            </>
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <TitleGoogle
                                title="Na Prática"
                                titleConfig={{ textAlign: 'center', color: '#ffff', marginTop: '-2rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff', width: '69%' }}>
                                Durante o curso, você conhecerá algumas
                                histórias que ajudarão a entender um pouco
                                mais da aplicação dos apps Workspace no dia
                                a dia de diferentes tipos de negócio.
                            </TitleGoogle>
                            <div className='espace2'>
                                <img className='clickSetasFix2' src={avisoSetasBrancas} alt="" />
                            </div>
                            <CarrouselGoogle data={data2} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo2' />
                            <TitleGoogle
                                title="Em um só lugar"
                                titleConfig={{ textAlign: 'center', color: '#ffff', marginTop: '8rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff', width: '74%' }}>
                                Com uma gama de ferramentas que funcionam
                                de forma integrada, o Workspace se evidencia
                                por ofertar com uma única contratação e preço,
                                um alicerce capaz de simplificar as rotinas da empresa.
                            </TitleGoogle>
                            <img src={clickIcon} alt="" className='clickIcon' />
                            <TabViewWithImage data={TabviewWithImageData1}></TabViewWithImage>
                            <TabViewWithImage data={TabviewWithImageData2} direction="row-reverse"></TabViewWithImage>
                            <TitleGoogle
                                title="Na Prática"
                                titleConfig={{ textAlign: 'center', color: '#ffff', marginTop: '8rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff', width: '50%' }}>
                                O Google Workspace pode ser aplicado
                                nos mais diferentes cenários possíveis.
                            </TitleGoogle>
                            <div className='espace2'>
                                <img className='clickSetasFix2' src={avisoSetasBrancas} alt="" />
                            </div>
                            <CarrouselGoogle data={data3} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo2' />
                        </Container>
                    </Section>

                    <Section bg={bg2branca2} bgOrientation='center center' bgSize='100% 100%' id="targetMenu3">
                        <Container>
                            <TitleGoogle
                                title="Segurança"
                                titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '4rem' }}
                                paragraphConfig={{ textAlign: 'left', color: 'black', width: '97%', margin: '2rem 0' }}>
                                A ausência de um suporte de segurança eficiente
                                na administração de dados na nuvem esbarra
                                em uma problemática vulnerabilidade das empresas.<br></br><br></br>

                                Líder no setor, o Google dispõe de um controle preventivo eficaz. Conheça alguns dados de desempenho para compreender quantas ameaças são eliminadas
                                por minutos com a capacidade combativa do Workspace.
                            </TitleGoogle>

                            <div className='div-flex4'>
                                <img src={manPC} alt="" />
                                <div className='flexflex'>
                                    <img className='clickSetasFix' src={avisoSetas} alt="" />
                                    <CarrouselGoogle data={data4} infinite={false} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo4' />
                                </div>
                            </div>
                            <div className='dlp-content'>
                                <div className='dlp-wrapper'>
                                    <TitleGoogle
                                        title="DLP"
                                        titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '4rem' }}
                                        paragraphConfig={{ textAlign: 'left', color: 'black', width: '94%', margin: '0', marginTop: '2rem' }}
                                        spanClass='span-purple'>

                                        Para reforçar a segurança do usuário,
                                        o Workspace conta com o DLP, <span>sistema
                                        de prevenção de perda de dados</span>.
                                        <div className='espaceLines'></div><br></br>

                                        Com essa camada protetiva, o serviço
                                        assegura informações críticas e sensíveis,
                                        obstruindo acessos inapropriados ou adulterações.
                                        <div className='espaceLines'></div><br></br>

                                        Essa prevenção reduz riscos, como:
                                        <div className='espaceLines'></div><br></br>
                                    </TitleGoogle>
                                    <CarrouselGoogle
                                        data={data12}
                                        arrowPrev={arrowLeft}
                                        arrowNext={arrowRight}
                                        slideShow={1}
                                        carrouselType='estilo2' />

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
                                  <img className='clickSetasFix' src={avisoSetas} alt="" />
                                </div>
                                <img className='dlp-img' src={manLaptop} alt="" />
                            </div>

                        </Container>
                    </Section>

                    <Section id="targetMenu4">
                        <Container>
                            <TitleGoogle
                                title="Público-alvo"
                                titleConfig={{ textAlign: 'center', color: '#ffff', marginTop: '-4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff', width: '54%' }}
                                spanClass='span-green'>
                                Buscando auxiliar demandas de produtividade e compartilhamento de dados de <span>médias e grandes</span> empresas, o Workspace possui diversificação em seu oferecimento de serviços para diferentes setores da indústria e seus departamentos.
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
                                Workspace pode se tornar um <span className='span-green'>aliado produtivo</span>?
                            </p>
                            <div className='video'>
                                <Video source={videoSource}></Video>
                                <img src={assistaAoVideo} alt="" />
                            </div>

                            <div className='displayFlex'>
                                <TitleGoogle
                                    title="Impacto Econômico"
                                    titleConfig={{ textAlign: 'left', color: '#b3d683', marginTop: '' }}
                                    paragraphConfig={{ textAlign: 'left', color: '#ffff', width: '80%'}}
                                    spanClass='span-white'>
                                    Podemos considerar como trunfos
                                    do Workspace, o aperfeiçoamento
                                    da comunicação e a estruturação otimizada
                                    de recursos, que impactam diretamente
                                    no pilar financeiro de uma empresa.
                                    <br></br><br></br>
                                    
                                    Assim, reduzindo as despesas, na mesma
                                    crescente em que gera eficácia na
                                    rotina laboral.
                                    <br></br><br></br>
                                    Clique nas setas para conferir alguns dados
                                    divulgados pelo Google sobre a realidade dos
                                    clientes após o investimento no Workspace:
                                </TitleGoogle>
                                <img src={predios} alt="" />
                            </div>
                            <CarrouselGoogle data={data5} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo4' />
                            <div className='espace2'>
                                <img className='clickSetasFix2' src={avisoSetasBrancas} alt="" />
                            </div>
                            <TitleGoogle
                                title="Tipos de Oferta"
                                titleConfig={{ textAlign: 'center', color: '#b3d683', marginTop: '4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff', width: '100%'}}
                                spanClass='span-green'>
                                Distribuído em planos mensais ou anuais, as ofertas do Workspace são separadas pelas seguintes famílias: Business e Enterprise.<br></br><br></br>

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
                                paragraphConfig={{ textAlign: 'left', color: 'black', width: '100%' }}>
                                Voltado para empresas de médio porte, a família
                                Business engloba uma estrutura propícia para
                                a colaboração e defesa de dados.
                            </TitleGoogle>
                            <div className='div-flex5'>
                                <CarrouselGoogle data={data6} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                                <img className='clickSetasFix' src={avisoSetas} alt="" />
                            </div>
                            <TitleGoogle
                                title="Enterprise"
                                titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '6rem' }}
                                paragraphConfig={{ textAlign: 'left', color: 'black', width: '100%', margin: '3rem 0' }}>
                                Aconselhável para empresas de grande porte,
                                a família Enterprise incorpora recursos para negócios
                                dependentes de uma infraestrutura mais vigorosa.
                            </TitleGoogle>
                            <div className='div-flex5'>
                                <CarrouselGoogle data={data7} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                                <img className='clickSetasFix' src={avisoSetas} alt="" />
                            </div>
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <TitleGoogle
                                title="Na Prática"
                                titleConfig={{ textAlign: 'center', color: '#ffff', marginTop: '-4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff', width: '64%' }}
                                spanClass='span-purple'>
                                Antes de continuar, que tal entender um pouco
                                mais da integração do Workspace com a rotina
                                de uma empresa? Use os botões para ler
                                a história de Ícaro:
                            </TitleGoogle>
                            <div className='espace2'>
                                <img className='clickSetasFix2' src={avisoSetasBrancas} alt="" />
                            </div>
                            <div className='ajustandoIMG'>
                                <CarrouselGoogle data={data8} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                            </div>
                            <TitleGoogle
                                title="Cenários de comercialização"
                                titleConfig={{ textAlign: 'left', color: '#ffff', marginTop: '6rem' }}
                                paragraphConfig={{ textAlign: 'left', color: '#ffff', width: '95%', margin: '2rem 0' }}
                                spanClass='span-white'>
                                Englobando seu atendimento tanto para os clientes que não utilizam o Workspace,
                                quanto os que desejam dar um upgrade em sua contratação, dispomos de dois
                                formatos de comercialização para atender as necessidades das empresas. Conheça abaixo:
                            </TitleGoogle>
                            <div className="div-flex-comercializacao">
                                <img src={clickImagensExpInfo} alt="" className="click-expand-conceitos" />
                                <ShowDownSliderGoogle data={GData4} />
                            </div>
                            <div className='div-flex-eficiencia' id="targetMenu6">
                                <TitleGoogle
                                    title="Eficiência"
                                    titleConfig={{ textAlign: 'left', color: '#ffff', marginTop: '6rem' }}
                                    paragraphConfig={{ textAlign: 'left', color: '#ffff' }}
                                    spanClass='span-white'>
                                    Propiciando aumento produtivo e assertividade comunicativa nas operações laborais,
                                    o Workspace sustenta seu impacto através
                                    da <span>integração.</span>
                                    <br></br><br></br>Assim, promovendo um ambiente de trabalho mais comunicativo através da facilidade na adaptação
                                    à seus aplicativos.<br></br><br></br>
                                    Clique nas setas para conferir alguns dados disponibilizados pelo Google acerca do tema.
                                </TitleGoogle>
                                <CarrouselGoogle data={data9} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' vertical={true} />
                            </div>
                            <div className='espace2'>
                                <img className='clickSetasFix2' src={avisoSetasBrancas} alt="" />
                            </div>
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <img src={galera} alt="" className='imagemCentralizada' />
                            <TitleGoogle
                                title="Vivo é a Solução!"
                                titleConfig={{ textAlign: 'center', color: '#ffff', marginTop: "4rem" }}
                                paragraphConfig={{ textAlign: 'left', color: '#ffff', width: '100%', margin: '2rem 0'}}
                                spanClass='span-white'>

                                Pioneira no oferecimento de pacotes de internet para telefonia celular, a Vivo atua no Brasil desde 2003, sendo reconhecida por sua entrega de qualidade e competência. Referência em transformação digital, aumentou seu portfólio de acordo com as evoluções tecnológicas e a percepção das dores do mercado.
                                Hoje, a empresa atua como um hub de soluções digitais, integrando os mais diferentes tipos de serviço.<br></br><br></br>
                                Na Vivo, o cliente conta com vantagens ao contratar ou transferir seus serviços para a empresa.
                            </TitleGoogle>
                            <Tab data={tabData}></Tab>
                            <img src={clickRetangulos} alt="" className='clickSetasFix' />
                        </Container>
                    </Section>
                    <Section bg={bg2branca2} bgOrientation='center center' bgSize='100% 100%' id="targetMenu7">
                        <Container>
                            <div className='flex-atendimento'>
                                <TitleGoogle
                                    title="Atendimento"
                                    titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '2rem' }}
                                    paragraphConfig={{ textAlign: 'left', color: 'black', width: '100%', margin: '2rem 0' }}
                                    spanClass='span-purple'>

                                    Através da contratação com a Vivo, o cliente
                                    adquire um serviço <span>internacionalmente</span>
                                    conhecido, sem qualquer temor com
                                    <span>extensos prazos de retorno</span> de atendimento
                                    ou <span>limitações</span> de seus funcionários quanto
                                    a uma <span>língua estrangeira.</span><br></br><br></br>

                                    Uma equipe dedicada ao Workspace pode
                                    ser contatada <span>24 horas por dia</span>, em <span>todos
                                        os dias da semana</span>, oferecendo suporte
                                    em <span>português</span>. De maneira direta e acessível,
                                    nossos colaboradores estão de prontidão
                                    para tirar <span>dúvidas e solucionar</span> possíveis erros
                                    que impactem a produtividade do cliente.
                                </TitleGoogle>
                                <img src={happyman} alt="" />
                            </div>
                            <ClickTip text='Clique nos ícones para expandir as informações.' center />
                            <div className='flex-atendimento2'>
                                <img src={happywoman} alt="" />
                                <TitleGoogle
                                    title="Forma de pagamento"
                                    titleConfig={{ textAlign: 'left', color: '#660099', marginTop: '' }}
                                    paragraphConfig={{ textAlign: 'left', color: 'black', marginTop: '1.5rem' }}
                                    spanClass='span-purple'>
                                    Com a parceria firmada com o Google, a Vivo conta com benefícios em relação à fatura
                                    do serviço, ofertando maior quantidade
                                    de meios de pagamento e preços equivalentes ao mercado local.
                                    <HorizontalAccordion />
                                </TitleGoogle>
                            </div>
                            
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <TitleGoogle
                                title="Na Prática"
                                titleConfig={{ textAlign: 'center', color: '#ffff', marginTop: '-4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                                spanClass='span-purple'>
                                Antes de finalizar, vamos conhecer a história<br></br>
                                de Carolina, dona de uma movimentada loja de<br></br>
                                roupas que integra soluções digitais ao seu dia a dia. <br></br>
                                Clique nos botões para ler.
                            </TitleGoogle>
                            <div className='espace2'>
                                <img className='clickSetasFix2' src={avisoSetasBrancas} alt="" />
                            </div>
                            <div className='ajustandoIMG2'>
                                <CarrouselGoogle data={data10} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                            </div>
                            <img src={assinatura} alt="" className='assinatura' />
                        </Container>
                    </Section>
                    
                </div>
            </div>
        </>
    )
}

export default GooglePage