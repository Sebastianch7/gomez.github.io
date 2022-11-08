function calcular() {
    const smlv = parseInt(document.getElementById('smlv').value);
    const aux = parseInt(document.getElementById('aux').value);
    const totalDay = parseInt(document.getElementById('totalDay').value);
    const lastDay = parseInt(document.getElementById('lastDay').value);

    const prima1 = parseInt(document.getElementById('prima1').value);
    const prima2 = parseInt(document.getElementById('prima2').value);

    const hed = parseInt(document.getElementById('hed').value);
    const hen = parseInt(document.getElementById('hen').value);

    let table_data = document.getElementById('table_data');
    let table_ley = document.getElementById('table_ley');
    
    salario = (smlv + aux);
    valor_dia = salario / 30;
    valor_hora = valor_dia / 8;
    valor_extra_diurna = valor_hora * 1.25;
    valor_extra_nocturna = valor_hora * 1.75;

    Salario_pendiente = valor_dia*lastDay;
    Vacaciones = (smlv*totalDay)/720;
    Prima_junio = (salario*prima1)/360;
    Prima_diciembre = (salario*prima2)/360;
    Cesantias = (salario*totalDay)/360;
    Interes_cesantias = Cesantias*0.12;

    canthed = hed*valor_extra_diurna;
    canthen = hen*valor_extra_nocturna;

    totalLiquidacion = Salario_pendiente+Vacaciones+Prima_junio+Prima_diciembre+Cesantias+Interes_cesantias+canthed+canthen;


    table = `<tr><th>Valor dia con aux</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(valor_dia)}</td></tr>`;
    table += `<tr><th>hora con aux</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(valor_hora)}</td></tr>`;
    table += `<tr><th>extra diurna con aux</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(valor_extra_diurna)}</td></tr>`;
    table += `<tr><th>extra nocturna con aux</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(valor_extra_nocturna)}</td></tr><hr>`;

    table += `<tr><th>Salario pendiente</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(Salario_pendiente)}</td></tr>`;
    table += `<tr><th>Vacaciones</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(Vacaciones)}</td></tr>`;
    table += `<tr><th>Prima junio</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(Prima_junio)}</td></tr>`;
    table += `<tr><th>Prima julio</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(Prima_diciembre)}</td></tr>`;
    table += `<tr><th>Cesantias</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(Cesantias)}</td></tr>`;
    table += `<tr><th>Interes cesantias</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(Interes_cesantias)}</td></tr>`;

    table += `<tr><th>extras diurnas</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(canthed)}</td></tr>`;
    table += `<tr><th>extras nocturnas</th><td>$ ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(canthen)}</td></tr>`;

    table_ley.innerHTML = table;
}