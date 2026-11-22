export const VERA_VOICE_KEY='zt-vera-voice-v1';
export type VoiceIdentity={voiceURI:string;name:string;lang:string;localService:boolean};
export type VoiceProfile={version:1;assistant:'ZT VERA';engine:'browser-web-speech';voice:VoiceIdentity;rate:0.95;pitch:1;volume:1};
export function identifyVoice(voice:VoiceIdentity):VoiceIdentity{return {voiceURI:voice.voiceURI,name:voice.name,lang:voice.lang,localService:voice.localService};}
export function selectVeraVoice<T extends VoiceIdentity>(voices:T[],profile:VoiceProfile|null):T|null{
 if(profile)return voices.find(v=>v.voiceURI===profile.voice.voiceURI&&v.name===profile.voice.name&&v.lang===profile.voice.lang&&v.localService===profile.voice.localService)??null;
 return voices.find(v=>v.lang==='es-DO')??voices.find(v=>v.lang.startsWith('es'))??null;
}
export function voiceProfile(voice:VoiceIdentity):VoiceProfile{return {version:1,assistant:'ZT VERA',engine:'browser-web-speech',voice:identifyVoice(voice),rate:0.95,pitch:1,volume:1};}
export function parseVoiceProfile(value:string):VoiceProfile{
 const p=JSON.parse(value);
 if(p?.version!==1||p.assistant!=='ZT VERA'||p.engine!=='browser-web-speech'||p.rate!==.95||p.pitch!==1||p.volume!==1||typeof p.voice?.localService!=='boolean'||!['voiceURI','name','lang'].every(k=>typeof p.voice[k]==='string'&&p.voice[k].length>0&&p.voice[k].length<=1000))throw Error('El archivo no es un perfil válido de la voz de VERA.');
 return voiceProfile(p.voice);
}
