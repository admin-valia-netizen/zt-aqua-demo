import Vera from './vera';
import type {IconName} from '@/lib/progress';
const portals:{href:string;title:string;text:string;icon:IconName}[]=[
 {href:'/ciudadano',title:'Portal Ciudadano · Cliente',text:'Quiero solicitar o seguir un trámite notarial.',icon:'client'},
 {href:'/notario',title:'Portal Notario',text:'Quiero revisar y preparar documentos de mis clientes.',icon:'notary'},
 {href:'/colegio',title:'Portal del Colegio',text:'Quiero revisar habilitaciones profesionales.',icon:'college'},
 {href:'/instituciones',title:'Instituciones',text:'Presentación posterior al documento notarizado.',icon:'document'},
 {href:'/zt',title:'Administración ZT',text:'Quiero supervisar los servicios de la plataforma.',icon:'technical'},
];
export default function VeraWelcome({landing=false}:{landing?:boolean}){return <Vera introduce={landing} actor={landing?'Bienvenido a ZT Notaría Digital':'¿A qué portal quieres acceder?'} icon="client" message={landing?'Elige tu portal o entra a la página de inicio. Puedes continuar sin esperar a que termine la voz.':'Elige el portal que necesitas. Los accesos profesionales requieren su cuenta y permiso.'} action={landing?'Entrar a la página de inicio':undefined} href={landing?'/inicio':undefined} portals={portals} missing={['Elegir el portal que corresponda a lo que necesitas hacer.']}/>;}
