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
import image1 from '../../assets/images/google/workspace/showDownSlider/1-flexibilidade.png'
import image2 from '../../assets/images/google/workspace/showDownSlider/1-utilidade.png'
import image3 from '../../assets/images/google/workspace/showDownSlider/1-simplicidade.png'

// flexibilidade --> Circular Carrousel Google
import CircularCarrouselGoogle from '../../components/Google-Components/CircularCarrouselGoogle';

// Colaboração  --> carrousel horizontal 1
import CarrouselGoogle from '../../components/Google-Components/Carrousel';
import arrowLeft from '../../assets/images/google/workspace/carrousel-1/arrow-left.png'
import arrowRight from '../../assets/images/google/workspace/carrousel-1/arrow-right.png'
import imagemCarrousel1 from '../../assets/images/google/workspace/carrousel-1/1-maozinha.png'
import imagemCarrousel2 from '../../assets/images/google/workspace/carrousel-1/2-transf-digital.png'
import imagemCarrousel3 from '../../assets/images/google/workspace/carrousel-1/3-ver-unica.png'
import imagemCarrousel4 from '../../assets/images/google/workspace/carrousel-1/4-key.png'
import peopleTalking from '../../assets/images/google/workspace/carrousel-1/humans-talking.png'

// Produtividade --> showDownSliderGoogle 2
import Vivinho from '../../assets/images/google/workspace/produtividade/vivinho.png'
import minimalista1 from '../../assets/images/google/workspace/showDownSlider/2-minimalista.png'
import inteligenciaArtificial2 from '../../assets/images/google/workspace/showDownSlider/2-inteligenciaArtificial.png'
import produtividade3 from '../../assets/images/google/workspace/showDownSlider/2-produtividade.png'
import manutencao4 from '../../assets/images/google/workspace/showDownSlider/2-manutencao.png'
import imgModal1 from '../../assets/images/google/workspace/showDownSlider/imgModal1.png'
import imgModal2 from '../../assets/images/google/workspace/showDownSlider/imgModal2.png'
import imgModal3 from '../../assets/images/google/workspace/showDownSlider/imgModal3.png'
import imgModal4 from '../../assets/images/google/workspace/showDownSlider/imgModal4.png'
import fundamentos2Img from '../../assets/images/google/workspace/showDownSlider/clickConceitosExpandirInformacoes.png'

// Na prática 1 --> carrousel horizontal 2
import carrousel2img1 from '../../assets/images/google/workspace/carrousel-2/1.png'
import carrousel2img2 from '../../assets/images/google/workspace/carrousel-2/2.png'
import carrousel2img3 from '../../assets/images/google/workspace/carrousel-2/3.png'
import carrousel2img4 from '../../assets/images/google/workspace/carrousel-2/4.png'
import carrousel2img5 from '../../assets/images/google/workspace/carrousel-2/5.png'
import carrousel2img6 from '../../assets/images/google/workspace/carrousel-2/6.png'
import carrousel2img7 from '../../assets/images/google/workspace/carrousel-2/7.png'
import carrousel2img8 from '../../assets/images/google/workspace/carrousel-2/8.png'
import TitleGoogle from '../../components/Google-Components/Title';



//Produtividade 2 --> componente flávio
import clickIcon from '../../assets/images/google/workspace/produtividade2/clickIcon.png'
import TabViewWithImage from '../../components/Google-Components/TabViewWithImage';
import { TabviewWithImageData1 } from "../../data/TabviewWithImage.js";
import { TabviewWithImageData2 } from "../../data/TabviewWithImage2.js";

// Na prática 2 --> carrousel horizontal 3

import C3img1 from '../../assets/images/google/workspace/carrousel-3/1.png'
import C3img2 from '../../assets/images/google/workspace/carrousel-3/2.png'
import C3img3 from '../../assets/images/google/workspace/carrousel-3/3.png'
import C3img4 from '../../assets/images/google/workspace/carrousel-3/4.png'
import C3img5 from '../../assets/images/google/workspace/carrousel-3/5.png'
import C3img6 from '../../assets/images/google/workspace/carrousel-3/6.png'
import C3img7 from '../../assets/images/google/workspace/carrousel-3/7.png'
import { Tooltip } from 'react-tooltip';

