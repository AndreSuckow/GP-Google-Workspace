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

import indSetasbgRoxo from '../../assets/images/clickTip/indSetasbgRoxo.png'
import indSetasbgBranco from '../../assets/images/clickTip/indSetasbgBranco.png'
import clickImagensExpInfo from '../../assets/images/clickTip/clickImagensExpInfo.png'
import clickConceitosExpInfo from '../../assets/images/clickTip/clickConceitosExpInfoBgRoxo.png'
import clickImagensExpInfoBgRoxo from '../../assets/images/clickTip/clickImagensExpInfoBgRoxo.png'

// Na prática 2 --> carrousel horizontal 3

import C3img1 from '../../assets/images/google/workspace/carrousel-3/1.png'
import C3img2 from '../../assets/images/google/workspace/carrousel-3/2.png'
import C3img3 from '../../assets/images/google/workspace/carrousel-3/3.png'
import C3img4 from '../../assets/images/google/workspace/carrousel-3/4.png'
import C3img5 from '../../assets/images/google/workspace/carrousel-3/5.png'
import C3img6 from '../../assets/images/google/workspace/carrousel-3/6.png'
import C3img7 from '../../assets/images/google/workspace/carrousel-3/7.png'

// Segurança --> carrousel horizontal 4
import segIcon1 from '../../assets/images/google/workspace/dlp/seguranca-icon1.png'
import segIcon2 from '../../assets/images/google/workspace/dlp/seguranca-icon2.png'
import segIcon3 from '../../assets/images/google/workspace/dlp/seguranca-icon3.png'
import manPC from '../../assets/images/google/workspace/seguranca/manComputer.png'


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
// import videoSource from '../../assets/videos/googleworkspace.mp4'



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
import UMicaro from '../../assets/images/google/workspace/Enterprise/icaro.png'
import DOIScantora from '../../assets/images/google/workspace/Enterprise/cantora.png'
import TRESshow from '../../assets/images/google/workspace/Enterprise/show.png'
import QUATROicaropensativo from '../../assets/images/google/workspace/Enterprise/icaropensativo.png'
import CINCOicaronote from '../../assets/images/google/workspace/Enterprise/icaronote.png'
import SEISicaroextressado from '../../assets/images/google/workspace/Enterprise/icaroextressado.png'
import SETEmuieicaro from '../../assets/images/google/workspace/Enterprise/muieicaro.png'
import OITOicarotendoideias from '../../assets/images/google/workspace/Enterprise/icarotendoideias.png'


// Cenários de comercialização --> ShowDownSlider Modal
import clickImagemInfo from '../../assets/images/google/workspace/comercializacao/clickImagensExpandirInfo.png'
import projetopadrao from '../../assets/images/google/workspace/comercializacao/projetopadrao.png'
import projetoespecial from '../../assets/images/google/workspace/comercializacao/projetoespecial.png'
import imgpadrao from '../../assets/images/google/workspace/comercializacao/imgprojetopadrao.png'
import imgespecial from '../../assets/images/google/workspace/comercializacao/imgprojetoespecial.png'

// Eficiência --> carrousel de pé

import cadeirante from '../../assets/images/google/workspace/eficiencia/1cadeirante.png'
import morena1 from '../../assets/images/google/workspace/eficiencia/morena1.png'
import morena2 from '../../assets/images/google/workspace/eficiencia/morena2.png'

// Vivo é a solução --> click aparece conteudo
import galera from '../../assets/images/google/workspace/solucao/solucao.png'

// Atendimento --> ShowContentIcon
import happyman from '../../assets/images/google/workspace/atendimento/happyman.png'
import happywoman from '../../assets/images/google/workspace/atendimento/happywoman.png'
import HorizontalAccordion from '../../components/Sections-Components/HorizontalAccordion'
import ClickTip from '../../components/Sections-Components/ClickTip'
// Na prática 4 --> carrousel horizontal 9

import ultimo1 from '../../assets/images/google/workspace/ultima/1.png'
import ultimo2 from '../../assets/images/google/workspace/ultima/2.png'
import ultimo3 from '../../assets/images/google/workspace/ultima/3.png'
import ultimo4 from '../../assets/images/google/workspace/ultima/4.png'

