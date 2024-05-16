// Product data arrays voor elke sectie
const productsSection1_2 = [
    { name: 'Frax Gezicht + Diepte Reiniging', price: '€ 120,00' },
    { name: 'Frax Gezicht', price: '€ 90,00' },
    { name: 'Frax Hals + Decolleté', price: '€ 160,00' },
    { name: 'Frax Lichaam', price: 'Vanaf € 60,00' },
    { name: 'TOSKANI PEELINGS', price: 'Vanaf € 130,00' },
    { name: 'TCA Peeling', price: 'Vanaf € 170,00' },
    { name: 'Basis Schoonheid', price: 'Vanaf € 75,00' },
    { name: 'Uitgebreid Schoonheid', price: '€ 90,00' },
    { name: 'Biopeeling', price: '€ 80,00' },
    { name: 'Dermapen behandeling', price: '€ 130,00' },
    { name: 'Wimper Lifting', price: '€ 60,00' },
    { name: 'Vitamine Behandeling NCTF HA FILORGA', price: '€ 150,00' },
    { name: 'Consult', price: '€ 5,29' },
    { name: 'Epileren', price: '€ 10,29' },
    { name: 'Epileren + wenkbrauwen verven', price: '€ 15,50' },
    { name: 'Wimpers / Wenkbrauwen Verven', price: '€ 15,50' },
];

const productsSection3_4 = [
    { name: 'Frax Gezicht + Diepte Reiniging', price: '€ 100,29' },
    { name: 'MANNEN Schouders', price: '€ 125,29' },
    { name: 'MANNEN Oksels', price: '€ 40,29' },
    { name: 'MANNEN Hele Rug', price: '€ 200,29' },
    { name: 'MANNEN BovenRug OF OnderRug', price: '€ 125,29' },
    { name: 'MANNEN Borst + Buik', price: '€ 200,29' },
    { name: 'MANNEN Borst OF Buik', price: '€ 125,29' },
    { name: 'MANNEN NEK', price: '€ 50,29' },
    { name: 'MANNEN Hals', price: '€ 50,29' },
    { name: 'MANNEN Wangen', price: '€ 25,29' },
    { name: 'MANNEN Oren', price: '€ 25,29' },
    { name: 'MANNEN Handen', price: '€ 25,29' },
    { name: 'MANNEN (samengestelde pakket) let op! alleen bestaande klanten', price: 'Vanaf € 25,29' },
    { name: 'Gentle laser ontharen vrouwen ( Hele lichaam )', price: '€ 400,00' },
    { name: 'Gentle 5 onderdelen', price: '€ 250,00' },
    { name: 'Gentle Gezicht + Hals', price: '€ 75,00' },
    { name: 'Gentle Gezicht', price: '€ 60,00' },
    { name: 'Gentle Bovenlip en kin', price: '€ 30,29' },
    { name: 'Gentle Bovenlip', price: '€ 20,29' },
    { name: 'Gentle Kin', price: '€ 20,29' },
    { name: 'Gentle Bakkebaard', price: '€ 20,29' },
    { name: 'Gentle Oksels', price: '€ 35,00' },
    { name: 'Gentle Borsten', price: '€ 35,00' },
    { name: 'Gentle Tepelhof', price: '€ 20,00' },
    { name: 'Gentle Decolleté', price: '€ 30,00' },
    { name: 'Gentle Buik', price: '€ 40,00' },
    { name: 'Gentle Navelstreep', price: '€ 15,29' },
    { name: 'Gentle Hele Rug', price: '€ 75,00' },
    { name: 'Gentle Bovenrug Of Onderrug', price: '€ 50,29' },
    { name: 'Gentle Hele armen', price: '€ 100,29' },
    { name: 'Gentle Bovenarm Of OnderArm', price: '€ 65,29' },
    { name: 'Gentle Handen', price: '€ 20,29' },
    { name: 'Gentle Hele benen', price: '€ 150,00' },
    { name: 'Gentle Bovenbenen', price: '€ 85,00' },
    { name: 'Gentle Onderbenen', price: '€ 75,00' },
    { name: 'Gentle Hele Billen met bilnaad', price: '€ 80,00' },
    { name: 'Gentle Hele Billen zonder bilnaad', price: '€ 70,00' },
    { name: 'Gentle Bikini compleet', price: '€ 75,00' },
    { name: 'Gentle Bikinilijn', price: '€ 65,29' },
];

// Functie om productrijen te genereren voor elke sectie
function generateProductRowsSection1_2() {
    const tbody = document.getElementById('price-table-body-section1');
    generateProductRows(productsSection1_2, tbody);
}

function generateProductRowsSection3_4() {
    const tbody = document.getElementById('price-table-body-section2');
    generateProductRows(productsSection3_4, tbody);
}

function generateProductRows(products, tbody) {
    tbody.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
        `;
        tbody.appendChild(row);
    });
}

// Roep de functies aan om productrijen te genereren voor elke sectie wanneer de pagina laadt
window.onload = function() {
    generateProductRowsSection1_2();
    generateProductRowsSection3_4();
};