// Segurança --> carrousel horizontal 4
import segIcon1 from '../../assets/images/google/workspace/dlp/seguranca-icon1.png'
import segIcon2 from '../../assets/images/google/workspace/dlp/seguranca-icon2.png'
import segIcon3 from '../../assets/images/google/workspace/dlp/seguranca-icon3.png'
import manPC from '../../assets/images/google/workspace/seguranca/manComputer.png'
import { Title } from '@mui/icons-material';


// DLP
import manLaptop from '../../assets/images/google/workspace/dlp/manLaptop.png'

// Público alvo --> ShowDownSlider 3 / Vídeo
import WomanCel from '../../assets/images/google/workspace/publicoAlvo/woman.png'
import pic1 from '../../assets/images/google/workspace/publicoAlvo/pic1.png'
import pic2 from '../../assets/images/google/workspace/publicoAlvo/pic2.png'
import pic3 from '../../assets/images/google/workspace/publicoAlvo/pic3.png'
import pic4 from '../../assets/images/google/workspace/publicoAlvo/pic4.png'
import pic5 from '../../assets/images/google/workspace/publicoAlvo/pic5.png'
import pic6 from '../../assets/images/google/workspace/publicoAlvo/pic6.png'
import Video from '../../components/Google-Components/Video';
import videoSource from '../../assets/videos/googleworkspace.mp4'



// Impacto econômico --> carrousel horizontal 5
import predios from '../../assets/images/google/workspace/impacto/predios.png'
import blackMan from '../../assets/images/google/workspace/oferta/blackman.png'
import tabela from '../../assets/images/google/workspace/oferta/tabela.png'


// Business --> carrousel horizontal 6
import clickSetas from '../../assets/images/google/workspace/business/clickSetas.png'
import manWoman from '../../assets/images/google/workspace/business/womanManPc.png'
import twoMan from '../../assets/images/google/workspace/business/happyMans.png'
import womanCat from '../../assets/images/google/workspace/business/womanCat.png'

// Enterprise --> carrousel horizontal 7
import blackblack from '../../assets/images/google/workspace/Enterprise/blakblack.png'
import white from '../../assets/images/google/workspace/Enterprise/white.png'

// Na prática 3 --> carrousel horizontal 8

// Cenários de comercialização --> ShowDownSlider Modal

// Eficiência --> carrousel de pé

// Vivo é a solução --> click aparece conteudo

// Atendimento --> ShowContentIcon

// Na prática 4 --> carrousel horizontal 9

// Assinatura



import '../../components/Google-Components/Carrousel/carrouselFix.css';
import Tab from '../../components/Google-Components/Tab';

