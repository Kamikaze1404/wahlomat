///////////////////////////////////////////////////////////////////////

// Anzahl der Fragen auf 8 angepasst
var intQuestions = 8;

// Fragenkatalog-Datei bleibt gleich
var fileQuestions = "C:\Users\p780584\Desktop\Mat-O-Wahl-master";

// Antworten der Parteien aktualisiert
var fileAnswers = "C:\Users\p780584\Desktop\Mat-O-Wahl-master\Obsthausen_Parteien.csv";

// Definition der Parteien
var parties = [
    { name: "AFD", fullName: "Alternative für Deutschland", description: "Die AFD setzt sich für konservative Werte und eine restriktive Migrationspolitik ein.", website: "https://www.afd.de", logo: "afd.png" },
    { name: "SPD", fullName: "Sozialdemokratische Partei Deutschlands", description: "Die SPD steht für soziale Gerechtigkeit und progressive Reformen.", website: "https://www.spd.de", logo: "spd.png" },
    { name: "CDU", fullName: "Christlich Demokratische Union Deutschlands", description: "Die CDU vertritt christlich-konservative Werte und wirtschaftsliberale Ansätze.", website: "https://www.cdu.de", logo: "cdu.png" },
    { name: "Grüne", fullName: "Bündnis 90/Die Grünen", description: "Die Grünen setzen sich für Umwelt- und Klimaschutz sowie soziale Nachhaltigkeit ein.", website: "https://www.gruene.de", logo: "gruene.png" }
];

// Weitere Einstellungen bleiben bestehen
var intParties = 4;
var intPartyLogosImgWidth = "10%";
var intPartyLogosImgHeight = "10%";

var descriptionShowOnStart = 1;
var descriptionHeading1 = "Bundestagswahl";
var descriptionHeading2 = "Die Wahl zur neuen Regierung in Deutschland";
var descriptionExplanation = "Am 31. Februar finden in Deutschland Wahlen statt. Sie k&ouml;nnen sich hier alle Parteipositionen anschauen und miteinander vergleichen. Dies ist <strong>keine Wahlempfehlung</strong>, sondern ein Informationsangebot zu Wahlen! <br /> Zur Auswahl stehen die Parteien AFD, SPD, CDU und Grüne mit unterschiedlichen Meinungen zu kontroversen Themen in Deutschland.";

// Impressum und Datenschutz bleibt unverändert

// Fehlende Impressums-Variablen hinzufügen
var imprintPrivacyUrl = ""; // URL zur Datenschutzrichtlinie
var imprintPictures = ""; // Angabe zu Bildrechten/Quellen
var imprintProgramming = ""; // Verantwortlicher für die Programmierung
var imprintEditors = ""; // Redaktionsverantwortliche
var imprintVATid = "";


// Weitere Impressums-Variablen
var imprintGeneral = ""; // Allgemeine Impressumsinformationen
var imprintContact = ""; // Kontaktinformationen
var imprintDisputeResultion = ""; // Korrekte Schreibweise ohne Tippfehler
var imprintLink = "system/imprint.html";
var separator = ";";
var design = ["default.css","buttons-colors-on.css", "progressbar.css"];
var addons = [];
var language = "de";

// Statistik weiterhin deaktiviert
var statsRecord = 0;
var statsServer = "http://http://localhost:8000/extras/statistics/vote_txt.php";
