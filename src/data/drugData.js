const drugData = [
    {
        name: "Wybierz lek",
        singleDosageAdult: 0,
        dailyDosageAdult: 0,
        description: 'Opis działania substancji leczniczej',
        sideEffects: 'Pamietaj, że zażywanie każdego leku wiąże się z możliwością wystąpienia skutków ubocznych'
    },
    {
        name: "Paracetamol",
        singleDosageAdult: 1000,
        dailyDosageAdult: 4000,
        description: 'Przeciwgorączkowe oraz przeciwbólowe',
        sideEffects: 'Reakcje alergiczne, uszkodzenie wątroby, nudności, wymioty.' +
            ' Wiele złożonych leków o działaniu przeciwbólowym i przeciw grypie zawiera paracetamol – łatwo przedawkować!'
    },
    {
       name: "Ibuprofen",
        singleDosageAdult: 800,
        dailyDosageAdult: 1200,
        description:"Przeciwzapalnie, przeciwbólowe i przeciwgorączkowe",
        sideEffects: "Reakcje alergiczne, niestrawność, nudności, brak łaknienia"
    },
    {
        name: "Kodeina",
        singleDosageAdult: 40,
        dailyDosageAdult: 240,
        description: "Przeciwbólowe, przeciwkaszlowe – hamuje ośrodek kaszlu, znajdujący się w układzie nerwowym",
        sideEffects: 'Reakcje alergiczne, senność, otępienie, zawroty głowy, spowolnienie rytmu oddechowego.' +
            'Kodeina należy do grupy opioidów (jako składnik opium), czyli jest pochodną morfiny - może prowadzić do uzależnienia'
    },
    {
        name: "Kwas acetylosalicylowy - aspiryna",
        singleDosageAdult: 1000,
        dailyDosageAdult: 4000,
        description:"Przeciwbólowe, przeciwzapalne, przeciwzapalne, przeciwzakrzepowe",
        sideEffects: 'zwyrodnienie plamki żółtej, podrażnienie ścian żołądka, zwiększenie ryzyka wystąpienia krwotoków; ' +
            'nie powinien być stosowany przez osoby cierpiące na astmę, ponieważ może wywołać napad duszności (astmę aspirynową)',
        sideEffectsAspirinChildren: 'Aspiryna podawana poniżej 16 roku życia może wywołać  zespół Reye\'a, ' +
            'który może doprowadzić do trwałego uszkodzenia mózgu i innych narządów (m.in. wątroby, nerek, serca), ' +
            'a często  (aż w przypadku 15-20 proc. chorych) nawet do śmierci.'
    },
    {
        name: "Prometazyna",
        singleDosageAdult: 50,
        dailyDosageAdult: 150,
        description:"przeciwalergicznie, przeciwwymiotne, uspokajające, nasenne.",
        sideEffects: 'senność, zaburzenia koncentracji, zawroty i bóle głowy, niewyraźne widzenie, osłabienie mięśniowe'
    },
    {
        name: "Fenobarbital",
        singleDosageAdult: 300,
        dailyDosageAdult: 600,
        description:'przeciwdrgawkowe, uspokajające, nasenne',
        sideEffects: 'Senność, apatia, stany zamroczenia, zawroty głowy, depresja oddechowa, niewydolność krążenia, kołatanie serca'
    }
];

export default  drugData;