const GooglePage = () => {
    const carrouselData = [
        {
            title: 'Ambiente Colaborativo',
            text: `Promoção de maior cooperatividade e comunicabilidade entre as equipes de uma empresa.`,
            imgCarrousel: imagemCarrousel1
        },
        {
            title: 'Transformação Digital',
            text: `Impacto na cultura da empresa promovendo maior produtividade por meio de um mindset digital, que significa usar a tecnologia como aliada a prática de novas estratégias corporativas.`,
            imgCarrousel: imagemCarrousel2
        },
        {
            title: 'Versão Única',
            text: `A garantia de que todos da equipe poderão trabalhar na versão mais recente de um arquivo, em tempo real, sendo acessada de qualquer lugar.`,
            imgCarrousel: imagemCarrousel3
        },
        {
            title: 'Segurança & Privacidade',
            text: `A garantia de que todos da equipe poderão trabalhar na versão mais recente de um arquivo, em tempo real, sendo acessada de qualquer lugar.`,
            imgCarrousel: imagemCarrousel4
        }
    ]

    const carrouselData2 = [
        {
            title: `Uma rede de supermercados de médio porte, localizada em Goiânia, acaba de efetuar a compra de seu principal concorrente.`,
            imgCarrousel: carrousel2img1
        },
        {
            title: `No processo de fusão das empresas, Roberta foi escolhida como uma das responsáveis por preparar um relatório financeiro da rede adquirida.`,
            imgCarrousel: carrousel2img2
        },
        {
            title: `Anteriormente, esse mesmo documento estava sendo produzido por Norma, 
            sua colega de equipe.`,
            imgCarrousel: carrousel2img3
        },
        {
            title: `Faltando menos de dois dias para o prazo de entrega, Roberta descobriu que estava trabalhando em uma versão desatualizada do arquivo.`,
            imgCarrousel: carrousel2img4
        },
        {
            title: `Norma lhe enviou o arquivo errado por e-mail antes de entrar de férias e agora será necessário um prazo maior para refazer parte do documento.`,
            imgCarrousel: carrousel2img5
        },
        {
            title: `Percebe como isso tudo poderia ser evitado com um sistema colaborativo de arquivos?`,
            imgCarrousel: carrousel2img6
        },
        {
            title: `Assim, o documento poderia ser editado ao mesmo tempo por Norma e Roberta, sem deixar dúvidas sobre qual é a verdadeira versão do relatório.`,
            imgCarrousel: carrousel2img7
        },
        {
            title: `Além disso, ele estaria armazenado na nuvem, sem necessidade de realizar o envio de um novo e-mail com anexo a cada versão criada.`,
            imgCarrousel: carrousel2img8
        }
    ]

    const carrouselData3 = [
        {
            title: `Lorena gerencia um laboratório de química analítica, que funciona dentro de uma universidade.`,
            imgCarrousel: C3img1
        },
        {
            title: `Atualmente, a instituição possui contratos com diferentes fornecedores de softwares, tanto para uso prático de edição de texto para relatórios, quanto para tarefas mais específicas.`,
            imgCarrousel: C3img2
        },
        {
            title: `O péssimo comportamento de Lucas, um funcionário da equipe que vem incomodando a todos há algum tempo, obrigou Lorena a demiti-lo na semana passada.`,
            imgCarrousel: C3img3
        },
        {
            title: `Como vingança, Lucas disponibilizou na internet o código da aplicação utilizado no laboratório, já que ainda possuía acesso à rede.`,
            imgCarrousel: C3img4
        },
        {
            title: `Você consegue identificar como esse problema poderia ser evitado?`,

            imgCarrousel: C3img5
        },
        {
            title: `Com o Workspace, a equipe de Lorena teria desvinculado o acesso de Lucas à nuvem da empresa através do Endpoint Managment, com rapidez e facilidade.`,
            imgCarrousel: C3img6
        },
        {
            title: `Além disso, a equipe poderia utilizar o Collab para o manuseio de ferramentas com código Python.`,
            imgCarrousel: C3img7
        }
    ]


    const carrouselData4 = [
        {
            title: '10 milhões',
            text: `de mensagens de spam são bloqueadas pelo Google Workspace.`,
        },
        {
            title: '694.000',
            text: `páginas da web são indexadas e apuradas em busca de software danoso.`,

        },
        {
            title: '7.000',
            text: `URLs falsas, executáveis e extensões de navegador que podem conter vírus, conteúdo indesejado ou tentativas de phishing são detectados e suspensos.`,

        },
        {
            title: '6.000',
            text: `instâncias de software indesejados são notificadas aos usuários.`,

        },
        {
            title: '1.000',
            text: `instâncias de <span>malware</span>
            </button> suspeitos são comunicadas aos usuários.`,
        }
    ]

    const carrouselData5 = [
        {
            title: '96%',
            text: `das empresas na lista Next Billion Dollar Startups da Forbes usam o Google Workspace.`,
        },
        {
            title: 'US$ 1,6 mi',
            text: `gerado com o ganho de produtividade e eficiência de TI.`,

        },
        {
            title: 'US$ 5,2 mi',
            text: `de economia com a redução de incidentes de segurança com malware de e-mail e exploits.`,

        },
    ]

    const carrouselData6 = [
        {
            title: 'Business Starter',
            text: `<span>Com</span> armazenamento de conta de <span>30 GB</span> por utilizador, o plano inclui os principais aplicativos do Google, como Gmail, Calendar, Docs e Chat.
            
            As reuniões no Meet contam com o limite de 300 usuários, além de possuir funcionalidades extras, como desfoque de fundo, quadro branco e legendas ao vivo.`,
            imgCarrousel: manWoman
        },
        {
            title: 'Business Standard',
            text: `Com armazenamento de conta de <span>2 TB</span>
            por utilizador, o plano inclui os principais aplicativos do Google.<br><br>
            
            As reuniões no Meet contam com o limite de <span>300 usuários</span>, gravação e QA, </span>Chat</span> com relatórios de segurança e controle, além do <span>PIN</span> de verificação de compartilhamento e o <span>armazenamento compartilhado</span> em equipe.`,

            imgCarrousel: twoMan
        },
        {
            title: 'Business Plus',
            text: `Com armazenamento de conta de <span>5 TB</span> por utilizador, o plano inclui as mesmas funcionalidades do Standard, acrescentadas de <span>tradução simultânea</span> das chamadas do Meet, <span>Vault</span>, <span>DLP Básico</span> e <span>gerenciamento avançado de endpoint</span>.`,
            imgCarrousel: womanCat
        },
    ]

    const carrouselData7 = [
        {
            title: 'Enterprise Essentials',
            text: `Com armazenamento de conta de <span>1 TB</span> por utilizador em pool, o plano conta com Editors, Chat e Meet, com limite de até <span>150 usuários</span> em reunião.
            
            Além disso, também possui a funcionalidade de <span>drive compartilhado</span> para equipes.`,
            imgCarrousel: blackblack
        },
        {
            title: 'Enterprise Standard',
            text: `Com armazenamento de conta <span>ilimitado</span>, possui as mesmas funcionalidades do plano Essentials, acrescentadas de reuniões 
            no Meet para <span>250 usuários<span> e transmissões para até <span>10 mil<span> pessoas, pacote de segurança com <span>Vault, DLP Avançado,
            Cloud Identity Premium (CIP) e controle e personalização de empresas avançados</span>.`,

            imgCarrousel: white
        },
        {
            title: 'Enterprise Plus',
            text: `Com armazenamento de conta <span>ilimitado</span>, possui as mesmas funcionalidades do plano Standard, acrescentadas de transmissões no Meet para até <span>100 mil</span> pessoas, <span>cancelamento de ruído</span> em chamadas, pacote de segurança com <span>Certificado Compliance, Security Center, 
            AppSheetPRO e Work Insights.</span>`,
            imgCarrousel: womanCat
        },
    ]

    const showDownSliderGoogleData = [
        {
            image: image1,
            display: false,
            texts: [
                'Flexibilidade'
            ],
        },

        {
            image: image2,
            display: false,
            texts: [
                'Utilidade'
            ],
        },
        {
            image: image3,
            display: false,
            texts: [
                'Simplicidade'
            ]
        },
    ]


    const showDownSliderGoogleData2 = [
        {
            image: minimalista1,
            display: false,
            texts: [
                'Minimalista'
            ],
            modal: {
                isBigModal: false,
                image: imgModal1,
                title: 'Minimalista e robusto',
                p: [
                    `Interface amigável que destaca as ferramentas úteis e mais recorrentes.`,
                ]
            },
        },

        {
            image: inteligenciaArtificial2,
            display: false,
            texts: [
                'Inteligência Artificial'
            ],
            modal: {
                isBigModal: false,
                image: imgModal2,
                title: 'Inteligência Artificial Nativa',
                p: [
                    `Integração instantânea com recursos baseados em IA* para automatização 
                    de tarefas.`,
                ]
            },
        },

        {
            image: produtividade3,
            display: false,
            texts: [
                'Produtividade'
            ],
            modal: {
                isBigModal: false,
                image: imgModal3,
                title: 'Produtividade e facilidade',
                p: [
                    `Ferramentas práticas que impactam diretamente na produtividade dos usuários.`,
                ]
            },
        },
        {
            image: manutencao4,
            display: false,
            texts: [
                'Manutenção'
            ],
            modal: {
                isBigModal: false,
                image: imgModal4,
                title: 'Manutenção Integrada',
                p: [
                    `Interface amigável que destaca as ferramentas úteis e mais recorrentes.`,
                ]
            },
        },
    ]

    const showDownSliderGoogleData3 = [
        {
            image: pic1,
            display: false,
            texts: [
                'Educação'
            ],
        },

        {
            image: pic2,
            display: false,
            texts: [
                'Tecnologia'
            ],
        },
        {
            image: pic3,
            display: false,
            texts: [
                'Varejo'
            ]
        },
        {
            image: pic4,
            display: false,
            texts: [
                'Saúde'
            ],
        },

        {
            image: pic5,
            display: false,
            texts: [
                'Tecnologia'
            ],
        },
        {
            image: pic6,
            display: false,
            texts: [
                'Manufatura'
            ]
        },
    ]

    const showDownSliderGoogleData4 = [
        {
            image: minimalista1,
            display: true,
            texts: [
                'Projeto Padrão'
            ],
            modal: {
                image: minimalista1,
                title: 'Minimalista e robusto',
                titleAlign: 'left',
                config:{justifyContent: 'space-between', width: '60rem', padding: '2rem'},
                imgSize: '12rem',
                paragraphMargin: '2rem',
                p: [
                    `Interface amigável que destaca as ferramentas úteis e mais recorrentes.`,
                    `Interface amigável que destaca as ferramentas úteis e mais recorrentes.`,
                    `Interface <span>amigável</span> que destaca as <span>ferramentas</span> úteis e mais recorrentes.`,
                ]
            },
        },
        {
            image: minimalista1,
            display: false,
            texts: [
                'Projeto especial'
            ],
            modal: {
                image: imgModal1,
                title: 'Minimalista e robusto',
                p: [
                    `Interface amigável que destaca as ferramentas úteis e mais recorrentes.`,
                ]
            },
        },
    ]

    const tabData =  [ 
        {
          buttonText:'Produtividade',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat ut dolores veniam nemo quia repudiandae architecto iusto, aliquid sed voluptas quas magnam quod porro, sunt nostrum labore a amet.',
        },
        {
          buttonText:'Ofertas especias',
          text: 'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat ut dolores veniam nemo quia repudiandae architecto iusto, aliquid sed voluptas quas magnam quod porro, sunt nostrum labore a amet.',
        },
        {
          buttonText:'Suporte',
          text: 'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat ut dolores veniam nemo quia repudiandae architecto iusto, aliquid sed voluptas quas magnam quod porro, sunt nostrum labore a amet.',
        },
        
      ]
    return (
        <>

            {/* Inicio */}
            <img src={retrancaImg} alt="" className='retranca' />
            <Section bg={bg1}>
                <Container>
                    <LogoGoogle />
                </Container>
            </Section>

            {/* Workspace */}
            <div className='divMae'>
                <Section>

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

                        <ShowDownSliderGoogle data={showDownSliderGoogleData} />

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
                            <CarrouselGoogle data={carrouselData} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                            <img src={peopleTalking} alt="" />
                        </div>

                    </Container>

                </Section>

                <Section bg={bg2branca} bgOrientation='center center' bgSize='100% 100%'>
                    <Container>
                        <>
                            <div className='div-flex2'>
                                <div>
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
                            <div className='div-flex3'>
                                <ShowDownSliderGoogle data={showDownSliderGoogleData2} />
                            </div>
                            <img src={fundamentos2Img} alt="" className='fundamentos2' />
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
                        <CarrouselGoogle data={carrouselData2} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo2' />
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
                            titleConfig={{ textAlign: 'center', color: '#FFB84C' }}
                            paragraphConfig={{ textAlign: 'center', color: '#ffff' }}>
                            O Google Workspace pode ser aplicado<br></br>
                            nos mais diferentes cenários possíveis.
                        </TitleGoogle>
                        <CarrouselGoogle data={carrouselData3} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo2' />
                    </Container>
                </Section>

                <Section bg={bg2branca2} bgOrientation='center center' bgSize='100% 100%'>
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
                        <div className='div-flex4'>
                            <img src={manPC} alt="" />
                            <CarrouselGoogle data={carrouselData4} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo4' />
                        </div>
                        <div className='dlp-content'>
                            <div>
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

                                <div className='dlp-riscos'>
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
                                </div>
                            </div>
                            <img className='dlp-img' src={manLaptop} alt="" />
                        </div>

                    </Container>
                </Section>

                <Section>
                    <Container>
                        <TitleGoogle
                            title="Público - Alvo"
                            titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '-4rem'}}
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
                                <ShowDownSliderGoogle data={showDownSliderGoogleData3} />
                                <div className='fundamentosImg'>
                                    <img src={fundamentosImg} alt="" className='fundamentos-click' />
                                </div>
                            </div>
                        </div>
                        <p className='pSolto'>
                            Afinal de contas, como e para quem o Google<br></br>
                            Workspace pode se tornar um <span className='span-orange'>aliado produtivo</span>?
                        </p>
                        <div className='video'>
                            <Video source={videoSource}></Video>
                        </div>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <div className='displayFlex'>
                            <TitleGoogle
                                title="Impacto Econômico"
                                titleConfig={{ textAlign: 'left', color: '#FFB84C', marginTop: ''}}
                                paragraphConfig={{ textAlign: 'left', color: '#ffff' }}
                                spanClass='span-orange'>
                                Podemos considerar como trunfos<br></br>
                                do Workspace, o aperfeiçoamento<br></br>
                                da comunicação e a estruturação otimizada<br></br>
                                de recursos, que impactam diretamente<br></br>
                                no pilar financeiro de uma empresa.<br></br><br></br>

                                Assim, reduzindo as despesas, na mesma<br></br>
                                crescente em que gera eficácia na<br></br>
                                rotina laboral.

                                Clique nas setas para conferir alguns dados<br></br>
                                divulgados pelo Google sobre a realidade dos<br></br>
                                clientes após o investimento no Workspace:
                            </TitleGoogle>
                            <img src={predios} alt="" />
                        </div>
                        <CarrouselGoogle data={carrouselData5} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo4' />
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
                <Section bg={bg2branca2} bgOrientation='center center' bgSize='100% 100%'>
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
                            <CarrouselGoogle data={carrouselData6} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                            <img src={clickSetas} alt="" className='clickSetas' />
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
                            <CarrouselGoogle data={carrouselData7} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
                            <img src={clickSetas} alt="" className='clickSetas' />
                        </div>
                    </Container>
                </Section>
                <Section>
                    <Container>
                        <TitleGoogle
                            title="Tipos de Oferta"
                            titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '-4rem' }}
                            paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                            spanClass='span-orange'>
                            Distribuído em planos mensais ou anuais, as ofertas<br></br>
                            do Workspace são separadas pelas seguintes famílias:<br></br>
                            <span>Business</span> e <span>Enterprise</span>.<br></br><br></br>
                        </TitleGoogle>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <TitleGoogle
                            title="Cenários de comercialização"
                            titleConfig={{ textAlign: 'center', color: '#FFB84C' }}
                            paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                            spanClass='span-orange'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni hic ipsum nesciunt sequi deleniti soluta ea accusantium iste nihil, quod mollitia reprehenderit dignissimos quam fuga perferendis voluptatem. Reprehenderit, eius?
                        </TitleGoogle>
                        <ShowDownSliderGoogle data={showDownSliderGoogleData4} />
                    </Container>
                </Section>


                <Section>
                    <Container>
                        <TitleGoogle
                            title="Vivo é a solução"
                            titleConfig={{ textAlign: 'center', color: '#f784da' }}
                            paragraphConfig={{ textAlign: 'center', color: '#ffff' }}
                            spanClass='span-orange'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni hic ipsum nesciunt sequi deleniti soluta ea accusantium iste nihil, quod mollitia reprehenderit dignissimos quam fuga perferendis voluptatem. Reprehenderit, eius?
                        </TitleGoogle>

                    <Tab data={tabData}></Tab>
                    </Container>
                </Section>
            </div>
        </>
    )
}

export default GooglePage