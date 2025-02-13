﻿let novyTestSablona = {
	nazov: "Ukážkový test č. 1",
	casovy_limit: 60,
	otazky: {
		1: {
			nazov: "Ako sa volá fakulta, na ktorej študujú členovia realizačného tímu tohto zadania? Uveďťe skratku alebo plný názov.",
			typ: 1,
			spravne_odpovede: [
				"FEI",
				"Fakulta elektrotechniky a informatiky"
			]
		},
		2: {
			nazov: "Ktoré štáty susedia so Slovenskou republikou?",
			typ: 2,
			odpovede: [
				{text: "Litva", je_spravna: false},
				{text: "Maďarsko", je_spravna: true},
				{text: "Ukrajina", je_spravna: true},
				{text: "Nový Zéland", je_spravna: false}
			],
			vie_student_pocet_spravnych: false
		},
		3: {
			nazov: "Vyberte všetky slovesá",
			typ: 2,
			odpovede: [
				{text: "spať", je_spravna: true},
				{text: "jesť", je_spravna: true},
				{text: "vňať", je_spravna: false},
				{text: "inovať", je_spravna: false}
			],
			vie_student_pocet_spravnych: true
		},
		4: {
			nazov: "Vytvorte správne páry",
			typ: 3,
			odpovede_lave: {
				1: "červený",
				2: "ostrý",
				3: "zelená",
				4: "šľachetné"
			},
			odpovede_prave: {
				1: "tráva",
				2: "srdce",
				3: "mak",
				4: "nôž"
			},
			pary: [
				{lava: 1, prava: 3},
				{lava: 2, prava: 4},
				{lava: 3, prava: 1},
				{lava: 4, prava: 2}
			]
		},
		5: {
			nazov: "Vytvorte správne páry",
			typ: 3,
			odpovede_lave: {
				1: "Slovensko",
				2: "Grécko",
				3: "USA",
				4: "Čína",
				5: "Brazília",
				6: "Sudán"
			},
			odpovede_prave: {
				1: "Severná Amerika",
				2: "Ázia",
				3: "Európa",
				4: "Antarktída"
			},
			pary: [
				{lava: 1, prava: 3},
				{lava: 2, prava: 3},
				{lava: 3, prava: 1},
				{lava: 4, prava: 2}
			]
		},
		6: {
			nazov: "Nakreslite, ako vyzerá dom.",
			typ: 4
		},
		7: {
			nazov: "Vypočítajte rovnicu 2x + 3 = 5.",
			typ: 5
		}
	}
};