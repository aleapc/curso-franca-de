import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Basic · Get by',
    descricao: 'The Spanish that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'Weniger sagen, als da steht', pronta: true },
      { id: 'b02', titulo: 'Bonjour zuerst, alles andere danach', pronta: true },
      { id: 'b03', titulo: 'Pardon, und dann das, was Sie brauchen', pronta: true },
      { id: 'b04', titulo: 'Vier Dinge, die vor dem Abflug ablaufen', pronta: true },
      { id: 'b05', titulo: 'Motif, durée, adresse — drei Antworten und Sie sind durch', pronta: true },
      { id: 'b06', titulo: 'Vous avez — und dann, was Sie brauchen', pronta: true },
      { id: 'b07', titulo: 'Je peux, und dahinter alles, was Sie gerade tun müssen', pronta: true },
      { id: 'b08', titulo: 'Où est — die Frage, deren Antwort in den Kopf passt', pronta: true },
      { id: 'b09', titulo: 'Die Fahrkarte, und ob diese hier entwertet werden muss', pronta: true },
      { id: 'b10', titulo: 'Die Wörter, die vertraut aussehen — librairie, monnaie, actuellement', pronta: true },
      { id: 'b11', titulo: 'Je voudrais — die vier Laute, die die erste Runde bestellen', pronta: true },
      { id: 'b12', titulo: 'Sans — das eine Wort, das die Karte änderbar macht', pronta: true },
      { id: 'b13', titulo: 'Je suis allergique — der Satz, den Sie vor allem anderen sagen', pronta: true },
      { id: 'b14', titulo: 'L\'addition — die Zahl, die Sie hören, ist schon die ganze Zahl', pronta: true },
      { id: 'b15', titulo: 'C\'est combien, en terrasse — die drei Wörter, die überall hingehen', pronta: true },
      { id: 'b16', titulo: 'Je cherche — und der Mensch am Empfang sucht mit Ihnen', pronta: true },
      { id: 'b17', titulo: 'Apotheke, Schmerz und die Nummer, die von jedem Telefon geht', pronta: true },
      { id: 'b18', titulo: 'Der letzte Tag — abrechnen, den Koffer parken, den Satz sagen, der bleibt', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Intermediate · Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'Ihre Uhr, und die Stunde, in der der Saal sich füllt', pronta: true },
      { id: 'i02', titulo: 'Erst bonjour, dann öffnet der Tresen', pronta: true },
      { id: 'i03', titulo: 'Der Teller, den Sie nicht bestellt hätten', pronta: true },
      { id: 'i04', titulo: 'Eine Runde, und der Preis stand längst an der Tür', pronta: true },
      { id: 'i05', titulo: 'Die fünf Fragen, die Ihnen die ganze Woche gestellt werden', pronta: true },
      { id: 'i06', titulo: 'Gestern, laut erzählt', pronta: true },
      { id: 'i07', titulo: 'Das Lob, das in der Küche ankommt — und der nüchterne Satz, der etwas bewegt', pronta: true },
      { id: 'i08', titulo: 'Eingeladen an einen fremden Tisch', pronta: true },
      { id: 'i09', titulo: 'Der Sonntag und die zwölf Zonen, in denen die Rollläden oben bleiben', pronta: true },
      { id: 'i10', titulo: 'Geld hier: Bargeld geht immer, die Karte ist die mit den Bedingungen', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Advanced · Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'Wie sie reden, wenn es nicht an Sie gerichtet ist', pronta: true },
      { id: 'a02', titulo: 'Worüber sie lachen, und der eine Witz, der Ihnen gehört', pronta: true },
      { id: 'a03', titulo: 'Wer sie zu sein glauben', pronta: true },
      { id: 'a04', titulo: 'Der alte Streit', pronta: true },
      { id: 'a05', titulo: 'Die andere Sprache', pronta: true },
      { id: 'a06', titulo: 'Elf Feiertage, und nur einer leert wirklich die Straße', pronta: true },
      { id: 'a07', titulo: 'Allez-y, tu, non, bon — die vier Signale, die vor dem Satz ankommen', pronta: true },
      { id: 'a08', titulo: 'Die letzte Minute mit jedem von ihnen, und die Karte in Ihrer Tasche', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a04","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b17","b18","c01","c02","c03","e01","e02","e03","e04","e05","e06","e07","e08","i01","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);