// Assinatura
import assinatura from '../../assets/images/google/workspace/assinatura/academiav.png'


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
            text: `Preservação de dados vigorosa da marca Google, contando com uma infraestrutura completa na defesa de ataques.`,
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


    const carrouselData8 = [
        {
            text: `<span>Ícaro é chefe da equipe de marketing de uma gravadora.</span>`,
            imgCarrousel: UMicaro
        },
        {
            text: `<span>Na reunião de planejamento semestral de lançamentos, a presidência destacou a importância da divulgação do DVD ao vivo de uma cantora recém-contratada.</span>`,

            imgCarrousel: DOIScantora
        },
        {
            text: `<span>Com isso, ele precisa buscar inspiração nas músicas e nos elementos cenográficos do show, criando assim, uma campanha satisfatória tanto para a gravadora, quanto para a artista.</span>`,
            imgCarrousel: TRESshow
        },
        {
            text: `<span>Ícaro decidiu reunir sua equipe para que todos pudessem contribuir com insights sobre a demanda.</span>`,
            imgCarrousel: QUATROicaropensativo
        },
        {
            text: `<span>A comunicação, porém, está confusa. Os colaboradores compartilham a tela inúmeras vezes e precisam ser ágeis para anotar as ideias uns dos outros.</span>`,

            imgCarrousel: CINCOicaronote
        },
        {
            text: `<span>Para piorar a situação, a equipe não consegue gravar a reunião para revisitar com calma os pontos abordados posteriormente.</span>`,
            imgCarrousel: SEISicaroextressado
        },
        {
            text: `<span>Percebe como o uso do Jamboard e Meet simplificaria a demanda da equipe?</span>`,

            imgCarrousel: SETEmuieicaro
        },
        {
            text: `<span>Dessa forma, eles conseguiriam compartilhar insights de forma prática e produtiva, além de gravar toda a reunião sem qualquer limite de tempo.</span>`,
            imgCarrousel: OITOicarotendoideias
        },
    ]


    const carrouselData9 = [
        {
            title: `92%`,
            text: `de usuários do Workspace afirmaram que a colaboração em tempo real se tornou um padrão em suas equipes`,
            imgCarrousel: cadeirante
        },
        {
            title: `55%`,
            text: `dos usuários que criam <br>documentos colaborativos se<br> sentem mais produtivos`,

            imgCarrousel: morena1
        },
        {
            title: `20%`,
            text: `de redução nos chamados<br> de suporte técnico`,
            imgCarrousel: morena2
        },
    ]

    const carrouselData10 = [
        {
            text: `<span>O verão acaba de chegar e Carolina está de vento 
            em poupa com as vendas de sua nova linha de camisetas.</span>`,
            imgCarrousel: ultimo1
        },
        {
            text: `<span>Para facilitar a organização de arquivos, ela contratou um serviço estrangeiro para armazenar as planilhas de sua loja de roupas,com o objetivo de facilitar o acesso entre a sua equipe.</span>`,

            imgCarrousel: ultimo2
        },
        {
            text: `<span>Dias antes de fechar para balanço, o serviço saiu do ar, e desde então os colaboradores não conseguem entrar em contato com o provedor, já que a maioria da equipe não domina a língua inglesa e a equipe brasileira está de recesso por conta do ano novo.</span>`,
            imgCarrousel: ultimo3
        },
        {
            text: `<span>Após dias sem um serviço satisfatório, Carolina decidiu contratar o Workspace com a Vivo; dessa forma, ela tem garantido 
            um atendimento 24 horas, em português, com facilidade.</span>`,
            imgCarrousel: ultimo4
        },

    ]

    const carrouselData11 = [
        {
            text: `<span>Vazamento de dados e/ou documentos sigilosos.</span>`,
            imgCarrousel: segIcon1
        },
        {
            text: `<span>Perdas de materiais.</span>`,

            imgCarrousel: segIcon2
        },
        {
            text: `<span>Hackeamento de contas.</span>`,
            imgCarrousel: segIcon3
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
            image: projetopadrao,
            display: true,
            texts: [
                'Projeto Padrão'
            ],
            modal: {
                image: imgpadrao,
                title: 'Licença Única',
                titleAlign: 'left',
                config: { justifyContent: 'space-between', width: '50rem', padding: '2rem' },
                imgSize: '12rem',
                paragraphMargin: '2rem',
                p: [
                    `<ul>
                        <li>
                            <span>Nova contratação</span> de uma oferta da <span>mesma família</span> de produtos, respeitando a regra de até <span>300 licenças</span> para o plano Business e acima de 300 licenças para <span>Enterprise</span>;
                        </li><br>
                        <li>
                            <span>Upgrade</span> de todas as licenças da oferta atual do cliente para qualquer outro plano;
                        </li><br>
                        <li>
                            Projeto para <span>ampliar</span> licenças na oferta atual do cliente.
                        </li>
                    </ul>`,
                ]
            },
        },
        {
            image: projetoespecial,
            display: false,
            texts: [
                'Projeto especial'
            ],
            modal: {
                image: imgespecial,
                title: 'Mix de licenças / PME e dispositivos',
                titleAlign: 'left',
                config: { justifyContent: 'space-between', width: '50rem', padding: '2rem' },
                imgSize: '12rem',
                paragraphMargin: '2rem',
                p: [
                    `<ul>
                        <li>
                            <span>Novas contratações</span> de um <span>mix</span> de ofertas de produtos, independentemente da família;
                        </li><br>
                        <li>
                            <span>Ampliação</span> de licenças de outra oferta ou família para um cliente que já possui o Workspace;
                        </li><br>
                        <li>
                        Projeto para <span>ampliar</span> licenças na oferta atual do cliente.
                        </li>
                    </ul>`,
                    `<img src='../../assets/images/confirme.png'</img>`,
                ]
            },
        },
    ]

    const tabData = [
        {
            buttonText: 'Produtividade',
            text: `A centralização de serviços na Vivo impacta diretamente na produtividade. Logo, o cliente não precisará administrar relações com 
            um número maior de fornecedores do que ele realmente necessita.`,
        },
        {
            buttonText: 'Ofertas especias',
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
                                        <ShowDownSliderGoogle data={showDownSliderGoogleData2} />
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
                                titleConfig={{ textAlign: 'center', color: '#FFB84C', marginTop: '4rem' }}
                                paragraphConfig={{ textAlign: 'center', color: '#ffff' }}>
                                O Google Workspace pode ser aplicado<br></br>
                                nos mais diferentes cenários possíveis.
                            </TitleGoogle>
                            <img src={indSetasbgRoxo} alt="" className='clickSetasFix' />
                            <CarrouselGoogle data={carrouselData3} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo2' />
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
                                    <ShowDownSliderGoogle data={showDownSliderGoogleData3} />
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
                                <CarrouselGoogle data={carrouselData6} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
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
                                <CarrouselGoogle data={carrouselData7} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
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
                                <CarrouselGoogle data={carrouselData8} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
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
                                <ShowDownSliderGoogle data={showDownSliderGoogleData4} />
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
                                <CarrouselGoogle data={carrouselData9} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' vertical={true} />
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
                                <CarrouselGoogle data={carrouselData10} arrowPrev={arrowLeft} arrowNext={arrowRight} slideShow={1} carrouselType='estilo1' />
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