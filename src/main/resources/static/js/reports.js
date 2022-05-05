function fetchOrderReport() {
    fetch("/reports/orders")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            showIncomeTable(jsonData);
        });
}

function fetchProductReport() {
    fetch("/reports/products")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            showProductTable(jsonData);
        });
}

function showIncomeTable(jsonData) {

    var incomeTable = document.getElementById("income-table");
    var jan = 0;
    var february = 0;
    var march = 0;
    var april = 0;
    var may = 0;
    var jun = 0;
    var jul = 0;
    var aug = 0;
    var sept = 0;
    var oct = 0;
    var nov = 0;
    var dec = 0;

    for (var i = 0; i < jsonData.length; i++) {

        var tr = document.createElement("tr");
        tr["raw-data"] = jsonData[i];

        var dateYearTd = document.createElement("td");
        dateYearTd.innerHTML = jsonData[i].year;
        tr.appendChild(dateYearTd);

        var dateMonthTd = document.createElement("td");
        dateMonthTd.innerHTML = jsonData[i].month;
        tr.appendChild(dateMonthTd);

        var o_statusTd = document.createElement("td");
        if (jsonData[i].orderStatus == 'ACTIVE') {
            o_statusTd.innerHTML = "aktív";
        } else {
            o_statusTd.innerHTML = "kiszállított"
        }
        tr.appendChild(o_statusTd);

        var m_incomeTd = document.createElement("td");
        m_incomeTd.innerHTML = jsonData[i].total + " Ft";
        tr.appendChild(m_incomeTd);

        var countTd = document.createElement("td");
        countTd.innerHTML = jsonData[i].count;
        tr.appendChild(countTd);

        incomeTable.appendChild(tr);
        if(jsonData[i].month == 1){
            jan += jsonData[i].total;
        }
        if(jsonData[i].month == 2){
            february += jsonData[i].total;
        }
        if(jsonData[i].month == 3){
            march += jsonData[i].total;
        }
        if(jsonData[i].month == 4){
            april += jsonData[i].total;
        }
        if(jsonData[i].month == 5){
            may += jsonData[i].total;
        }
        if(jsonData[i].month == 6){
            jun += jsonData[i].total;
        }
        if(jsonData[i].month == 7){
            jul += jsonData[i].total;
        }
        if(jsonData[i].month == 8){
            aug += jsonData[i].total;
        }
        if(jsonData[i].month == 9){
            sept += jsonData[i].total;
        }
        if(jsonData[i].month == 10){
            oct += jsonData[i].total;
        }
        if(jsonData[i].month == 11){
            nov += jsonData[i].total;
        }
        if(jsonData[i].month == 12){
            dec += jsonData[i].total;
        }
    }
}
